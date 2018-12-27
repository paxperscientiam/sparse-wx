//     Copyright (C) 2018 Christopher David Ramos
function UserReturnHomeSection() {
    const goToMainCardAction = CardService.newAction()
        .setFunctionName("goToHomeCardCallback")

    return CardService.newCardSection()
        .addWidget(CardService
                   .newTextButton()
                   .setText('<font color="#ea9999">HOME</font>')
                   .setOnClickAction(goToMainCardAction))
}
