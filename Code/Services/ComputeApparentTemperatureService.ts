//     Copyright (C) 2018 Christopher David Ramos
function apparentTemperatureService(args) {
    // Temperature in F and windspeed in MPH
    // https://www.weather.gov/safety/cold-faqs
    // Windchill (ºF) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    let temperature = args.temperature
    let windspeed = args.windspeed
    let relativeHumidity = args.relativeHumidity

    if (isSet(temperature) && isSet(windspeed)) {
        temperature = Number(temperature)
        windspeed = Number(windspeed)

        if (temperature <= 50 && windspeed > 3) {
            let windchill = 35.74
                + (0.6215 * temperature)
                - (35.75 * Math.pow(windspeed, 0.16))
                + (0.4275 * temperature * Math.pow(windspeed, 0.16))

            windchill = parseInt(windchill, 10).toFixed(0)
            Logger.log("Apparent temperature is Wind Chill")
            return windchill
        }
    }

  //   if (isSet(temperature) && isSet(relativeHumidity)) {
//         // temperature in F and relativeHumidty in percentage points
//         temperature = Number(temperature)
//         relativeHumidity = Number(relativeHumidity)

//         if (temperature >= 80 && relativeHumidity >= 40) {
//             return _calculateHeadIndexService(temperature,
//                                               relativeHumidity)
//         }
//     }

    Logger.log("Apparent temperature is unknown.")

    return "?"
}

function _calculateHeadIndexService(temperature, RH) {
    // https://www.weather.gov/ama/heatindex
    const heatIndex =
        -42.379
        + (2.04901523 * temperature)
        + (10.14333127 * RH)
        - (0.22475541 * temperature * RH)
        - (Math.pow(6.83783, -3) * Math.pow(temperature, 2))
        - (Math.pow(5.481717, -2) * Math.pow(RH, 2))
        + (Math.pow(1.22874, -3) * Math.pow(temperature, 2) * RH)
        + (Math.pow(8.5282, -4) * temperature * Math.pow(RH, 2))
        - (Math.pow(1.99, -6) * Math.pow(temperature, 2) * Math.pow(RH, 2))

    Logger.log("Apparent temp is Heat Index")
    return heatIndex
}

function apparentTempTest() {
    const x = apparentTemperatureService({ temperature: 100, relativeHumidity: 50 })
    Logger.log(x)
}
