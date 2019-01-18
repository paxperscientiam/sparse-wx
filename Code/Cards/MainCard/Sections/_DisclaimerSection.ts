//     Copyright (C) 2018 Christopher David Ramos
function getDisclaimerSection() {
    return CardService.newCardSection()
        .setHeader("Acknowledgments")
        .addWidget(CardService
                   .newTextParagraph()
                   .setText(doGet("Templates/userNotices", {
                       license: dictionary.BRAND.URLS.LICENSE,
                       nws: dictionary.BRAND.URLS.NWS,
                   })))
        .setCollapsible(true)
}
