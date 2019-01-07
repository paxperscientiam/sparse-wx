//     Copyright (C) 2018 Christopher David Ramos
function UserSection() {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS

    const isCurrentTempUnitF = userProperties.getProperty(UPK.USER.TEMP_UNIT) === "dropdown_item_f"

    const submitAddressSuggestionsAction = CardService.newAction()
        .setFunctionName("getAddressSuggestionsCallback")

    const processUserFormAction =  CardService.newAction()
        .setFunctionName("processUserPreferencesFormCallback")

    const COLORS = dictionary.UI.PALETTE

    return CardService.newCardSection()
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_name_key")
                   .setTitle("Your Name (optional)")
                   .setHint("How should SparseWx address you? (25 character max)"))

        .addWidget(CardService.newTextInput()
                   .setFieldName("user_address_key")
                   .setTitle("Forecast Location")
                   .setHint("City, state or ZIP code")
                   .setSuggestionsAction(submitAddressSuggestionsAction))

        .addWidget(CardService
                   .newSelectionInput()
                   .setType(CardService.SelectionInputType.DROPDOWN)
                   .setTitle("Temperature Scale")
                   .setFieldName("temperature_unit_list")
                   .addItem("Fahrenheit", "dropdown_item_f", isCurrentTempUnitF)
                   .addItem("Celsius", "dropdown_item_c", !isCurrentTempUnitF))

        .addWidget(CardService
                   .newTextButton()
                   .setText(`<font color="${COLORS.ORANGE}">[ Submit ]</font>`)
                   .setOnClickAction(processUserFormAction))
        .setCollapsible(false)
}
