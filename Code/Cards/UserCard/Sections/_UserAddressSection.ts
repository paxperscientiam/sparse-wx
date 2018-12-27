//     Copyright (C) 2018 Christopher David Ramos
function UserAddressSection() {
    const upk = (new Dictionary()).props // userPropKeys

    let address = userProperties.getProperty(upk.USER_ADDRESS)
    let userName = userProperties.getProperty(upk.USER_NAME)

    if (!isSet(address)) {
        address = "Not yet set."
    }

    if (!isSet(userName)) {
        userName = "Not yet set."
    }

    return CardService.newCardSection()
        .addWidget(CardService
                   .newKeyValue()
                   .setIcon(CardService.Icon.PERSON)
                   .setContent(userName))
        .addWidget(CardService
                   .newKeyValue()
                   .setIcon(CardService.Icon.MAP_PIN)
                   .setContent(address)
                   .setMultiline(true))
    ;
}
