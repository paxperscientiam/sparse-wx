//     Copyright (C) 2018 Christopher David Ramos
function getWeatherSection() {
    const UPK = dictionary.PROPS
    const UI = dictionary.UI
    const COLORS = UI.PALETTE

    const isNotMint = userProperties.getProperty(UPK.STATE.MINT) === "USED"

    const alertUrl = dictionary.INTERFACE.NationalWeatherServiceInterface.URL.STATE_ALERTS

    const userstate = userProperties.getProperty(UPK.USER.STATE)

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
            header += ` (⚠ ${objgetAlertsByStateService[1]} state <a href="${alertUrl}${userstate}.php?x=1" target="_blank" title="NOAA Alerts">alerts</a>)`
        }
    }

    let sectionHeader = "Last updated: "

    const strUpdateDate = userProperties.getProperty(UPK.WX.WX_UPDATE_TIME)
    Logger.log("TZ IS " +  userProperties.getProperty(UPK.WX.TZ))

    const dateUpdateDate = new Date(strUpdateDate)

    if (isNull(strUpdateDate) || isNaN(dateUpdateDate)) {
        if (isNotMint) {
            sectionHeader += "unknown"
        } else {
            sectionHeader = " "
        }
    } else if (dateUpdateDate instanceof Date) {
        sectionHeader += formatDateService(dateUpdateDate)
        if (objForecastStaleness[0]) {
            //            sectionHeader += " (" + objForecastStaleness[1] + ")"
            sectionHeader = `Last updated ${objForecastStaleness[1]} ago`
        }
    }

    const wxSection = CardService.newCardSection()
    if (sectionHeader.length > 1) {
        wxSection.setHeader(sectionHeader)
    }
    wxSection.addWidget(CardService.newTextParagraph()
                        .setText(header))

    try {
        let i = 0
        do {
            wxSection.addWidget(WeatherWidget(i))
            i += 1
        } while (i < UI.WX_SECTION__WIDGET_COUNT)
    } catch (e) {
        Logger.log(e)
        let noWXcomment
        if (isNotMint) {
            noWXcomment = "Unable to determine your location. Have you set your address?"
        } else {
            noWXcomment = "Welcome to SparseWx. To get started, click [ SET ADDRESS ] below."
        }
        wxSection.addWidget(WeatherErrorWidget(noWXcomment))
    }
    return wxSection
}
