//     Copyright (C) 2018 Christopher David Ramos
// function getUserCardWidget() {
//     const action = CardService.newNavigation().popToRoot()

//     return CardService.newTextButton()
//         .setText("settings")
//         .setOnClickAction(action)
// }

// /**
//  *  Create a button that navigates to the specified child card.
//  *  @return {TextButton}
//  */
// function createToCardButton(obj) {
//     Logger.log(`createToCardButton: ${obj}`)

//     const action = CardService.newAction()
//         .setFunctionName("gotoChildCard")
//         .setParameters({
//             card: obj.card.toString()
//         })
//     //
//     const button CardService.newTextButton()
//         .setText(obj.text)
//         .setOnClickAction(action)

//     return button
// }

// /**
//  *  Create a child card, with buttons leading to each of the other
//  *  child cards, and then navigate to it.
//  *  @param {Object} e object containing the id of the card to build.
//  *  @return {ActionResponse}
//  */
// function gotoChildCard(e) {
//     Logger.log(`gotoChildCard: ${e}`)
//     const cardName = e.parameters.card
//     const nav = CardService.newNavigation().popToNamedCard(cardName)
//     //.pushCard(card)

//     const actionResponse =  CardService.newActionResponseBuilder()
//         .setNavigation(nav)
//         .setStateChanged(true)
//         .build()

//     return actionResponse
// }

// /**
//  *  Return to the initial add-on card.
//  *  @return {ActionResponse}
//  */
// function gotoRootCard() {
//     var nav = CardService.newNavigation().popToRoot()
//     return CardService.newActionResponseBuilder()
//         .setNavigation(nav)
//         .build()
// }
