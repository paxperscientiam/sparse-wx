//     Copyright (C) 2018 Christopher David Ramos

function getNavSection() {
    const UI = dictionary.UI

    const COLORS = UI.COLORS.SCHEME

    let settingsTextButton = "SETTINGS"

    const STATE_MINT = userProperties.getProperty(UPK.STATE.MINT)

    if (STATE_MINT === "MINT") {
        settingsTextButton = "SET ADDRESS"
    }

    return CardService.newCardSection()
        .addWidget(NavButtonsWidget({
            settingsTextButton,
        }))
}
