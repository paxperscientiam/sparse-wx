function ResetWidget() {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS
    const UI = dictionary.UI

    const COLORS = UI.PALETTE

    const resetAddonAction = CardService.newAction()
        .setFunctionName("resetAddonCallback")

    return CardService.newTextButton()
        .setText(`<font color="${COLORS.RED}">[ Reset SparseWx ]</font>`)
        .setOnClickAction(resetAddonAction)
}

function resetAddonCallback() {
    clearConfig()
    goToUserCardCallback()
}
