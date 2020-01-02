//     Copyright (C) 2018 Christopher David Ramos
import dlv from "@paxperscientiam/dlv.ts"

// const IS_NODE = (typeof process !== 'undefined') && (process.release.name === 'node')
// @ts-ignore
// global.IS_NODE = IS_NODE
// @ts-ignore
// import dset from "dset"

// if (IS_NODE) {
//   buildAddOn()
// }
// declare const global: ISparseWx

// import {
//   objectPath,
// } from "~Vendor"

// import { timeStamp } from "~Utilities/Date"

// import dlv from "@paxperscientiam/dlv.ts/dist/dlv.umd"

// import dset from "dset/dist/dset.min"

// import { Dictionary } from "~Data/Dictionary"

// const dictionary = new Dictionary() as IDictionary

// global.dictionary = dictionary

// const PROPS = dictionary.PROPS
// global.PROPS = PROPS
// const UI = dictionary.UI
// global.UI = UI
// const PALETTE = dictionary.UI.PALETTE
// global.PALETTE = PALETTE

// import { DictionaryIcons } from "~Data/Dictionary/Icons"
// const ICONS = new DictionaryIcons()

// global.ICONS = ICONS

// import { MainCard } from "~Cards"

// import { _Cache } from "~Handlers/Aux"
// global._Cache = _Cache

// const userProperties: Properties = PropertiesService.getUserProperties()
// global.userProperties = userProperties

// function fetch(reference: string, property?) {
//   let obj = JSON.parse(userProperties.getProperty(reference))
//   if (obj == null) {
//     obj = {}
//     userProperties.setProperty(reference, "{}")
//     return null
//   }
//   if (property == null) {
//     return obj
//   }
//   return objectPath.withInheritedProps.get(obj, property)
// }
// global.fetch = fetch

// function push(referencePropComplex: string[], value) {
//   const reference = referencePropComplex[0]
//   const property = referencePropComplex[1]

//   let obj = JSON.parse(userProperties.getProperty(reference))
//   if (obj == null) {
//     obj = {}
//   }
//   if (!!property) {
//     dset(obj, property, value)
//   } else {
//     obj = value
//   }
//   userProperties.setProperty(reference, JSON.stringify(obj))
// }

// global.push = push

// function make(reference: string, thing) {
//   userProperties.setProperty(reference, JSON.stringify(thing))
// }

// function exists(reference: string, property?) {
//   const obj = JSON.parse(userProperties.getProperty(reference))
//   if (!obj) {
//     return false
//   }
//   if (!property) {
//     return true
//   }
//   return objectPath.withInheritedProps.has(obj, property)
// }

// function doGet(e) {
//   push(["event", "doGet"], `called at ${timeStamp()}`)
// }
// global.doGet = doGet

// function onInstall(e) {
//   push(["event", "onInstall"], `Installed on ${Date()}`)
// }
// global.onInstall = onInstall

function buildAddOn(): any {
  // let foo = { a:1, b:2 };
  // let bar = { foo:123, bar:[4, 5, 6], baz:{} };
  // let baz = { a:1, b:{ x:{ y:{ z:999 } } }, c:3 };
  // let qux = { };
  // dset(foo, 'd.e.f', 'hello');
  // return foo

  // return CardService.newCardBuilder().build()

  // return dlv(ICONS, "UI")
  // return objectPath.get(ICONS, "UI")
  return 6666666
  return CardService.newCardBuilder()
    .setName("Card name")
    .setHeader(CardService.newCardHeader().setTitle("Card title"))
    .build()
  //return MainCard().build()
}
// @ts-ignore
// global.buildAddOn = buildAddOn
