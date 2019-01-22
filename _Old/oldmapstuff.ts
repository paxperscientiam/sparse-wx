function LocationService() {
    constructor() {
        const UPK = (new Dictionary()).PROPS
        Logger.log("Creating new LocationService instance ... ")
        const address = userProperties.getProperty(UPK.USER.ADDRESS)

        if (!isString(address)) {
            Logger.log("ERR (LocationService): user needs to set address first")
            this.status = "ERR"
            return this
        }
    }

    init() {
        try {
            this.coordData = getCoordinatesFromAddressService(address)
            Logger.log("Coordinate data: " + this.coordData)
            this.lat = this.coordData.lat
            this.lon = this.coordData.lon
            this.coo = this.coordData.coo

            userProperties.setProperty(upk.USER.LAT, this.lat)
            userProperties.setProperty(upk.USER.LON, this.lon)
            userProperties.setProperty(upk.USER.COORDINATE, this.coo)
            this.status = "OK"
            Logger.log("OK (LocationService)")
        } catch (e) {
            Logger.log("getCoordinatesFromAddressService error")
            Logger.log(`ERR: address value is ${address}`)
            this.status = "ERR"
        }
    }
}

function MapReverseCoordinates(lat, lon) {
    const response = Maps.newGeocoder().reverseGeocode(lat, lon)
    //
    const result = response.results[0]
    return result
}
