// tslint:disable:interface-name

declare interface NWSForecastPeriod {
  number: number
  name: string
  startTime: Date
  endTime: Date
  isDaytime: boolean
  temperature: number
  temperatureUnit: string
  temperatureTrend?: any
  windSpeed: string
  windDirection: string
  icon: string
  shortForecast: string
  detailedForecast: string
}

declare interface NWSForecastElevation {
  value: number,
  unitCode: string,
}

declare interface NWSForecast {
  Elevation: NWSForecastElevation,

  Period: NWSForecastPeriod,

  Properties: {
    updated: Date
    units: string
    forecastGenerator: string
    generatedAt: Date
    updateTime: Date
    validTimes: string
    elevation: NWSForecastElevation
    periods: NWSForecastPeriod[],
  }
}
