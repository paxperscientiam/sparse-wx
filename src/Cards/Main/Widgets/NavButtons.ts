// import "Cards/UserCard/Sections/_Actions"
import { UserCard } from "~Cards/User"

import { WidgetFactory } from "~Cards/Aux"
const widgetFactory = new WidgetFactory()

import { MainCard } from "~Cards/Main"

import {UI} from "~Data/Dictionary"

import {fetch} from "~Data/PushPull"

// @ts-ignore
Application.goToUserCardCallback = (): ActionResponse => {
  return CardService.newActionResponseBuilder()
    .setNavigation(
      CardService.newNavigation()
      // @ts-ignore
      //  .pushCard(uc.get("mainCard")),
      //        .pushCard(_cards.mainCard.build()),
        .pushCard(UserCard().build()),
    )
    .setStateChanged(false)
    .build()
}

// @ts-ignore
Application.refreshHomeCardCallback = (): ActionResponse => {
  return CardService.newActionResponseBuilder()
    .setNavigation(
      CardService.newNavigation()
        .updateCard(MainCard().build()),
    )
    .setStateChanged(false)
    .build()
}

export function NavButtonsWidget(): ButtonSet {
  const COLORS = UI.COLORS.SCHEME
  let settingsTextButton = "SETTINGS"

  const isMint = !!fetch("state", "mint")

  if (isMint) {
    settingsTextButton = "SET ADDRESS"
  }

  const action1 = CardService
    .newAction()
    .setFunctionName("goToUserCardCallback")

  const action2 = CardService
    .newAction()
    .setFunctionName("refreshHomeCardCallback")

  const buttonSet: ButtonSet = CardService.newButtonSet()

  buttonSet.addButton(widgetFactory._TextButton({
    action: action1,
    text: `<font color="${COLORS.SECONDARY}">[ ${settingsTextButton} ]</font>`,
  }))

  buttonSet.addButton(widgetFactory._TextButton({
    action: action2,
    text: `<font color="${COLORS.SECONDARY}">[ REFRESH ]</font>`,
  }))

  return buttonSet
}
