import {
  MainCardController,
  UserCardController,
} from "@/Controllers"

import { MainCardModel, UserCardModel } from "@/Models"

const userProperties: Properties = PropertiesService.getUserProperties()
Application.userProperties = userProperties


Application.buildAddOn = (): Card => {

  const model = new MainCardModel()
  const mainCard = new MainCardController()
  mainCard.bindingContext(model)
  return mainCard.build()
  //
//  const userCardModel = new UserCardModel()
 // const userCard = new UserCardController()
  //userCard.bindingContext(userCardModel)
  //  return userCard.build()
//  return userCard
}
//
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
