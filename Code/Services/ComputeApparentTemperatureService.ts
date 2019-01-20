function apparentTemperatureService(temperature, windspeed) {
    // Temperature in F and windspeed in MPH
    // https://www.weather.gov/safety/cold-faqs
    // Windchill (ºF) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    temperature = Number(temperature)
    windspeed = Number(windspeed)

    if (temperature > 50 || windspeed <= 3) {
        return "?"
    }

    let windchill = 35.74
        + (0.6215 * temperature)
        - (35.75 * Math.pow(windspeed, 0.16))
        + (0.4275 * temperature * Math.pow(windspeed, 0.16))

    windchill = parseInt(windchill, 10).toFixed(0)

    return windchill
}
