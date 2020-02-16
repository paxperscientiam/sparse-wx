declare const Application: ISparseWx

// globalThis polyfill thanks to some genius on the net!
(() => {
  if (typeof Application === "object") {
    return
  }
  Object.defineProperty(Object.prototype, "__magic__", {
    configurable: true,
    get() {
      return this
    },
  })
  // @ts-ignore
  __magic__.Application = __magic__
  // @ts-ignore
  delete Object.prototype.__magic__
})()

import { MainCardController } from "@/Controllers/MainCardController"

import { MainCardModel } from "@/Models/MainCardModel"

const userProperties: Properties = PropertiesService.getUserProperties()
Application.userProperties = userProperties

Application.buildAddOn = (): Card => {
    const model = new MainCardModel()
    const mainCard = new MainCardController()
    //
    mainCard.bindingContext(model)
    //
    return mainCard.build()
}

Application.buildHomePage = (): Card => {
    var cardSection = CardService.newCardSection()
        .addWidget(CardService.newKeyValue()
                   .setIconUrl("https://icon.png")
                   .setContent("KeyValue widget with an image on the left and text on the right"))
    // Finish building the card section ...

    var card = CardService.newCardBuilder()
        .setName("Card name")
        .setHeader(CardService.newCardHeader().setTitle("Homepage"))
        .addSection(cardSection)
        .build();
    return card
}
