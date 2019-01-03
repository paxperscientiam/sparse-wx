//     Copyright (C) 2018 Christopher David Ramos


// function getWeatherSection(dictionary) {
//     //  const upk = dictionary.PROPS
//     return getWeatherSectionFallbackSection()
// }

function getWeatherSection() {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS
    const UI = dictionary.UI

    const objForecastStaleness = getForecastStalenessService()

    const locality = userProperties.getProperty(UPK.USER.CITY)

    let header = userProperties.getProperty(UPK.USER.STATE_LONG)
    if (isSet(locality)) {
        header = locality + ", " + header
    }

    const objgetAlertsByStateService = getAlertsByStateService()

    if (!isSet(header)) {
        header = UI.PLACEHOLDER_TEXT.CARD_SECTION_HEADER
    }

    if (isSet(header)) {
        if (objgetAlertsByStateService[0]) {
            header += ` (⚠ ${objgetAlertsByStateService[1]} state alerts)`
        }
    }

    let sectionHeader = "Last updated: "

    const strUpdateDate = userProperties.getProperty(UPK.WX.WX_UPDATE_TIME)
    Logger.log("TZ IS " +  userProperties.getProperty(UPK.WX.TZ))

    const dateUpdateDate = new Date(strUpdateDate)

    if (isNull(strUpdateDate) || isNaN(dateUpdateDate)) {
        sectionHeader += "unknown"
    } else if (dateUpdateDate instanceof Date) {
        sectionHeader += formatDateService(dateUpdateDate)
        if (objForecastStaleness[0]) {
            //            sectionHeader += " (" + objForecastStaleness[1] + ")"
            sectionHeader = `Last updated ${objForecastStaleness[1]} ago`
        }
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
