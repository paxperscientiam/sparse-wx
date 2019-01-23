function ResetWidget() {
    const UPK = dictionary.PROPS
    const UI = dictionary.UI

    const COLORS = UI.COLORS.SCHEME

    const resetAddonAction = CardService.newAction()
        .setFunctionName("resetAddonCallback")

    return CardService.newTextButton()
        .setText(`<font color="${COLORS.SECONDARY}">[ Reset SparseWx ]</font>`)
        .setOnClickAction(resetAddonAction)
}

function resetAddonCallback() {
    clearConfig()
    return CardService.newActionResponseBuilder()
        .setNavigation(
            CardService.newNavigation().updateCard(UserCard().build()),
        )
        .setStateChanged(true)
        .build()
}
