//     Copyright (C) 2018 Christopher David Ramos
function UserSection() {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS

    const submitNameAction =  CardService.newAction()
        .setFunctionName("submitNameCallback")

    const submitAddressAction = CardService.newAction()
        .setFunctionName("submitAddressCallback")

    const submitAddressSuggestionsAction = CardService.newAction()
        .setFunctionName("getAddressSuggestionsCallback")
    //         .setParameters({
    //             numSuggestions: 5,
    //         })
    const COLORS = dictionary.UI.PALETTE

    return CardService.newCardSection()
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_name_key")
                   .setTitle("Your Name (optional)")
                   .setHint("How should SparseWx address you? (25 character max)"))
        .addWidget(CardService
                   .newTextButton()
                   .setText(`<font color="${COLORS.ORANGE}">[ Set username ]</font>`)
                   .setOnClickAction(submitNameAction))
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_address_key")
                   .setTitle("Forecast Location")
                   .setHint("City, state or ZIP code")
                   .setSuggestionsAction(submitAddressSuggestionsAction))
        .addWidget(CardService
                   .newTextButton()
                   .setText(`<font color="${COLORS.ORANGE}">[ Set location ]</font>`)
                   .setOnClickAction(submitAddressAction))
        .addWidget(submitTemperatureUnitAction())
        .setCollapsible(false)
}
