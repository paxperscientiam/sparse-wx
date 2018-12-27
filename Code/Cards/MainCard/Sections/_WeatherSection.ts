//     Copyright (C) 2018 Christopher David Ramos


// function getWeatherSection(dictionary) {
//     //  const upk = dictionary.PROPS
//     return getWeatherSectionFallbackSection()
// }

function getWeatherSection() {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS
    const UI = dictionary.UI

    let header = userProperties.getProperty(UPK.USER.ADDRESS)

    if (!isSet(header)) {
        header = UI.PLACEHOLDER_TEXT.CARD_SECTION_HEADER
    }

    let sectionHeader

    const strUpdateDate = userProperties.getProperty(UPK.WX.WX_UPDATE_TIME)

    if (isNull(strUpdateDate)) {
        sectionHeader = UI.PLACEHOLDER_TEXT.CARD_SECTION_HEADER
    }

    const dateUpdateDate = new Date(strUpdateDate)

    if (isNaN(dateUpdateDate)) {
        sectionHeader = UI.PLACEHOLDER_TEXT.CARD_SECTION_HEADER
    } else if (dateUpdateDate instanceof Date) {
        sectionHeader = formatDateService(dateUpdateDate)
        sectionHeader = `Last updated: ${sectionHeader}`
    }

    const wxSection = CardService.newCardSection()
        .setHeader(sectionHeader)
        .addWidget(CardService.newTextParagraph()
                   .setText(header))

    try {
        let i = 0
        do {
            wxSection.addWidget(WeatherWidget(i))
            i += 1
        } while (i < UI.WX_SECTION__WIDGET_COUNT)
    } catch (e) {
        Logger.log(e)
        wxSection.addWidget(CardService.newKeyValue()
                            .setIconUrl(UI.WX.ERROR)
                            .setContent("Unable to determine your location. Have you set your address?")
                            .setMultiline(true))
    }
    return wxSection
}
