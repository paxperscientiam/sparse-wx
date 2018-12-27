//     Copyright (C) 2018 Christopher David Ramos
function validateUserName(input: string) {
    // https://stackoverflow.com/a/2385967
    // tslint:disable-next-line:max-line-length
    return /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,25}$/.test(input)
}

function validateZIP(input: string) {
    // https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(input)
}

function validateMailingAddress(address: string) {
    // https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
    if (address === "" || address === null || address === undefined) {
        return false
    }
    const dictionary = new Dictionary()
    const upk = dictionary.PROPS
    const GeoInterface = dictionary.INTERFACE.GoogleGeoCodeInterface

    const response = Maps.newGeocoder()
    //        .setRegion("us")
        .geocode(address)
    if (response.status === "ZERO_RESULTS") {
        return [false, "ZERO_RESULTS"]
    }

    const result = response.results[0]
    const polity = result.address_components

    const polities = dictionary.APPROVED_POLITIES

    const leaves = traverse(polities).reduce((acc, pol) => {
        if (pol !== undefined) {
            acc.push(pol)
        }
        return acc
    }, [])

    const polity = userProperties.getProperty(upk.USER.COUNTRY)
    const isApprovedPolity = leaves.indexOf(polity) > -1
    Logger.log(`The polity ${polity} is approved: ${isApprovedPolity}`)
    if (!isApprovedPolity) {
        return [false, "UNSUPPORTED_REGION"]
    }

    // stores approved data
    processGeocoderResultsService(polity, result.geometry)
    userProperties.setProperty(upk.USER.ADDRESS, result.formatted_address)

    //
    return [true]
}

function goodPolTest() {
    //
}
