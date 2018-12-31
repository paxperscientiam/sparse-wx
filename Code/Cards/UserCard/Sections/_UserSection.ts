//     Copyright (C) 2018 Christopher David Ramos
function UserSection() {
    const UPK = (new Dictionary()).PROPS

    const submitNameAction =  CardService.newAction()
        .setFunctionName("submitNameCallback")

    const submitAddressAction = CardService.newAction()
        .setFunctionName("submitAddressCallback")

    const submitAddressSuggestionsAction = CardService.newAction()
        .setFunctionName("getAddressSuggestionsCallback")
    //         .setParameters({
    //             numSuggestions: 5,
    //         })

    return CardService.newCardSection()
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_name_key")
                   .setTitle("Your Name (optional)")
                   .setHint("How should SparseWx address you? (25 character max)"))
        .addWidget(CardService
                   .newTextButton()
                   .setText('<font color="#ea9999">Set username</font>')
                   .setOnClickAction(submitNameAction))
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_address_key")
                   .setTitle("Forecast Location")
                   .setHint("City, state or ZIP code")
                   .setSuggestionsAction(submitAddressSuggestionsAction))
        .addWidget(CardService
                   .newTextButton()
                   .setText('<font color="#ea9999">Set location</font>')
                   .setOnClickAction(submitAddressAction))
        .setCollapsible(false)
}
