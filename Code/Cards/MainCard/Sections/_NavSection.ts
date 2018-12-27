//     Copyright (C) 2018 Christopher David Ramos

function getNavSection() {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS
    const UI = dictionary.UI

    const goToUserCardAction = CardService.newAction()
        .setFunctionName("goToUserCardCallback")

    const refreshMainCardAction = CardService.newAction()
        .setFunctionName("refreshHomeCardCallback")

    const settingsTextButton = "SETTINGS"

    //   if (args.mode === "fallback") {
    //         settingsTextButton = "SET ADDRESS"
    //     }
    const STATE_MINT = userProperties.getProperty(UPK.STATE.MINT)

    const buttonSet = CardService.newButtonSet()
        .addButton(CardService
                   .newTextButton()
                   .setText(`<font color="#ea9999">${settingsTextButton}</font>`)
                   .setOnClickAction(goToUserCardAction))

    if (STATE_MINT !== "MINT") {
        buttonSet.addButton(CardService
                            .newTextButton()
                            .setText('<font color="#ea9999">REFRESH</font>')
                            .setOnClickAction(refreshMainCardAction))
    }

    return CardService.newCardSection()
        .setHeader(UI.PLACEHOLDER_TEXT.CARD_SECTION_HEADER)
        .addWidget(buttonSet)
}
