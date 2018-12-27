function clearUserProperties() {
    Logger.log("Delete Local NPT User Properties:")
    if (PropertiesService.getUserProperties() !== null) {
        Logger.log(PropertiesService.getUserProperties().deleteAllProperties())
        Logger.log("  Deleted")
    } else {
        Logger.log("  None")
    }
}

function clearScriptProperties() {
    Logger.log("Delete Local Script Properties:")
    if (PropertiesService.getScriptProperties() !== null) {
        Logger.log(PropertiesService.getScriptProperties().deleteAllProperties())
        Logger.log("  Deleted")
    } else {
        Logger.log("  None")
    }
}

function clearConfig() {
    clearUserProperties()
    clearScriptProperties()
}

function dumpScriptConfig() {
    eLogger.log("Dump of Script Properties ...")
    Logger.log((PropertiesService.getScriptProperties()).getProperties())
}

function dumpUserConfig() {
    Logger.log("Dump of User Properties ...")
    Logger.log((PropertiesService.getUserProperties()).getProperties())
}

function dumpConfig() {
    dumpScriptConfig()
    dumpUserConfig()
}

// function LocationServiceTest() {

// }

function storeObjectInPropertyServiceThingTest() {

    const obj = {
        alpha: "a",
        beta: "g",
        derp: {
            sex: 55,
            yay: 4,
        },
    }
    setScriptObjectProperty("obj", obj)
}

function retrieveObjectInPropertyServiceThingTest() {
    const R = getScriptObjectProperty("obj")
    Logger.log(R)
    Logger.log(R.alpha)
    Logger.log(R.beta)
    Logger.log(R.derp)
    Logger.log(R.derp.sex)
    Logger.log(R.derp.yay)
}

function enumerationInterfaceTest() {
    const INTERFACE = (new Dictionary()).INTERFACE

    Logger.log(INTERFACE)
    Logger.log(INTERFACE.GoogleGeoCodeInterface)
    Logger.log(INTERFACE.NationalWeatherServiceInterface)
}

function dumpApplicationState() {
    //
}
class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    get area() {
        return (this.height * this.width)
    }
}

function emptyTestTest() {
    //
}
