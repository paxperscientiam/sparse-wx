import {BaseCardModel} from "@/Models"

export class UserCardModel extends BaseCardModel {
  namespace: string = "UserCardState"

  name: string = "usercard"

  constructor() {
    super()
    this.title = "Settings"
    this.subtitle = " "
  }
}
