//     Copyright (C) 2018 Christopher David Ramos
function UserAddressSection() {
    let address = userProperties.getProperty(UPK.USER_ADDRESS)
    let userName = userProperties.getProperty(UPK.USER_NAME)

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
