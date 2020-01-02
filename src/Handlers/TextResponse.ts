//     Copyright (C) 2018 Christopher David Ramos
// tslint:disable-next-line:max-line-length
function TextResponseHandler(url: string, query = {}, params = {muteHttpExceptions: true}) {
    //
    if (Object.keys(query).length > 0) {
        // tslint:disable-next-line:max-line-length
        const strQuery = Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&")
        url = url + strQuery
    }

    try {
        this.data = UrlFetchApp.fetch(url, params)
    } catch (e) {
        this.data = ""
    }
}
