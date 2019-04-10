// //     Copyright (C) 2018 Christopher David Ramos
declare const global: ISparseWx

import {
    objectPath,
} from "Vendor"

// import { UserCreator } from "Utilities/LinearizedObject"

import { timeStamp } from "Utilities/Date"
import * as Utilities from "Utilities/Utilities"

global.clearConfig = Utilities.clearConfig
global.timeStamp = timeStamp

import { _Card } from "Cards/Aux"

import { Dictionary } from "Data/Dictionary"

const dictionary = new Dictionary() as IDictionary

global.dictionary = dictionary
global.PROPS = dictionary.PROPS
global.UI = dictionary.UI
global.PALETTE = dictionary.UI.PALETTE

import { DictionaryIcons } from "Data/Dictionary/Icons"
global.ICONS = new DictionaryIcons()

import { MainCard, UserCard } from "Cards"
import { _Cache } from "Handlers/Aux"

global._Cache = _Cache

const userProperties: Properties = PropertiesService.getUserProperties()

global.userProperties = userProperties

const fetch = (reference, property?) => {
    let obj = JSON.parse(userProperties.getProperty(reference))
    if (obj == null) {
        obj = {}
        userProperties.setProperty(reference, "{}")
        return null
    }
    if (property == null) {
        return obj
    }
    return objectPath.withInheritedProps.get(obj, property)
}
(global as any).fetch = fetch

const push = (referencePropComplex: string[], value) => {
    const reference = referencePropComplex[0]
    const property = referencePropComplex[1]

    let obj = JSON.parse(userProperties.getProperty(reference))
    if (obj == null) {
        obj = {}
    }
    if (!!property) {
        objectPath.set(obj, property, value)
    } else {
        obj = value
    }
    userProperties.setProperty(reference, JSON.stringify(obj))
}
(global as any).push = push

const make = (reference, thing) => {
    userProperties.setProperty(reference, JSON.stringify(thing))
}
(global as any).make = make

const exists = (reference, property?) => {
    const obj = JSON.parse(userProperties.getProperty(reference))
    if (!obj) {
        return false
    }
    if (!property) {
        return true
    }
    return objectPath.withInheritedProps.has(obj, property)
}
(global as any).exists = exists

function doGet(e) {
    push(["event", "doGet"], `called at ${timeStamp()}`)
}

function onInstall(e) {
    push(["event", "onInstall"], `Installed on ${Date()}`)
}

const buildAddOn = (): Card => {
    return MainCard().build()
}

global.buildAddOn = buildAddOn
