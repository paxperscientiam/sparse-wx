//     Copyright (C) 2018 Christopher David Ramos
function submitNameCallback(e) {
    const dictionary = new Dictionary()
    const upk = dictionary.PROPS
    const name = e.formInput.user_name_key

    if (validateUserName(name) && name.length > 0) {
        Logger.log(`User's chosen name is ${name}.`)
        userProperties.setProperty(upk.USER.NAME, name)
        return CardService.newActionResponseBuilder()
            .setNavigation(CardService.newNavigation().popCard().updateCard(MainCard(dictionary).build()))
            .setNotification(CardService.newNotification()
                             .setType(CardService.NotificationType.INFO)
                             .setText(`Hello ${name}, thanks for using SparseWX.`))
            .setStateChanged(true)
            .build()
    } else {
        return CardService.newActionResponseBuilder()
            .setNotification(CardService.newNotification()
                             .setType(CardService.NotificationType.ERROR)
                             .setText("Sorry, try a different name."))
            .setStateChanged(false)
            .build()
    }
}

function submitAddressCallback(e) {
    const dictionary = new Dictionary()
    const upk = dictionary.PROPS
    const BRAND = dictionary.BRAND
    const address = e.formInput.user_address_key

    const isValid = validateMailingAddress(address)
    // if valid, retrieve address from storage
    if (isValid[0]) {

        const userCache = CacheService.getUserCache()
        userCache.removeAll(["wxRaw", "wx"])
        // successful validation means that lon,lat, and address properties defined
        return CardService.newActionResponseBuilder()
            .setNavigation(CardService
                           .newNavigation()
                           .popCard()
                           .updateCard(MainCard(dictionary).build()))
            .setNotification(CardService.newNotification()
                             .setType(CardService.NotificationType.INFO)
                             .setText(`Address set`))
            .setStateChanged(false)
            .build()

    } else {
        let response = "Sorry, try a different address."
        if (isValid[1] === "ZERO_RESULTS") {
            response = "Sorry, that address wasn't found. Try something more specific."
        }

        if (isValid[1] === "UNSUPPORTED_REGION") {
            response = `Sorry, ${BRAND.NAME} only supports results for the USA.`
        }

        return CardService.newActionResponseBuilder()
            .setNotification(CardService.newNotification()
                             .setType(CardService.NotificationType.ERROR)
                             .setText(response))
            .setStateChanged(false)
            .build()
    }
}

function submitTemperatureUnitCallback(e) {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS

    const chosenTempUnit = e.formInputs.temperature_unit_list[0]

    userProperties.setProperty(UPK.USER.TEMP_UNIT, chosenTempUnit)

    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification()
                         .setType(CardService.NotificationType.INFO)
                         .setText("Set temperature unit"))
        .setStateChanged(true)
        .build()
}

function goToUserCardCallback() {
    const dictionary = new Dictionary()
    return CardService.newActionResponseBuilder()
        .setNavigation(
            CardService.newNavigation().pushCard(UserCard(dictionary).build()),
        )
        .setStateChanged(false)
        .build()

}

function goToHomeCardCallback() {
    const dictionary = new Dictionary()
    return CardService.newActionResponseBuilder()
        .setNavigation(
            CardService.newNavigation().pushCard(MainCard(dictionary).build()),
        )
        .setStateChanged(false)
        .build()
}

function refreshHomeCardCallback() {
    const dictionary = new Dictionary()
    return CardService.newActionResponseBuilder()
        .setNavigation(
            CardService.newNavigation().updateCard(MainCard(dictionary).build()),
        )
        .setStateChanged(false)
        .build()
}

function getAddressSuggestionsCallback() {
    Logger.log("Address suggestions callback ... called")
    // will use recent entries
    const PROPS = (new Dictionary()).PROPS

    const suggestions = CardService.newSuggestions()

    const arrSuggestionsTemp = [
        userProperties.getProperty(PROPS.USER.SUGGESTED_ADDRESS_ONE),
        userProperties.getProperty(PROPS.USER.SUGGESTED_ADDRESS_TWO),
        userProperties.getProperty(PROPS.USER.SUGGESTED_ADDRESS_THREE),
    ]

    arrSuggestionsTemp.forEach((element) => {
        if (isSet(element)) {
            suggestions.addSuggestion(element)
        }
    })

    return CardService.newSuggestionsResponseBuilder()
        .setSuggestions(suggestions)
        .build()
}
