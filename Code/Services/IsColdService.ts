function textColorTemperatureService(temperature) {
    const COLORS = dictionary.UI.PALETTE

    if (userProperties.getProperty(PROPS.USER.TEMP_UNIT) === "dropdown_item_c") {
        temperature = convertFahrenheit(temperature)
    }

    if (temperature < 32 ) {
        Logger.log(`Blue for ${temperature}`)
        return COLORS.BLUE
    }

    if (temperature > 75 ) {
        Logger.log(`Maroon for ${temperature}`)
        return COLORS.MAROON
    }

    if (temperature > 100 ) {
        Logger.log(`Orange for ${temperature}`)
        return COLORS.ORANGE
    }

    return "BLACK"
}
