//     Copyright (C) 2018 Christopher David Ramos
export function UserReturnHomeSection(): CardSection {
    const COLORS = UI.PALETTE

    const goToMainCardAction = CardService.newAction()
        .setFunctionName("goToHomeCardCallback")

    return CardService.newCardSection()
        .addWidget(CardService
                   .newTextButton()
                   .setText('<font color="${COLORS.ORANGE}">HOME</font>')
                   .setOnClickAction(goToMainCardAction))
}
