//     Copyright (C) 2018 Christopher David Ramos
export function JsonResponseHandler(url: string,
                                    query = {},
                                    params: URLFetchRequestOptions = {muteHttpExceptions: true}): IJsonResponseHandler {

  const data = {
    "@context": [ "JsonResponseHandler" ],
    params,
    query,
    url,
  }

  const objJsonHandlerMethods = {
    fetch() {
      const response = UrlFetchApp.fetch(data.url , data.params) as HTTPResponse
      const json = response.getContentText()
      const responseData = JSON.parse(json)
      return {
        "@context": [ "JsonResponseHandler" ,
                      {
          method: "fetch",
        }],
        "data": responseData,
        "status": [ true, "Things are OK." ],
      }
    },
  }

  const obj = Object.create(objJsonHandlerMethods)
  obj.data = data

  return obj
}
