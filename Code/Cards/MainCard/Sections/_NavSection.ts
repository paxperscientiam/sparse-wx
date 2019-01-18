//     Copyright (C) 2018 Christopher David Ramos

function getNavSection() {
    const UPK = dictionary.PROPS
    const UI = dictionary.UI

    const COLORS = UI.COLORS.SCHEME

    let settingsTextButton = "SETTINGS"

    const STATE_MINT = userProperties.getProperty(UPK.STATE.MINT)

    if (STATE_MINT === "MINT") {
        settingsTextButton = "SET ADDRESS"
    }

    return CardService.newCardSection()
        .setHeader(UI.PLACEHOLDER_TEXT.CARD_SECTION_HEADER)
        .addWidget(NavButtonsWidget({
            settingsTextButton,
        }))
}
