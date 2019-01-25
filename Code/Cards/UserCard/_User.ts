//     Copyright (C) 2018 Christopher David Ramos
function UserCard() {
    Logger.log("Usercard created")
    const username = userProperties.getProperty(UPK.USER.NAME)
    const useraddress = userProperties.getProperty(UPK.USER.ADDRESS)
    const UI = dictionary.UI

    const card = CardService.newCardBuilder()
        .setName("userCard")
        .setHeader(CardService.newCardHeader()
                   .setTitle("Settings")
                   .setSubtitle(UI.PLACEHOLDER_TEXT.CARD_SUBTITLE)
                   .setImageUrl(UI.ICONS.UI.IMG_COG))
        .addSection(UserSection())
    if (isSet(useraddress)) {
        card.addSection(UserInfoSection({username, useraddress}))
    }
    card.addSection(getDisclaimerSection())

    return card
}
