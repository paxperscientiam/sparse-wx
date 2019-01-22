function IpService() {
    const Dict = new Dictionary();
    const ipProviders = Dict.ipAddressProviders.sites;

    // must be declared because forEach does not return anything
    const result;

    try {
        //
        ipProviders.some(function(site) {
            result = (new JsonResponseHandler(site.url, site.query, site.params, site.cacheName)).data;
            result.providerId = site.providerId;
            result.form = site.form;
            return Object.keys(result).length > 0;
        });


        const r = {};

        for (key in result.form) {
            let altKey = result.form[key];
            r[key] = result[altKey];
        }
        this.result = r;
        this.status = "OK";
      //  throw new Error("Unable to retrieve IP address!");
    } catch (e) {
        this.status = "ERROR";
    }
}
