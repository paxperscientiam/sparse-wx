function NavButtonsWidget(strButtons) {
    const UI = dictionary.UI
    const COLORS = UI.COLORS.SCHEME
    const STATE_MINT = userProperties.getProperty(UPK.STATE.MINT)

    const buttonSet = CardService.newButtonSet()
        .addButton(CardService
                   .newTextButton()
                   .setText(`<font color="${COLORS.SECONDARY}">[ ${strButtons.settingsTextButton} ]</font>`)
                   .setOnClickAction(CardService.newAction()
                                     .setFunctionName("goToUserCardCallback")))

    if (STATE_MINT !== "MINT") {
        buttonSet.addButton(CardService
                            .newTextButton()
                            .setText(`<font color="${COLORS.SECONDARY}">[ REFRESH ]</font>`)
                            .setOnClickAction(CardService.newAction()
                                              .setFunctionName("refreshHomeCardCallback")))
    }
    return buttonSet
}
