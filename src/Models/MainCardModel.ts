import {BaseCardModel} from "@/Models/BaseCardModel"

import { DateArray } from "@/Utilities/Date"
const da = new DateArray()

export class MainCardModel extends BaseCardModel {
    namespace: string = "MainCardState"

    name: string = "maincard"

    constructor() {
        super()
        this.title = `${da.GREETING}!`
        this.subtitle = `Today is ${da.WEEKDAY}`
    }
}
