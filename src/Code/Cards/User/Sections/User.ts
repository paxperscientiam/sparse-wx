//     Copyright (C) 2018 Christopher David Ramos
import { validateMailingAddress, validateUserName } from "Utilities/Validate"

import { ResetWidget } from "Cards/Main/Widgets/Reset"

import { MainCard } from "Cards/Main"

import { _CardSection,
         _SelectionInput,
         _TextButton,
         _TextInput,
         _Widget } from "Cards/Aux"

// @ts-ignore
global.submitNameCallback = (e): boolean => {
  Logger.log(e)
  const name = e.formInput.user_name_key
  push(["input", "user_name_key"], name)
  if (!name) {
    return false
  }
  const isUserNameValid = validateUserName(name)

  if (isUserNameValid[0]) {
    push(["state", "input.name"], "valid")
    push(["state", "mint"], false)
    push(["user", "name"], name)
    return true
  } else {
    push(["state", "input.name"], "invalid")
    throw new Error("bad name")
  }
}

//
//   if (true & name) {
//     return false
//   }
//   Logger.log(`Submitted name is ${name}`)
//

//   if (isUserNameValid[0] && name.length > 0) {

//     Logger.log(`User's chosen name is ${name}.`)
//     user.name = name
//     return true
//   } else {
//     // @ts-ignore
//     throw new Error(isUserNameValid[1].message)
//   }

//   return false
// }

// @ts-ignore
global.submitAddressCallback = (e) => {
  const BRAND = dictionary.BRAND
  const address = e.formInput.user_address_key
  // @test
  push(["input", "user_address_key"], address)

  const storedAddress = fetch("user", "address")

  if (!address && !storedAddress) {
    throw new Error("First time? You'll need to set an address")
  } else if (!address) {
    // false means don't process
    return false
  }

  Logger.log(`Submitted address is ${address}`)

  const isValid = validateMailingAddress(address)
  // if valid, retrieve address from storage
  if (isValid[0]) {
    push(["state", "input.address"], "valid")
    push(["state", "mint"], false)
    //  const cache = CacheService.getUserCache()
    // cache.removeAll(["wxRaw", "wxRawForecast"])
    // successful validation means that lon,lat, and address properties defined
    return true
  } else {
    const response = "Sorry, try a different address."
    if (isValid[1] === "ZERO_RESULTS") {
      push(["state", "input.address"], "ZERO_RESULTS")
      throw new Error("Sorry, that address wasn't found. Try something else.")
    }

    if (isValid[1] === "UNSUPPORTED_REGION") {
      push(["state", "input.address"], "UNSUPPORTED_REGION")
      throw new Error(`Sorry, ${BRAND.NAME} only supports results for the USA.`)
    }
    push(["state", "input.address"], "ERR")
    throw new Error(response)
  }
}

// @ts-ignore
global.submitTemperatureUnitCallback = (e) => {
  const chosenTempUnit = e.formInputs.temperature_unit_list[0]

  const currentTempUnit = e.temp_unit

  if (currentTempUnit === chosenTempUnit) {
    return false
  }

  if (!chosenTempUnit || chosenTempUnit === "") {
    return false
  }

  push(["user", "temp_unit"], chosenTempUnit)
  return true
}

// // @ts-ignore
// global.goToHomeCardCallback = () => {
//   return CardService.newActionResponseBuilder()
//     .setNavigation(
//       CardService.newNavigation().pushCard(MainCard().build()),
//     )
//     .setStateChanged(false)
//     .build()
// }

// @ts-ignore
global.getAddressSuggestionsCallback = () => {
  Logger.log("Address suggestions callback ... called")
  // will use recent entries
  const suggestions = CardService.newSuggestions()

  const arrSuggestionsTemp = [
    user.suggested_address_one,
    user.suggested_address_two,
    user.suggested_address_three,
  ]

  // arrSuggestionsTemp.forEach((element) => {
  //     if (element != null) {
  //       suggestions.addSuggestion(element)
  //     }
  //   })
  suggestions
    .addSuggestion("one")
    .addSuggestion("two")
    .addSuggestion("three")

  return CardService.newSuggestionsResponseBuilder()
    .setSuggestions(suggestions)
    .build()
}

