function reverseDelimitedString(data: string, delimiter: string) {
    return  ((data.split(delimiter)).reverse()).join(delimiter);
}


function GeoLocationFromDnsService(ip: string) {
    const rip = reverseDelimitedString(ip, ".");
    const url = "https://dns.google.com/resolve";
    const query = {name: rip+".geo.lua.powerdns.org", type: "TXT"};
    CacheService.getUserCache().remove("DnsCoordinates");
    const result = (new JsonResponseHandler(url, query, {}, "DnsCoordinates")).data;

    const coordinates = ((result.Answer[0].data).replace(/"/g,"")).replace(" ", ",");

    return coordinates;
}


// var api_url = 'https://dns.google.com/resolve'; // Google Pubic DNS API Url

//   var type = 'MX'; // Type of record to fetch, A, AAAA, MX, CNAME, TXT, ANY

//   var name = 'accemy.com'; // The domain name to lookup

//   var requestUrl = api_url + '?name=' + name + '&type=' + type; // Build request URL

//   var response = UrlFetchApp.fetch(requestUrl); // Fetch the reponse from API

//   var responseText = response.getContentText(); // Get the response text

//   var json = JSON.parse(responseText); // Parse the JSON text

//   var answers = json.Answer.map(function(ans){return ans.data}).join('\n'); // Get the values



// curl 'https://dns.google.com/resolve?name=73.52.93.172.geo.lua.powerdns.org&type=TXT'|jq


// dig +short TXT 206.115.5.69.geo.lua.powerdns.org uses REVERSE ip addresses
