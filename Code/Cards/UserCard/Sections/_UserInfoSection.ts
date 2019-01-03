//     Copyright (C) 2018 Christopher David Ramos
function UserInfoSection() {
    const UPK = (new Dictionary()).PROPS
    const username = userProperties.getProperty(UPK.USER.NAME)
    const useraddress = userProperties.getProperty(UPK.USER.ADDRESS)

    let textContent = " "
    if (isSet(username) && isSet(useraddress)) {
        textContent = doGet("Templates/userInfo", {username, useraddress })
    }
    return CardService.newCardSection()
        .addWidget(CardService.newTextParagraph()
                   .setText(textContent))
}
