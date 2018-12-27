//     Copyright (C) 2018 Christopher David Ramos
function buildAddOn() {
    Logger.clear()
    const dictionary = new Dictionary()
    const PROPS = dictionary.PROPS
    const userCard = UserCard(dictionary)

    if (checkWeatherServiceStatus() === "OK") {
        userProperties.setProperty(PROPS.STATE.WX_SERVICE, "OK")
    } else {
        userProperties.setProperty(PROPS.STATE.WX_SERVICE, "ERR")
    }

    if (checkLocationServiceStatus() === "OK") {
        userProperties.setProperty(PROPS.STATE.LOCATION_SERVICE, "OK")
    } else {
        userProperties.setProperty(PROPS.STATE.LOCATION_SERVICE, "ERR")
    }

    return MainCard(dictionary).build()

    //     //////////
    //     const ls = new LocationService()
    //     ls.init()
    //     Logger.log(ls.status)

    //     if (userProperties.getProperty(PROPS.STATE.WX_SERVICE) === "OK") {
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
