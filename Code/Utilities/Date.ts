//     Copyright (C) 2018 Christopher David Ramos

function formatDateService(date, format?: string) {
    if (!isSet(format)) {
        format = "E, d MMM y"
    }
    const timeZone = getUserTimeZone()
    const date = new Date(date)
    return Utilities.formatDate(date, timeZone, format)
}

function formatTimeService(date) {
    const timeZone = getUserTimeZone()
    const date = new Date(date)
    return Utilities.formatDate(date, timeZone, "h:mm a")
}

function DateArray() {
    const timeZone = getUserTimeZone()
    const date = new Date()

    this.HOUR = Utilities.formatDate(date, timeZone, "H")
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

function timeConversion(millisec) {
    // https://stackoverflow.com/a/32180863
    const seconds = Math.round((millisec / 1000).toFixed(1))

    const minutes = Math.round((millisec / (1000 * 60)).toFixed(1))

    const hours = Math.round((millisec / (1000 * 60 * 60)).toFixed(1))

    const days = Math.round((millisec / (1000 * 60 * 60 * 24)).toFixed(1))

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

function formatAge(date) {
    const msgDate = new Date(date).getTime()
    const todayDate = Date.now() // milliseconds
    const age = timeConversion(todayDate - msgDate)
    return age
}

function getUserTimeZone() {
    //    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    //     Logger.log(tz)
    //     return tz
    return CalendarApp.getDefaultCalendar().getTimeZone()
}

function convertCelsius(temperature) {
    return (temperature * (9 / 5) + 32).toFixed(0)
}

function convertFahrenheit(temperature) {
    return ((temperature - 32) * 5 / 9).toFixed(0)
}

function doSomething() {
    Logger.log("I was called!")
}

function diffDate(newDate, oldDate) {
    // expects date objects
}
