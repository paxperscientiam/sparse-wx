//     Copyright (C) 2018 Christopher David Ramos
function checkLocationServiceStatus() {
    // simply tests if service returns a good result
    const result = Maps.newGeocoder().geocode("10011")
    return result.status
}

function getCoordinatesFromAddressService(address: string) {
    const response = Maps.newGeocoder().geocode(address)
        .results

    const result =  {
        lat: response[0].geometry.location.lat.toFixed(4),
        lon: response[0].geometry.location.lng.toFixed(4),
    }
    result.coo = result.lat + "," + result.lon

    return result
}

function processGeocoderResultsService(polity, geometry) {
    const dictionary = new Dictionary()
    const upk = dictionary.PROPS
    const GeoInterface = dictionary.INTERFACE.GoogleGeoCodeInterface

    const lon = geometry.location.lng.toFixed(4)
    const lat = geometry.location.lat.toFixed(4)
    const coordinate = lat + "," + lon

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
        if (pol.types.indexOf(GeoInterface.ZIP_CODE) > -1) {
            userProperties.setProperty(upk.USER.ZIP_CODE, pol.long_name)
        }
    })
    userProperties.setProperty(upk.USER.LAT, lat)
    userProperties.setProperty(upk.USER.LON, lon)
    userProperties.setProperty(upk.USER.COORDINATE, coordinate)
}
