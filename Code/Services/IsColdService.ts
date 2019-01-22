function textColorTemperatureService(temperature) {
    const COLORS = dictionary.UI.PALETTE
    const PROPS = dictionary.PROPS

    if (userProperties.getProperty(PROPS.USER.TEMP_UNIT) === "dropdown_item_c") {
        temperature = convertCelsius(temperature)
    }

    if (temperature < 32 ) {
        Logger.log("COLOR TEMP IS " + COLORTEMP)
        return COLORS.BLUE
    }

    if (temperature > 75 ) {
        Logger.log("COLOR TEMP IS " + COLORTEMP)
        return COLORS.MAROON
    }

    if (temperature > 100 ) {
        Logger.log("COLOR TEMP IS " + COLORTEMP)
        return COLORS.ORANGE
    }

    return "BLACK"
}
