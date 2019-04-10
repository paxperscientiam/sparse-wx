//     Copyright (C) 2018 Christopher David Ramos
export function WindSpeedHandler(windSpeed: string): string {
  // use Beaufort descriptions of wind speeds.

  windSpeed = windSpeed.replace(" mph", "")
  const arrWS: string[] = windSpeed.split(" to ")
  const minWS: number = Number(arrWS[0])
//  const maxWS: number = Number(arrWS[1])

  switch (true) {
    case minWS <= 1:
      return "Calm wind"
    case minWS <= 3:
      return "Light air"
    case minWS <= 6:
      return "Light breeze"
    case minWS <= 10:
      return "Gentle breeze"
    case minWS <= 16:
      return "Moderate breeze"
    case minWS <= 21:
      return "Fresh breeze"
    case minWS <= 27:
      return "Strong breeze"
    case minWS <= 33:
      return "Near gale"
    case minWS <= 40:
      return "Gale"
    case minWS <= 47:
      return "Severe gale"
    case minWS <= 55:
      return "Storm"
    case minWS <= 63:
      return "Violent storm"
    case minWS > 63:
      return "Hurricane"
    default:
      return "unknown"
  }
}
