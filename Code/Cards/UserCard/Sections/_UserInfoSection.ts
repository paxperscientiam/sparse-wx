//     Copyright (C) 2018 Christopher David Ramos
function UserInfoSection(args) {
    textContent = doGet("Templates/userInfo", {
        useraddress: args.useraddress,
        username: args.username,
    })
    return CardService.newCardSection()
        .addWidget(CardService.newTextParagraph()
                   .setText(textContent))
}
