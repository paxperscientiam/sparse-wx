//     Copyright (C) 2018 Christopher David Ramos
// import { DisclaimerSection } from "@/Cards/Main/Sections/Disclaimer"
// import { DateArray } from "@/Utilities/Date"

// import { View } from "@/Cards/Aux"

import { BaseCardController } from "@/Cards/CardController"

export class MainCardController extends BaseCardController  {
  route: string = "localityInfo"
  constructor() {
    super()
  }
}

// export const MainCard = new MainCardController()

// export function MainCard(): CardBuilder {
//   const date = new DateArray()

//   const userName = "Valerie"

//   const greeting = (() => {
//     if (!!userName) {
//       return `${date.GREETING}, ${userName}!`
//     } else {
//       return `${date.GREETING}!`
//     }
//   })()

//   const data = {
//     image: "",
//     name: "mainCard",
//     subtitle: `Today is ${date.WEEKDAY}.`,
//     title: greeting,
//   }

//   return new CardFactory(data).addSections([
//     DisclaimerSection(),
//   ])
// }
