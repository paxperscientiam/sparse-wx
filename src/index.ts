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

    mainCard.bindingContext(model)
    // //
    return mainCard.build()
}
