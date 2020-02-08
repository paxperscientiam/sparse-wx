import { convertF2C } from "@/Utilities/Date"

import {fetch} from "@/Data/PushPull"

import {PALETTE} from "@/Data/Dictionary"

export function textColorTemperatureService(temperature: number): string {
    let temp: string = ""

    if (fetch("user", "temp_unit") === "dropdown_item_c") {
        temp = convertF2C(temperature)
    }

    if (temperature < 32 ) {
        Logger.log(`Blue for ${temperature}`)
        return PALETTE.BLUE
    }

    if (temperature > 75 ) {
        Logger.log(`Maroon for ${temperature}`)
        return PALETTE.MAROON
    }

    if (temperature > 100 ) {
        Logger.log(`Orange for ${temperature}`)
        return PALETTE.ORANGE
    }

    return "BLACK"
}
