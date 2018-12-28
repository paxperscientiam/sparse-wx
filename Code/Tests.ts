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
    Logger.log("Dump of Script Properties ...")
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
