//     Copyright (C) 2018 Christopher David Ramos
/**
 * Returns an object with the values of the argument objects.
 * If multiple objects have the same property value, the last value set is retained.
 * @param {...Object}
 * @returns {Object}
 */

import {push as pushy} from "@/Data/PushPull"

// export function mergeObjs() {
//   const obj = arguments[0]
//   for (i = 1; i < arguments.length; i++) {
//     const src = arguments[i]
//     for (const key in src) {
//       if (src.hasOwnProperty(key)) {
//         obj[key] = src[key]
//       }
//     }
//   }
//   return obj
// }

// export function flattenObj(ob: object) {
//   let iterator
//   const toReturn = {}
//   let x
//   let flatObject

//   for (iterator in ob) {
//     if (!ob.hasOwnProperty(i)) {continue}

//     if ((typeof ob[i]) === "object") {
//       flatObject = flattenObject(ob[i])
//       for (x in flatObject) {
//         if (!flatObject.hasOwnProperty(x)) {continue}

//         toReturn[i + "." + x] = flatObject[x]
//       }
//     } else {
//       toReturn[i] = ob[i]
//     }
//   }
//   return toReturn
// }

// export const curryIt = (uncurried: object) => {
//   const parameters = Array.prototype.slice.call(arguments, 1)
//   return function() {
//     return uncurried.apply(this, parameters.concat(
//       Array.prototype.slice.call(arguments, 0),
//     ))
//   }
// }

// https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/
// https://hackernoon.com/currying-in-js-d9ddc64f162e
// export function curry(fn: object) {
//   return (...xs) => {
//     if (xs.length === 0) {
//       throw Error("EMPTY INVOCATION")
//     }

//     if (xs.length >= fn.length) {
//       return fn(...xs)
//     }

//     return curry(fn.bind(null, ...xs))
//   }
// }

// export function compose(/* fn1, fn2, ... */) {
//   const funcs = arguments
//   return function() {
//     let args = arguments
//     for (let i = funcs.length - 1; i >= 0; i--) {
//       args = [funcs[i].apply(this, args)]
//     }
//     return args[0]
//   }
// }

// function prefixKeys(prefix, obj) {
//     return Object
//         .keys(obj)
//         .reduce((acc, key) => ({
//             ...acc,
//             ...{ [`${prefix}${key}` || key]: obj[key] },
//         }), {})
// }

// function lowercaseObjProps(o) {
//     return Object.keys(o).reduce((c, k) => (c[k.toLowerCase()] = o[k], c), {})
// }

// function uppercaseObjProps(o) {
//     return Object.keys(o).reduce((c, k) => (c[k.toUpperCase()] = o[k], c), {})
// }

// function getAllMethods(obj) {
//     return Object.getOwnPropertyNames(obj)
//         .filter((prop) => {
//             return typeof obj[prop] === "function"
//         })
// }

export function clearUserProperties(): void {
  Logger.log("Delete Local NPT User Properties:")
  if (PropertiesService.getUserProperties() !== null) {
    Logger.log(PropertiesService.getUserProperties().deleteAllProperties())
    Logger.log("  Deleted")
  } else {
    Logger.log("  None")
  }
}

export function clearScriptProperties(): void {
  Logger.log("Delete Local Script Properties:")
  if (PropertiesService.getScriptProperties() !== null) {
    Logger.log(PropertiesService.getScriptProperties().deleteAllProperties())
    Logger.log("  Deleted")
  } else {
    Logger.log("  None")
  }
}

export function clearConfig(): void {
  clearUserProperties()
  clearScriptProperties()
  pushy(["state", "mint"], true)
//  uc.removeAll(["mainCard", "wxRaw", "wxRawForecast"])
}

export function dumpScriptConfig(): void {
  Logger.log("Dump of Script Properties ...")
  Logger.log((PropertiesService.getScriptProperties()).getProperties())
}

export function dumpUserConfig(): void {
  Logger.log("Dump of User Properties ...")
  Logger.log((PropertiesService.getUserProperties()).getProperties())
}

export function dumpConfig(): void {
  dumpScriptConfig()
  dumpUserConfig()
}
