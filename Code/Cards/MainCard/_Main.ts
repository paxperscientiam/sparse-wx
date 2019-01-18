//     Copyright (C) 2018 Christopher David Ramos

function MainCard() {
    const ICONS = dictionary.ICONS
    const PROPS = dictionary.PROPS

    if (isSet(userProperties.getProperty(PROPS.USER.ADDRESS))) {
        userProperties.setProperty(PROPS.STATE.MINT, "USED")
    } else {
        userProperties.setProperty(PROPS.STATE.MINT, "MINT")
    }

    if (userProperties.getProperty(PROPS.STATE.WX_SERVICE) !== "OK") {
        return getWeatherServiceFallbackCard()
    }

    const card = CardService.newCardBuilder()
        .setName("mainCard")
        .setHeader(CardService.newCardHeader()
                   .setTitle(getMainCardTitle())
                   .setSubtitle(getMainCardSubtitle())
                   .setImageUrl(ICONS.UI.IMG_LOGO))
        .addSection(getWeatherSection())
        .addSection(getNavSection())
        .addSection(getDisclaimerSection())

    return card
}

function getMainCardTitle(): string {
    const UPK = dictionary.PROPS
    const date = new DateArray()

    const userName = userProperties.getProperty(UPK.USER.NAME)

    let greeting
    if (isSet(userName)) {
        greeting = `${date.GREETING}, ${userName}!`
    } else {
        greeting = `${date.GREETING}!`
    }
    return greeting
}

function getMainCardSubtitle(): string {
    const date = new DateArray()
    return `Today is ${date.WEEKDAY}.`
}
