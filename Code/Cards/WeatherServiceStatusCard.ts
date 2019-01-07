//     Copyright (C) 2018 Christopher David Ramos
function getWeatherServiceFallbackCard() {
    const BRAND = (new Dictionary()).BRAND
    //    const actionComposeNew = CardService.newAction().setFunctionName("composeEmailNewCallback")
    return CardService.newCardBuilder()
        .setName("mainCard")
        .setHeader(CardService.newCardHeader()
                   .setTitle("Out of service.")
                   .setSubtitle("National Weather Service API is down."))
        .addSection(CardService.newCardSection()
                    .addWidget(CardService.newTextParagraph()
                               .setText(`Sorry about the inconvenience. If you have any questions or believe you've encountered a bug, don't hesitate to contact me at ${BRAND.EMAILS.BUGS[0]}.`)))
}

//            .addWidget(CardService.newImageButton()
//                                .setAltText("Compose new email.")
//                                .setIcon(CardService.Icon.EMAIL)
//                                .setComposeAction(actionComposeNew, CardService.ComposedEmailType.STANDALONE_DRAFT)))

// function composeEmailNewCallback(e) {
//     const accessToken = e.messageMetadata.accessToken
//     GmailApp.setCurrentMessageAccessToken(accessToken)

//     const BRAND = (new Dictionary()).BRAND

//     return CardService.newComposeActionResponseBuilder()
//         .setGmailDraft(GmailApp
//                        .createDraft(BRAND.EMAILS.BUGS[1],
//                                     "[SparseWx][Bug report]",
//                                     ""))
//         .build()
// }
