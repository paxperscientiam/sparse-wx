//     Copyright (C) 2018 Christopher David Ramos
import { timeStamp } from "@/Utilities/Date"

import {
  GoogleGeoCodeInterface,
  PROPS,
} from "@/Data/Dictionary"

import {push as pushy} from "@/Data/PushPull"
// @ts-ignore
export function checkLocationServiceStatus() {
  // simply tests if service returns a good result
  const result: IGeocodeSR = Maps.newGeocoder().geocode("10011")
  Logger.log(`[${timeStamp()}][locationServiceStatus] ${result.status}`)
  pushy(["state", "status.location"] , result.status)
  return result.status
}

// function getCoordinatesFromAddressService(address: string) {
//   const response = Maps.newGeocoder().geocode(address)
//     .results

//   const result =  {
//     lat: response[0].geometry.location.lat.toFixed(4),
//     lon: response[0].geometry.location.lng.toFixed(4),
//   }
//   result.coo = result.lat + "," + result.lon

//   return result
// }

export function processGeocoderResultsService(polity: IData, geometry: IData) {
  const GeoInterface = GoogleGeoCodeInterface

  const lon = geometry.location.lng.toFixed(4)
  const lat = geometry.location.lat.toFixed(4)
  const coordinate = lat + "," + lon

  const localeKeys = Object.keys(PROPS.userLocale)
  localeKeys.forEach((key) => {
    pushy(["user", key] , null)
  })

  pushy(["polity"], polity)

  polity.forEach((pol: IData) => {
    if (pol.types.indexOf(GeoInterface.CITY) > -1) {
      pushy(["user", "city"], pol.short_name)
    }
    if (pol.types.indexOf(GeoInterface.STATE) > -1) {
      pushy(["user", "state"], pol.short_name)
      pushy(["user", "state_long"], pol.long_name)
    }
    if (pol.types.indexOf(GeoInterface.COUNTY) > -1) {
      pushy(["user", "county"], pol.short_name)
    }
    if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
      pushy(["user", "country"], pol.long_name)
    }
    if (pol.types.indexOf(GeoInterface.ZIP_CODE) > -1) {
      pushy(["user", "zip_code"], pol.long_name)
    }
  })

  pushy(["user", "lat"], lat)
  pushy(["user", "lon"], lon)
  pushy(["user", "coordinate"], coordinate)

  Logger.log(`[${timeStamp()}][lon] ${lon}`)
  Logger.log(`[${timeStamp()}][lat] ${lat}`)
  Logger.log(`[${timeStamp()}][coordinate] ${coordinate}`)
}
