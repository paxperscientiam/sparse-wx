function getLocationFromZipService(zipcode: string) {
    let response;
    let xml;
    if (zipcode === undefined) {
        zipcode = "05401";
    }
    // create XML request
    const request = {
        "CityStateLookupRequest": {
            "ZipCode": {
                "Zip5": zipcode
            }
        }
    };
    xml = createXml(request);
    const xmlEncoded = encodeURIComponent(xml);
    const options = {
        method: "post",
        contentType: "application/xml; charset=utf-8"
    };
    try {
        response = UrlFetchApp.fetch("https://secure.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=" + xmlEncoded, options);

        xml = parseXml(parseLocationFromZipServiceResult(response));
        city = xml.getChild("ZipCode").getChild("City").getText();
        state = xml.getChild("ZipCode").getChild("State").getText();

        return {
            city: city,
            region: state,
        };
    }
    catch (err) {
//        Logger.log(err)
        return {
            city: "unknown",
            region: "unknown",
            status: "ERR",
            statusMessage: err,
        };
    }
}


function parseLocationFromZipServiceResult(response) {

    const xml = parseXml(response)
    const errorTag = xml.getChild("ZipCode").getChild("Error")
    let description

    if (!!errorTag) {
        description = errorTag.getChild("Description").getText()
        throw new Error(description)
    }
    city = xml.getChild("ZipCode").getChild("City").getText();
    state = xml.getChild("ZipCode").getChild("State").getText();

    return {
        city: city
        region: state,
    }
}



function getZipFromLocationService(address: object) {
    let response

    const firmName = address.firnName
    const addressLineOne = address.addressLineOne
    const addressLineTwo = address.addressLineTwo
    const city = address.city
    const state = address.state

    // create XML request
    const request = {
        "ZipCodeLookupRequest": {
            "Address": {
                "Address1": addressLineOne,
                "Address2": addressLineTwo,
                "City": city,
                "State": state
            }
        }
    }

    //     const xml = createXml(request)
    //     const xmlEncoded = encodeURIComponent(xml);
    //     const options = {
    //         method : "post",
    //         contentType: "application/xml; charset=utf-8",
    //     }

}


function checkUSPSServiceStatus() {
    return "OK"
}








//Logger.log(response.getContentText());
//  return response;


//  curl -X POST 'https://secure.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML='   --data-urlencode xml='<CityStateLookupRequest USERID="209FREEL5450"><ZipCode><Zip5>05401</Zip5></ZipCode></CityStateLookupRequest>'   -H 'Accept: application/xml'   -H 'Content-Type: application/xml'   -u username:password
// <?xml version="1.0" encoding="UTF-8"?>
// <CityStateLookupResponse><ZipCode><Zip5>05401</Zip5><City>BURLINGTON</City><State>VT</State></ZipCode></CityStateLookupResponse>
