//     Copyright (C) 2018 Christopher David Ramos
export class Dictionary {
  INTERFACE
  APPROVED_POLITIES
  BRAND
  CARDINAL_DIRECTIONS
  HTTP
  PALETTE
  PROPS
  UI
  //
  //
  constructor() {
    enum GoogleGeoCodeInterface {
      // values are those used by Google
      CITY = "locality",
      COUNTRY = "country",
      COUNTY = "administrative_area_level_2",
      STATE = "administrative_area_level_1",

      ZIP      = "postal_code",
      ZIP_CODE = "postal_code",

      LAT      =  "lat",
      LON      =  "lng",
    }
    this.INTERFACE = {
      GoogleGeoCodeInterface,
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
          _: "https://api.weather.gov/",
        },
        URL: {
          STATE_ALERTS: "https://alerts.weather.gov/cap/",
        },
      },
    }

    enum APPROVED_POLITIES {
      UNITED_STATES = "United States",
      US            = "US",

      PR            = "PR",
      PUERTO_RICO   = "Puerto Rico",

      GUAM          = "Guam",
    }
    this.APPROVED_POLITIES = APPROVED_POLITIES

    this.HTTP = {
      WX_SERVICE: {
        PARAMS: {
          escaping: false,
          headers: {
            "Accept": "application/geo+json;version=1",
            "From": "chrisdavidramos@gmail.com",
            // tslint:disable-next-line:max-line-length
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0 SparseWX/2066190da3f83c823e3733b925a033e5",
          },
          muteHttpExceptions: true,
        },
        URL: {
          STATE_ALERTS: "https://alerts.weather.gov/cap/",
        },
      },
    }

    enum applicationState {
      mint          = "applicationState_mint",
      wxService     = "applicationState_wxService",
      marker        = "applicationState_marker",

      test_lat      = "applicationState_test_lat",
      test_lon      = "applicationState_test_lon",
      test_coo      = "applicationState_test_coo",
      test_submittedAddress = "applicationState_test_submittedAddress",
      test_chosenTempUnit = "applicationState_test_chosenTempUnit",
      test_validAddress = "applicationState_test_validAddress",
      test_validUsername = "applicationState_test_validUsername",
      test_WeatherSectionAddress = "applicationState_test_WeatherSectionAddress",
      test_WeatherWidgetArgs = "applicationState_test_WeatherWidgetArgs",
      test_WeatherServiceArgs = "applicationState_test_WeatherServiceArgs",
      test_urlNwsMetadata = "applicationState_test_urlNwsMetadata",
      test_wxUrl = "applicationState_test_wxUrl",
      test_WeatherServiceResultTemp = "applicationState_test_WeatherServiceResultTemp",
      test_weatherWidgetException = "applicationState_test_weatherWidgetException",
      test_WxWidgetCount = "applicationState_test_WxWidgetCount",
      test_alertUrl = "applicationState_test_alertUrl",
      test_metaDataUrl = "applicationState_test_metaDataUrl",
      test_urlWxServiceCheck = "applicationState_test_urlWxServiceCheck",
      test_userServiceCheck = "applicationState_test_userServiceCheck",
      test_wxServiceResultTemp = "applicationState_test_wxServiceResultTemp",
      test_wxPeriodCount = "applicationState_test_wxPeriodCount",
      test_wxTimeZone = "applicationState_test_wxTimeZone",
      test_catchEx = "applicationState_test_catchEx",

      test_JRHfetch = "applicationState_test_JRHfetch",
      test_fetchResponse = "applicationState_test_fetchResponse",

      test_submitNameCallback = "applicationState_test_submitNameCallback",
      test_shouldProcessForm = "applicationState_test_shouldProcessForm",
      test_wxSuccessfulFetch = "applicationState_test_wxSuccessfulFetch",

      test_PrepWx = "applicationState_test_PrepWx",

      test_StatusCheck = "applicationState_test_StatusCheck",

      test_wxPN = "applicationState_test_wxPN",
    }

    enum userBio {
      name       = "user_name",
      temp_unit  = "user_temp_unit",

      suggested_address_one = "user_address",
      suggested_address_two = "suggested_address_two",

      suggested_address_three = "suggested_address_three",
    }

    enum userLocale {
      address    = "user_address",
      city       = "user_city",

      coo          = "user_coordinate",
      coordinate   = "user_coordinate",
      coordinates  = "user_coordinate",
      lat        = "user_lat",
      lon        = "user_lon",

      country    = "user_country",
      county     = "user_county",
      region     = "user_region",
      state      = "user_region",
      state_long = "user_region_long",
      tz         = "user_tz",
      zip        = "user_zip_code",
      zip_code   = "user_zip_code",
    }

    enum DEFAULTS {
      TEMP_UNIT = "dropdown_item_f",
    }

    this.PROPS = {
      DEFAULTS,

      OPTIONS: {
        TEMP_SELECTION_ITEMS: [
          ["Fahrenheit", "dropdown_item_c", 0],
          ["Celsius", "dropdown_item_c", 1],
        ],
      },

      applicationState,

      CACHE: {
        WX: {
          RAW: "CACHE_WX_RAW",
        },
      },
      WX: {
        WX_API: "WX_API", // object
        WX_API_ENDPOINT: "WX_API_ENDPOINT", // string
        WX_API_PARAMS: "WX_API_PARAMS", // object
        WX_UPDATE_TIME: "WX_UPDATE_TIME",

        WX_TIMEZONE: "WX_TZ",
        WX_TZ: "WX_TZ",

        CWA: "WX_CWA",
      },
      userBio,
      userLocale,
    }

    this.BRAND = {
      AUTHOR: "Christopher David Ramos",
      EMAILS: {
        BUGS: ["sparsewx@paxperscientiam.com", "'SparseWx' <sparsewx@paxperscientiam.com>"],
      },
      NAME: "SparseWx",
      URLS: {
        LICENSE: "https://github.com/paxperscientiam/sparse-wx/blob/license.txt/license.txt",
        NWS: "https://www.weather.gov/",

        PRIVACY: "https://github.com/paxperscientiam/sparse-wx/blob/privacy-policy.md/privacy.md",
      },
      version: " ",
    }

    enum CARDINAL_DIRECTIONS {
      EAST = "east",
      // EAST = "⇛",
      NORTH = "north",
      // NORTH = "⇑",
      NORTH_EAST = "northeast",
      // NORTH_EAST = "⇗",
      NORTH_NE = "north-northeast",
      NORTH_NW = "north-northwest",
      NORTH_WEST = "northwest",
      // NORTH_WEST = "⇖",
      //
            SOUTH = "south",
      // SOUTH = "⇓",
      //      SOUTH_EAST = "southeast",
      // SOUTH_EAST = "⇘",
      South = "southwest",
      SOUTH_WEST = "⇙",

      N = "north",
      NE = "northeast",
      NNE = "north-northeast",
      NNW = "north-northwest",
      NW = "northwest",

      E = "east",
      ENE = "east-northeast",
      ESE = "east-southeast",

      S = "south",
      SE = "southeast",
      SSE = "south-southeast",
      SSW = "South-southwest",
      SW = "southwest",

      W = "west",
      WEST = "west",
      WNW = "west-northwest",
      WSW = "west-southwest",
    }
    this.CARDINAL_DIRECTIONS = CARDINAL_DIRECTIONS

    enum PALETTE {
      AQUA   = "#7FDBFF",
      BLUE   = "#0074D9",
      NAVY   = "#001f3f",
      TEAL   = "#39CCCC",

      GREEN  = "#2ECC40",
      LIME   = "#01FF70",
      OLIVE  = "#3D9970",
      YELLOW = "#FFDC00",

      FUCHSIA = "#F012BE",
      MAROON = "#85144b",
      ORANGE = "#FF851B",
      RED    = "#FF4136",

      BLACK  = "#111111",
      GRAY   = "#AAAAAA",
      PURPLE = "#B10DC9",
      SILVER = "#DDDDDD",

      WHITE  = "#FFFFFF",
    }
    this.PALETTE = PALETTE

    this.UI = {
      COLORS: {
        SCHEME: {
          HIGHLIGHT  : PALETTE.ORANGE,
          PRIMARY    : PALETTE.NAVY,
          SECONDARY  : PALETTE.RED,
          TERTIARY   : PALETTE.SILVER,
          QUATERNARY : PALETTE.BLUE,
        },
      },
      PALETTE,
      PLACEHOLDER_TEXT: {
        CARD_SECTION_HEADER: " ",
        CARD_SUBTITLE: " ",
      },
      // https://clrs.cc/
      WIDGETS: {
        WEATHER_TODAY: {
          COLOR_ONE: "#4a707a",
        },
      },
      WX_SECTION__WIDGET_COUNT: 8,

    }
  }
}
