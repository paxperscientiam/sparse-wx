//     Copyright (C) 2018 Christopher David Ramos
import {fetch} from "~Data/PushPull"

export function apparentTemperatureService(args: InputObject): null|string {
  let temperature
  let windspeed
  let tempUnit

  tempUnit = fetch("user", "temp_unit")
  // Temperature in F and windspeed in MPH
  // https://www.weather.gov/safety/cold-faqs
  // Windchill (ºF) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)

  if (!args.temperature || !args.windspeed) {
    return null
  }

  temperature = Number(args.temperature)
  windspeed = Number(args.windspeed)

  if (tempUnit === "dropdown_item_f") {
    if (temperature <= 50 && windspeed > 3) {
      const windchill = 35.74
        + (0.6215 * temperature)
        - (35.75 * Math.pow(windspeed, 0.16))
        + (0.4275 * temperature * Math.pow(windspeed, 0.16))

      return parseInt(windchill.toString(), 10).toFixed(0)
    }
    return null
  }

  if (tempUnit === "dropdown_item_c") {
    if (temperature <= 10 && windspeed > 4.8) {
      // convert windspeed to KPM (making an assumption)
      windspeed *= 1.61
      const windchill = 13.12
        + (0.6125 * temperature)
        - (11.37 * Math.pow(windspeed, 0.16))
        + (0.3965 * Math.pow(windspeed, 0.16))
      return parseInt(windchill.toString(), 10).toFixed(0)
    }
    return null
  }

  //   if (temperature !=null && relativeHumidity != null) {
  //         // temperature in F and relativeHumidty in percentage points
  //         temperature = Number(temperature)
  //         relativeHumidity = Number(relativeHumidity)

  //         if (temperature >= 80 && relativeHumidity >= 40) {
  //             return _calculateHeadIndexService(temperature,
  //                                               relativeHumidity)
  //         }
  //     }
  return null
}

// function _calculateHeadIndexService(temperature, RH) {
//     // https://www.weather.gov/ama/heatindex
//     const heatIndex =
//         -42.379
//         + (2.04901523 * temperature)
//         + (10.14333127 * RH)
//         - (0.22475541 * temperature * RH)
//         - (Math.pow(6.83783, -3) * Math.pow(temperature, 2))
//         - (Math.pow(5.481717, -2) * Math.pow(RH, 2))
//         + (Math.pow(1.22874, -3) * Math.pow(temperature, 2) * RH)
//         + (Math.pow(8.5282, -4) * temperature * Math.pow(RH, 2))
//         - (Math.pow(1.99, -6) * Math.pow(temperature, 2) * Math.pow(RH, 2))

//     Logger.log("Apparent temp is Heat Index")
//     return heatIndex
// }

// function apparentTempTest() {
//     const x = apparentTemperatureService({ temperature: 100, relativeHumidity: 50 })
//     Logger.log(x)
// }
