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
    const upk = dictionary.props
    const GeoInterface = dictionary.INTERFACE.GoogleGeoCodeInterface

    const response = Maps.newGeocoder()
    //        .setRegion("us")
        .geocode(address)
    if (response.status === "ZERO_RESULTS") {
        return [false, "ZERO_RESULTS"]
    }

    const result = response.results[0]
    const polity = result.address_components
    polity.forEach((pol) => {
        if (pol.types.indexOf(GeoInterface.CITY) > -1) {
            userProperties.setProperty(upk.USER.CITY, pol.short_name)
        }

        if (pol.types.indexOf(GeoInterface.STATE) > -1) {
            userProperties.setProperty(upk.USER.STATE, pol.short_name)
        }
        if (pol.types.indexOf(GeoInterface.COUNTY) > -1) {
            userProperties.setProperty(upk.USER.COUNTY, pol.short_name)
        }
        if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
            userProperties.setProperty(upk.USER.COUNTRY, pol.long_name)
        }

    })

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

    userProperties.setProperty(upk.USER.ADDRESS, result.formatted_address)
    userProperties.setProperty(upk.USER.LAT, result.geometry.location.lat)
    userProperties.setProperty(upk.USER.LON, result.geometry.location.lng)
    //
    return [true]
}

function goodPolTest() {
    //
}
