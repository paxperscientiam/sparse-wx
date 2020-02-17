import { BaseCardController } from "@/Controllers"
import { DisclaimerSection } from "@/Cards/Main/Sections/Disclaimer"
import { UserInfoSection } from "@/Cards/User/Sections"
import { UserSection as UserInputSection } from "@/Handlers/Callbacks"

export class UserCardController extends BaseCardController  {

    constructor() {
      super()
      this.card.addSection(UserInfoSection())
      this.card.addSection(UserInputSection())
      this.card.addSection(DisclaimerSection())
    }
}
