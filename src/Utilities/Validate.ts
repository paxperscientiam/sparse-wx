//     Copyright (C) 2018 Christopher David Ramos
import { processGeocoderResultsService } from "~Services"

export function validateUserName(input: string) {
  if (/^.{1,26}$/i.test(input)) {
    // test for length
    return [true, {message: "Nice name."}]
  }

  return [
    false,
    {
      message: "!!! Your name cannot be longer than 26 characters.",
    },
  ]
}

// // tslint:disable-next-line:max-line-length
// const isLatin = /^[0-9a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s,\.'\?\\!-]{2,25}$/i.test(input)
// if (!isLatin) {
//   return [false, {message: "Sorry, try another name"}]
// }

// return [true, {message: "OK"}]
// //    return isLatin
// //         let isCJK = /[\u4e00-\u9fa5 -]/.test(input)
// //     isCJK = true
// //     // https://stackoverflow.com/a/2385967
// //    //  if (isLatin || isCJK) {
// //     //         return true
// //     //     }
// //     //     return false;
// }

export function validateZIP(input: string) {
  // https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html
  return /^[0-9]{5}(?:-[0-9]{4})?$/.test(input)
}

export function validateMailingAddress(address: string) {
  // https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
  if (address == null) {
    return [false, "No valid address."]
  }
  const GeoInterface = dictionary.INTERFACE.GoogleGeoCodeInterface

  const response: IGeocodeSR = Maps.newGeocoder()
    .setRegion("us")
    .geocode(address)
  if (response.status === "ZERO_RESULTS") {
    return [false, "ZERO_RESULTS"]
  }

  const result = response.results[0]
  const polity = result.address_components

  const APPROVED_POLITIES = dictionary.APPROVED_POLITIES

  const leaves = Object.keys(APPROVED_POLITIES).map((el) => {
    return APPROVED_POLITIES[el]
  })

  polity.forEach((pol) => {
    if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
      push(["user", "country"], pol.long_name)
    }
  })

  const strPolity = fetch("user", "country")
  const isApprovedPolity = leaves.indexOf(strPolity) > -1

  if (!isApprovedPolity) {
    userProperties.deleteProperty(PROPS.userLocale.country)
    return [false, "UNSUPPORTED_REGION"]
  }

  Logger.log(`The polity ${strPolity} is approved: ${isApprovedPolity}`)

  // stores approved data
  processGeocoderResultsService(polity, result.geometry)

  const lastAddressResult = fetch("user", "address")
  //  const lastAddressResult2 = user.fetch("suggested_address_two").response

  if (lastAddressResult != null) {
    push(["user", "suggested_address_two"],  lastAddressResult)
  }
  push(["user", "address"], result.formatted_address)
  //
  return [true]
}
