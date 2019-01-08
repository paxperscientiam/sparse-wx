//     Copyright (C) 2018 Christopher David Ramos

/* tslint:disable:max-line-length */
function Dictionary() {
    // Dictionary is for STATIC stuff
    //
    this.INTERFACE = new Enumeration({
        GoogleGeoCodeInterface: {
            // values are those used by Google
            CITY: "locality",
            COUNTRY: "country",
            COUNTY: "administrative_area_level_2",
            STATE: "administrative_area_level_1",

            ZIP     : "postal_code",
            ZIP_CODE: "postal_code",

            LAT     :  "lat",
            LON     :  "lng",
        },
        NationalWeatherServiceInterface: {
            // NWS values
            API: {
                ALERTS: {
                    ACTIVE: "alerts/active",
                    _: "alerts",
                },
                GRID_POINTS: {
                    FORECAST: {
                        HOURLY: "@wfo/@xy/forecast/hourly",
                        _: "@wfo/@xy/forecast",
                    },
                    _: "@wfo/@xy",
                },
                POINTS: {
                    _: "points",
                },
                _: "https://api.weather.gov/xxx",
            },
            URL: {
                STATE_ALERTS: "https://alerts.weather.gov/cap/",
            },
        },
    })

    // short and long form
    this.APPROVED_POLITIES = new Enumeration(
        {
            UNITED_STATES : "United States",
            US            : "US",

            PR            : "PR",
            PUERTO_RICO   : "Puerto Rico",

            GUAM          : "Guam",
        },
    )

    this.HTTP = new Enumeration({
        WX_SERVICE: {
            PARAMS: {
                escaping: false,
                headers: {
                    "Accept": "application/geo+json;version=1",
                    "From": "chrisdavidramos@gmail.com",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0 SparseWX/2066190da3f83c823e3733b925a033e5",
                },
                muteHttpExceptions: true,
            },
        },
    })

    this.PROPS = new Enumeration({
        STATE: {
            LOCATION_SERVICE:  "STATE_LOCATION_SERVICE",
            MINT         : "STATE_MINT",
            WX_DATA      : "WX_DATA", // primed or not?
            WX_SERVICE   : "STATE_WX_SERVICE",
        },
        USER: {
            ADDRESS   : "USER_ADDRESS",
            CITY      : "USER_CITY",

            COO         : "USER_COORDINATE",
            COORDINATE  : "USER_COORDINATE",
            COORDINATES : "USER_COORDINATE",
            LAT       : "USER_LAT",
            LON       : "USER_LON",

            COUNTRY   : "USER_COUNTRY",
            COUNTY    : "USER_COUNTY",
            NAME      : "USER_NAME",
            REGION    : "USER_REGION",
            STATE     : "USER_REGION",
            STATE_LONG: "USER_REGION_LONG",
            TZ        : "USER_TZ",
            ZIP       : "USER_ZIP_CODE",
            ZIP_CODE  : "USER_ZIP_CODE",

            TEMP_UNIT : "USER_TEMP_UNIT",

            SUGGESTED_ADDRESS_ONE: "USER_ADDRESS",
            SUGGESTED_ADDRESS_TWO: "SUGGESTED_ADDRESS_TWO",

            SUGGESTED_ADDRESS_THREE: "SUGGESTED_ADDRESS_THREE",

        },
        WX: {
            WX_API: "WX_API", // object
            WX_API_ENDPOINT: "WX_API_ENDPOINT", // string
            WX_API_PARAMS: "WX_API_PARAMS", // object
            WX_UPDATE_TIME: "WX_UPDATE_TIME",

            WX_TIMEZONE: "WX_TZ",
            WX_TZ: "WX_TZ",
        },

        CACHE: {
            WX: {
                RAW: "CACHE_WX_RAW",
            },
        },
    })

    this.STATE = new Enumeration({
    })

    this.BRAND = new Enumeration(
        {
            AUTHOR: "Christopher David Ramos",
            EMAILS: {
                BUGS: ["sparsewx@paxperscientiam.com", "'SparseWx' <sparsewx@paxperscientiam.com>"],
            },
            NAME: "SparseWx",
            URLS: {
                LICENSE: "https://raw.githubusercontent.com/paxperscientiam/sparse-wx/f6dde7ebf2d73eff18599f732912a4f5f748d27d/LICENSE",
                NWS: "https://www.weather.gov/",
            },
            version: " ",
        })

    this.CARDINAL_DIRECTIONS = new Enumeration(
        {
            EAST: "east",
            NORTH: "north",
            NORTH_EAST: "northeast",
            NORTH_NE: "north-northeast",
            NORTH_NW: "north-northwest",
            NORTH_WEST: "northwest",
            //
            SOUTH: "south",
            SOUTH_EAST: "southeast",
            SOUTH_WEST: "southwest",

            N: "north",
            NE: "northeast",
            NNE: "north-northeast",
            NNW: "north-northwest",
            NW: "northwest",

            E: "east",
            ENE: "east-northeast",
            ESE: "east-southeast",

            S: "south",
            SE: "southeast",
            SSE: "south-southeast",
            SSW: "South-southwest",
            SW: "southwest",

            W: "west",
            WEST: "west",
            WNW: "west-northwest",
            WSW: "west-southwest",
        },
    )

    this.ICONS = new DictionaryIcons()

    this.UI = this.ICONS

    this.UI.WX_SECTION__WIDGET_COUNT = 8

    this.UI.PLACEHOLDER_TEXT = {
        CARD_SECTION_HEADER: " ",
        CARD_SUBTITLE: " ",
    }

    // https://clrs.cc/
    this.UI.PALETTE = {
        AQUA  : "#7FDBFF",
        BLUE  : "#0074D9",
        NAVY  : "#001f3f",
        TEAL  : "#39CCCC",

        GREEN : "#2ECC40",
        LIME  : "#01FF70",
        OLIVE : "#3D9970",
        YELLOW: "#FFDC00",

        FUCHSIA: "#F012BE",
        MAROON: "#85144b",
        ORANGE: "#FF851B",
        RED   : "#FF4136",

        BLACK : "#111111",
        GRAY  : "#AAAAAA",
        PURPLE: "#B10DC9",
        SILVER: "#DDDDDD",

        WHITE : "#FFFFFF",
    }

    this.UI.COLORS = this.UI.PALETTE

    this.UI.WIDGETS = {
        WEATHER_TODAY: {
            COLOR_ONE: "#4a707a",
        },
    }

    //     this.ipAddressProviders = {
    //         sites: [
    //             {
    //                 url: "https://api.ipify.org",
    //                 query: {
    //                     format: "json"
    //                 },
    //                 params: {},
    //                 cacheName: "ip",
    //                 providerId: "IP_IPIFY",
    //                 form: {
    //                     ip: "ip"
    //                 }
    //             },
    //             {
    //                 url: "https://ipinfo.io/geo",
    //                 query: {
    //                     token: "ac4c12d010bed2"
    //                 },
    //                 params: {},
    //                 cacheName: "ip",
    //                 providerId: "IP_IPINFO",
    //                 form: {
    //                     ip: "ip",
    //                     country: "country",
    //                     state: "region",
    //                     city: "city",
    //                     coordinates: "loc"
    //                 }
    //             },
    //             {
    //                 url: "https://ifconfig.co/json",
    //                 query: {},
    //                 params: {},
    //                 cacheName: "ip",
    //                 providerId: "IP_IFCONFIG",
    //                 form: {
    //                     ip: "ip",
    //                     country: "country",
    //                     city: "city",
    //                     latitude: "latitude",
    //                     longitude: "longitude"
    //                 }
    //             },
    //         ]
    //     }
}