// @ts-ignore
global.processUserPreferencesFormCallback = (e) => {
  Logger.log("processUserPreferencesFormCallback ... ")

  let shouldProcess = false
  let notification = ""

  try {
    const isNameChanged = submitNameCallback(e)
    // @ts-ignore
    shouldProcess = shouldProcess || isNameChanged
    if (isNameChanged) {
      notification = "Name set. "
    }
  } catch (event) {
    return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
                       .setType(CardService.NotificationType.ERROR)
                       .setText(event.message))
      .setStateChanged(false)
      .build()
  }

  try {
    const isAddressChanged = submitAddressCallback(e)
    // @ts-ignore
    shouldProcess = shouldProcess || isAddressChanged
    if (isAddressChanged) {
      notification += "Address set."
    }
  } catch (event) {
    return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
                       .setType(CardService.NotificationType.ERROR)
                       .setText(event.message))
      .setStateChanged(false)
      .build()
  }

  try {
    const isTempUnitChanged = submitTemperatureUnitCallback(e)
    // @ts-ignore
    shouldProcess = shouldProcess || isTempUnitChanged
    if (isTempUnitChanged) {
      notification += " Unit changed."
    }
  } catch (event) {
    return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
                       .setType(CardService.NotificationType.ERROR)
                       .setText(event.message))
      .setStateChanged(false)
      .build()
  }

  if (shouldProcess) {
    return CardService.newActionResponseBuilder()
      .setNavigation(CardService
                     .newNavigation()
                     .pushCard(MainCard().build()))
      .setNotification(CardService.newNotification()
                       .setType(CardService.NotificationType.INFO)
                       .setText(notification))
      .setStateChanged(true)
      .build()
  }

  return CardService.newActionResponseBuilder()
    .setNotification(CardService.newNotification()
                     .setType(CardService.NotificationType.INFO)
                     .setText(`Nothing changed`))
    .setStateChanged(false)
    .build()
}

export function UserSection(): CardSection {
  const isMint = !!fetch("state", "mint")

  const userzip = fetch("user", "zip_code")

  const submitAddressSuggestionsAction = CardService.newAction()
    .setFunctionName("getAddressSuggestionsCallback")
    .setParameters({})

  const processUserFormAction =  CardService.newAction()
    .setFunctionName("processUserPreferencesFormCallback")
    .setParameters({})

  let setAddressTitle = "Forecast Location"
  if (userzip) {
    setAddressTitle += ` (${userzip})`
  }

  const cardSection = _CardSection()

  push(["state", "menu.submitTemp.options.values"], "dropdown_item_f, dropdown_item_c")

  cardSection
    .addWidget(_TextInput({
      fieldName: "user_name_key",
      hint: "How should SparseWx address you? (25 character max)",
      title: "Your Name (optional)",
    }))
    .addWidget(_TextInput({
      fieldName: "user_address_key",
      hint: "City, state or ZIP code",
      title: setAddressTitle,

      suggestions: submitAddressSuggestionsAction,
    }))
    .addWidget(_SelectionInput({
      fieldName: "temperature_unit_list",
      items: [
        {
          text: "Fahrenheit",
          value: "dropdown_item_f",

          selected: true,
        },
        {
          text: "Celsius",
          value: "dropdown_item_c",

          selected: false,
        },
      ],
      title: "Temperature Scale",
      type: "DROPDOWN",
    }))
    .addWidget(_TextButton({
      action: processUserFormAction,
      text: "Submit",
    }))

  if (!isMint) {
    cardSection
      .addWidget(ResetWidget())
  }

  return cardSection.setCollapsible(false).build()
}