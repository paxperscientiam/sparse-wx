//     Copyright (C) 2018 Christopher David Ramos
function validateUserName(input: string) {
    let isCJK = /[\u4e00-\u9fa5 -]/.test(input)
    isCJK = true
    // https://stackoverflow.com/a/2385967
    // tslint:disable-next-line:max-line-length
    const isLatin = /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,25}$/.test(input)
    //  if (isLatin || isCJK) {
    //         return true
    //     }
    //     return false
    return isLatin
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
    const UPK = dictionary.PROPS
    const GeoInterface = dictionary.INTERFACE.GoogleGeoCodeInterface

    const response = Maps.newGeocoder()
        .setRegion("us")
        .geocode(address)
    if (response.status === "ZERO_RESULTS") {
        return [false, "ZERO_RESULTS"]
    }

    const result = response.results[0]
    const polity = result.address_components

    const arrApprovedPolities = dictionary.APPROVED_POLITIES

    const leaves = traverse(arrApprovedPolities).reduce((acc, pol) => {
        if (pol !== undefined) {
            acc.push(pol)
        }
        return acc
    }, [])

    polity.forEach((pol) => {
        if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
            userProperties.setProperty(UPK.USER.COUNTRY, pol.long_name)
        }
    })

    const strPolity = userProperties.getProperty(UPK.USER.COUNTRY)
    const isApprovedPolity = leaves.indexOf(strPolity) > -1

    if (!isApprovedPolity) {
        userProperties.deleteProperty(UPK.USER.COUNTRY)
        return [false, "UNSUPPORTED_REGION"]
    }

    Logger.log(`The polity ${strPolity} is approved: ${isApprovedPolity}`)

    // stores approved data
    processGeocoderResultsService(polity, result.geometry)

    const lastAddressResult = userProperties.getProperty(UPK.USER.ADDRESS)
    const lastAddressResult2 = userProperties.getProperty(UPK.USER.SUGGESTED_ADDRESS_TWO)

    if (isSet(lastAddressResult)) {
        userProperties.setProperty(UPK.USER.SUGGESTED_ADDRESS_TWO, lastAddressResult)
    }
    userProperties.setProperty(UPK.USER.ADDRESS, result.formatted_address)

    //
    return [true]
}

function goodPolTest() {
    //
}
