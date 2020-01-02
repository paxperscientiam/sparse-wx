//     Copyright (C) 2018 Christopher David Ramos

export function formatDateService(date: Date, format = "E, d MMM y") {
  return Utilities.formatDate(new Date(date), getUserTimeZone(), format)
}

export function formatTimeService(date: Date) {
  return Utilities.formatDate(new Date(date), getUserTimeZone(), "h:mm a")
}

export class DateArray {
  HOUR: number
  WEEKDAY: string
  WEEK_DAY: string
  MONTH: string
  TIME: string
  GREETING: string

  constructor() {
    const timeZone = getUserTimeZone()
    const date = new Date()

    this.HOUR = Number(Utilities.formatDate(date, timeZone, "H"))
    this.WEEKDAY = Utilities.formatDate(date, timeZone, "EEEE")
    this.WEEK_DAY = this.WEEKDAY
    this.MONTH = Utilities.formatDate(date, timeZone, "MMMM")
    this.TIME = Utilities.formatDate(date, timeZone, "h:mm a")

    if (this.HOUR >= 0 && this.HOUR < 12 ) {
      // this.GREETING = Translate("Good morning")
      this.GREETING = "Good morning"
    } else if (this.HOUR >= 12 && this.HOUR < 18) {
      // this.GREETING = Translate("Good afternoon")
      this.GREETING = "Good afternoon"
    } else {
      // this.GREETING = Translate("Good evening")
      this.GREETING = "Good evening"
    }
  }
}

export function timeConversion(millisec: number) {
  // https://stackoverflow.com/a/32180863
  const seconds = Math.round((millisec / 1000))

  const minutes = Math.round((millisec / (1000 * 60)))

  const hours = Math.round((millisec / (1000 * 60 * 60)))

  const days = Math.round((millisec / (1000 * 60 * 60 * 24)))

  if (seconds < 60) {
    return seconds + " Seconds"
  } else if (minutes < 60) {
    return minutes + " Minutes"
  } else if (hours < 24) {
    return hours + " Hours"
  } else {
    return days + " Days"
  }
}

export function formatAge(date: any) {
  const msgDate = new Date(date).getTime()
  const todayDate = Date.now() // milliseconds
  const age = timeConversion(todayDate - msgDate)
  return age
}
//
export function getUserTimeZone() {
  return CalendarApp.getDefaultCalendar().getTimeZone()
}

export function convertC2F(temperature: number) {
  return (temperature * (9 / 5) + 32).toFixed(0)
}

export function convertF2C(temperature: number) {
  return ((temperature - 32) * 5 / 9).toFixed(0)
}
// export function diffDate(newDate, oldDate) {
//   // expects date objects
// }

export function timeStamp()  {
  return (new Date()).toTimeString().slice(0, 8)
}
