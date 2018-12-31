//     Copyright (C) 2018 Christopher David Ramos
function UserCard(dictionary) {
    const UI = dictionary.UI

    return CardService.newCardBuilder()
        .setName("userCard")
        .setHeader(CardService
                   .newCardHeader()
                   .setTitle("User Settings")
                   .setSubtitle(UI.PLACEHOLDER_TEXT.CARD_SUBTITLE))
        .addSection(UserSection())
        .addSection(getDisclaimerSection())
    // seems unnecessary
    //        .addSection(UserReturnHomeSection())
    //        .addSection(UserAddressSection())
}
