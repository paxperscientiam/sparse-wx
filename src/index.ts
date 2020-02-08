declare const Application: ISparseWx

// import {} from "@Cards/

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

import { MainCardController } from "@/Cards/MainCardController"

import { View } from "@/ViewsController"

import { MainCardModel } from "@/Models/MainCardModel"

const userProperties: Properties = PropertiesService.getUserProperties()
Application.userProperties = userProperties

Application.buildAddOn = (): any => {
  const model = new MainCardModel()
  const mainCard = new MainCardController()

  model.title = "Title of the main card!"
  model.name = "Main card"
  model.subtitle = "maincard subtitle"
  //
  mainCard.bindingContext(model)
  //
  return mainCard.build()
}
