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

    const submitTemperatureUnitAction = CardService.newAction()
        .setFunctionName("submitTemperatureUnitCallback")

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

        .addWidget(CardService
                   .newSelectionInput()
                   .setType(CardService.SelectionInputType.DROPDOWN)
                   .setTitle("List")
                   .setFieldName("list")
                   .addItem("F", "dropdown_item_f", 0)
                   .addItem("C", "dropdown_item_c", 1)
                   .setOnChangeAction(submitTemperatureUnitAction))
        .setCollapsible(false)
}
