//     Copyright (C) 2018 Christopher David Ramos
function buildAddOn() {
    Logger.clear()
    const userCard = UserCard()

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

    return [
        MainCard().build(),
    ]
}
