//     Copyright (C) 2018 Christopher David Ramos
function UserReturnHomeSection() {
    const COLORS = dictionary.UI.PALETTE

    const goToMainCardAction = CardService.newAction()
        .setFunctionName("goToHomeCardCallback")

    return CardService.newCardSection()
        .addWidget(CardService
                   .newTextButton()
                   .setText('<font color="${COLORS.ORANGE}">HOME</font>')
                   .setOnClickAction(goToMainCardAction))
}
