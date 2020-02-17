//     Copyright (C) 2018 Christopher David Ramos
declare const Application: ISparseWx

import { processGeocoderResultsService } from "@/Services"

import {
  APPROVED_POLITIES,
  INTERFACE,
  PROPS,
} from "@/Data/Dictionary"

import { UserModel } from "@/Models/UserModel"

export function validateUserName(input: string = "") {
  if (input == "") {
    return [true]
  }

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
  const userModel = new UserModel()
  // https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
  if (address == null) {
    return [false, "No valid address."]
  }
  const GeoInterface = INTERFACE.GoogleGeoCodeInterface

  const response: IGeocodeSR = Maps.newGeocoder()
    .setRegion("us")
    .geocode(address)
  if (response.status === "ZERO_RESULTS") {
    return [false, "ZERO_RESULTS"]
  }

  const result = response.results[0]
  const polity = result.address_components

  const approvedPolities = Object.keys(APPROVED_POLITIES)

  polity.forEach((pol: IData) => {
    if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
      userModel.country = pol.long_name
    }
  })

  const strPolity = userModel.country
  //const isApprovedPolity = approvedPolities.indexOf(strPolity) > -1
  const isApprovedPolity = (strPolity === "United States");

  if (!isApprovedPolity) {
    Application.userProperties.deleteProperty(PROPS.userLocale.country)
    return [false, "UNSUPPORTED_REGION"]
  }

  Logger.log(`The polity ${strPolity} is approved: ${isApprovedPolity}`)

  // stores approved data
  processGeocoderResultsService(polity, result.geometry)

//  const lastAddressResult = userModel.address
  //  const lastAddressResult2 = user.fetch("suggested_address_two").response

  // if (lastAddressResult != null) {
  //   pushy(["user", "suggested_address_two"],  lastAddressResult)
  // }
  // pushy(["user", "address"], result.formatted_address)
  //
  return [true]
}
