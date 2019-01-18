//     Copyright (C) 2018 Christopher David Ramos

function getNavSection() {
    const UPK = dictionary.PROPS
    const UI = dictionary.UI

    const COLORS = UI.COLORS.SCHEME

    const goToUserCardAction = CardService.newAction()
        .setFunctionName("goToUserCardCallback")

    const refreshMainCardAction = CardService.newAction()
        .setFunctionName("refreshHomeCardCallback")

    let settingsTextButton = "SETTINGS"

    const STATE_MINT = userProperties.getProperty(UPK.STATE.MINT)

    if (STATE_MINT === "MINT") {
        settingsTextButton = "SET ADDRESS"
    }

    const buttonSet = CardService.newButtonSet()
        .addButton(CardService
                   .newTextButton()
                   .setText(`<font color="${COLORS.SECONDARY}">[ ${settingsTextButton} ]</font>`)
                   .setOnClickAction(goToUserCardAction))

    if (STATE_MINT !== "MINT") {
        buttonSet.addButton(CardService
                            .newTextButton()
                            .setText(`<font color="${COLORS.SECONDARY}">[ REFRESH ]</font>`)
                            .setOnClickAction(refreshMainCardAction))
    }

    return CardService.newCardSection()
        .setHeader(UI.PLACEHOLDER_TEXT.CARD_SECTION_HEADER)
        .addWidget(buttonSet)
}
