//     Copyright (C) 2018 Christopher David Ramos
function UserSection() {
    const UPK = dictionary.PROPS

    const isCurrentTempUnitC = userProperties.getProperty(UPK.USER.TEMP_UNIT) === "dropdown_item_c"

    const submitAddressSuggestionsAction = CardService.newAction()
        .setFunctionName("getAddressSuggestionsCallback")

    const processUserFormAction =  CardService.newAction()
        .setFunctionName("processUserPreferencesFormCallback")

    const COLORS = dictionary.UI.COLORS.SCHEME

    const isNotMint = userProperties.getProperty(UPK.STATE.MINT) === "USED"

    const card = CardService.newCardSection()
        .addWidget(CardService.newTextInput()
                   .setFieldName("user_name_key")
                   .setTitle("Your Name (optional)")
                   .setHint("How should SparseWx address you? (25 character max)"))

        .addWidget(CardService.newTextInput()
                   .setFieldName("user_address_key")
                   .setTitle("Forecast Location")
                   .setHint("City, state or ZIP code")
                   .setSuggestionsAction(submitAddressSuggestionsAction))

        .addWidget(CardService.newSelectionInput()
                   .setType(CardService.SelectionInputType.DROPDOWN)
                   .setFieldName("temperature_unit_list")
                   .setTitle("Temperature Scale")
                   .addItem("Fahrenheit", "dropdown_item_f", !isCurrentTempUnitC)
                   .addItem("Celsius", "dropdown_item_c", isCurrentTempUnitC))

        .addWidget(CardService.newTextButton()
                   .setText(`<font color="${COLORS.SECONDARY}">[ Submit ]</font>`)
                   .setOnClickAction(processUserFormAction))
    if (isNotMint) {
        card.addWidget(ResetWidget())
    }
    return card.setCollapsible(false)
}
