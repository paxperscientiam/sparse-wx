//     Copyright (C) 2018 Christopher David Ramos
function buildAddOn() {
    Logger.clear()
    const dictionary = new Dictionary()
    const props = dictionary.props
    const userCard = UserCard(dictionary)

    if (checkWeatherServiceStatus() === "OK") {
        userProperties.setProperty(props.STATE.WX_SERVICE, "OK")
    } else {
        userProperties.setProperty(props.STATE.WX_SERVICE, "ERR")
    }

    if (checkLocationServiceStatus() === "OK") {
        userProperties.setProperty(props.STATE.LOCATION_SERVICE, "OK")
    } else {
        userProperties.setProperty(props.STATE.LOCATION_SERVICE, "ERR")
    }

    if (isSet(userProperties.getProperty(props.USER.ADDRESS))) {
        userProperties.setProperty(props.STATE.MINT, "USED")
    } else {
        userProperties.setProperty(props.STATE.MINT, "MINT")
    }

    return MainCard(dictionary).build()

    //     //////////
    //     const ls = new LocationService()
    //     ls.init()
    //     Logger.log(ls.status)

    //     if (userProperties.getProperty(props.STATE.WX_SERVICE) === "OK") {
    //         // Prime the pump
    //         weatherServicePrime()
    //     }

    //  const mainCard = MainCard()
    //     const userCard = UserCard()

    //     // userCard.build()

    //     return mainCard.build()

    //
    //  const buttonSet = CardService.newButtonSet()
    //         .addButton(createToCardButton({
    //             card: "userCard",
    //             text: "settings",
    //         }))

    //     card.addSection(CardService.newCardSection()
    //                     .addWidget(buttonSet))
}
