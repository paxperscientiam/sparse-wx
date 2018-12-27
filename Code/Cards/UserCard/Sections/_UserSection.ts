//     Copyright (C) 2018 Christopher David Ramos
function UserSection() {
    const upk = (new Dictionary()).props

    const submitNameAction =  CardService.newAction()
        .setFunctionName("submitNameCallback")

    const submitAddressAction = CardService.newAction()
        .setFunctionName("submitAddressCallback")

    return CardService.newCardSection()
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_name_key")
                   .setTitle("Your name")
                   .setHint("How should SparseWx address you? (25 character max)"))
        .addWidget(CardService
                   .newTextButton()
                   .setText('<font color="#ea9999">SUBMIT</font>')
                   .setOnClickAction(submitNameAction))
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_address_key")
                   .setTitle("Your address")
                   .setHint("city, state or ZIP code"))
        .addWidget(CardService
                   .newTextButton()
                   .setText('<font color="#ea9999">SUBMIT</font>')
                   .setOnClickAction(submitAddressAction))
        .setCollapsible(false)
}
