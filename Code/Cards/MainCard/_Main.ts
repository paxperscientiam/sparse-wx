//     Copyright (C) 2018 Christopher David Ramos

function MainCard(dictionary) {
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

//     if (userProperties.getProperty(PROPS.STATE.MINT) === "USED") {
//         const thing = getCoordinatesFromAddressService(userProperties.getProperty(PROPS.USER.ADDRESS))
//         weatherPrimeService(thing.coo)
//     }

    const card = CardService.newCardBuilder()
        .setName("mainCard")
        .setHeader(CardService.newCardHeader()
                   .setTitle(getMainCardTitle(dictionary))
                   .setSubtitle(getMainCardSubtitle())
                   .setImageUrl(ICONS.UI.IMG_LOGO))
        .addSection(getWeatherSection(dictionary))
        .addSection(getNavSection())

    return card
}

// function MainCard() {
//     let msgWxUpdate
//     const location = (new LocationService())
//     const icons = (new DictionaryIcons()).ui
//     const dictionary = (new Dictionary())
//     const props = dictionary.PROPS
//     const status = dictionary.status
//     const _wx = dictionary.wx

//     if (userProperties.getProperty(props.STATE.WX_SERVICE) !== "OK") {
//         return getWeatherServiceFallbackCard()
//     }

//     //         const location = (new LocationService())
//     //         const locationStatus = location.status

//     //         let updateTime = userProperties.getProperty("WX_UPDATE_TIME")
//     //         try {
//     //             const wxUpdateTime = formatDateService(updateTime, "h:mma dd MMM")
//     //             msgWxUpdate = `Last updated: ${wxUpdateTime}`;
//     //             //        userProperties.setProperty("msgWxUpdate", msgWxUpdate)
//     //         } catch (e) {
//     //             msgWxUpdate = `Last updated: ?`;
//     //             //        userProperties.setProperty("msgWxUpdate", msgWxUpdate)
//     //         } finally {
//     //             userProperties.setProperty("msgWxUpdate", msgWxUpdate)
//     //             Logger.log(msgWxUpdate)
//     //         }

//     //   const ready = userProperties.getProperty(props.STATE.MINT)
//     //     let wxSection
//     //     if (ready === "ERR") {
//     //         wxSection = getWxNotReadySection()
//     //     } else {
//     //         wxSection = getWeatherSection()
//     //     }

//     const mainCard = CardService.newCardBuilder()
//         .setName("mainCard")
//         .setHeader(CardService.newCardHeader()
//                    .setTitle(getMainCardTitle())
//                    .setSubtitle(getMainCardSubtitle())
//                    .setImageUrl(icons.IMG_LOGO))

//     if (userProperties.getProperty(props.STATE.MINT) === "USED") {
//         mainCard.addSection(getDisclaimerSection())
//     } else {
//         mainCard.addSection(getWeatherSectionFallbackSection())
//     }

//     return mainCard
//     //        .addSection(wxSection)
//     //        .addSection(getNavSection())

//     //         ;
//     //
// }

function getMainCardTitle(dictionary): string {
    const upk = dictionary.PROPS
    const date = new DateArray()

    const userName = userProperties.getProperty(upk.USER.NAME)

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
