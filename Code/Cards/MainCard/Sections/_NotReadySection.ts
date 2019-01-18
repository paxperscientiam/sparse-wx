//     Copyright (C) 2018 Christopher David Ramos
function getWxNotReadySection() {
    const BRAND_NAME = dictionary.BRAND.NAME

    return CardService.newCardSection()
        .setHeader("No address found")
        .addWidget(CardService.newTextParagraph()
                   .setText(`Click 'settings' to personalize ${BRAND_NAME}`))
}
