var __fuse = (function() {
  var f = {};
  var modules = f.modules = f.modules || {}; f.dt = function (x) { return x && x.__esModule ? x : { "default": x }; };

f.modules = modules;
  f.bundle = function(collection, fn) {
    for (var num in collection) {
      modules[num] = collection[num];
    }
    fn ? fn() : void 0;
  };
  f.c = {};
  f.r = function(id) {
    var cached = f.c[id];
    if (cached) return cached.m.exports;
    var module = modules[id];
    if (!module) {
      
      throw new Error('Module ' + id + ' was not found');
    }
    cached = f.c[id] = {};
    cached.exports = {};
    cached.m = { exports: cached.exports };
    module(f.r, cached.exports, cached.m);
    return cached.m.exports;
  }; 
	return f;
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function(factory) {
  var root =
    typeof global === 'object' ? global : typeof self === 'object' ? self : typeof this === 'object' ? this : {};
  if (typeof define === 'function' && define.amd) {
    define('tslib', ['exports'], function(exports) {
      factory(createExporter(root, createExporter(exports)));
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(createExporter(root, createExporter(module.exports)));
  } else {
    factory(createExporter(root));
  }
  function createExporter(exports, previous) {
    if (exports !== root) {
      if (typeof Object.create === 'function') {
        Object.defineProperty(exports, '__esModule', { value: true });
      } else {
        exports.__esModule = true;
      }
    }
    return function(id, v) {
      return (exports[id] = previous ? previous(id, v) : v);
    };
  }
})(function(exporter) {
  var extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(d, b) {
        d.__proto__ = b;
      }) ||
    function(d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

  __extends = function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };

  __assign =
    Object.assign ||
    function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };

  __rest = function(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
  };

  __decorate = function(decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

  __param = function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };

  __metadata = function(metadataKey, metadataValue) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(metadataKey, metadataValue);
  };

  __awaiter = function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };

  __generator = function(thisArg, body) {
    var _ = {
        label: 0,
        ops: [],
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), return: verb(2), throw: verb(1) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = 2 & op[0] ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [2 & op[0], t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { done: false, value: op[1] };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (5 & op[0]) throw op[1];
      return { done: true, value: op[0] ? op[1] : void 0 };
    }
  };

  __exportStar = function(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  };

  __values = function(o) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator],
      i = 0;
    if (m) return m.call(o);
    return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { done: !o, value: o && o[i++] };
      },
    };
  };

  __read = function(o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };

  __spread = function() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
  };

  __spreadArrays = function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
    return r;
  };

  __await = function(v) {
    return this instanceof __await ? ((this.v = v), this) : new __await(v);
  };

  __asyncGenerator = function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
    return (
      (i = {}),
      verb('next'),
      verb('throw'),
      verb('return'),
      (i[Symbol.asyncIterator] = function() {
        return this;
      }),
      i
    );
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume('next', value);
    }
    function reject(value) {
      resume('throw', value);
    }
    function settle(f, v) {
      if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
    }
  };

  __asyncDelegator = function(o) {
    var i, p;
    return (
      (i = {}),
      verb('next'),
      verb('throw', function(e) {
        throw e;
      }),
      verb('return'),
      (i[Symbol.iterator] = function() {
        return this;
      }),
      i
    );
    function verb(n, f) {
      i[n] = o[n]
        ? function(v) {
            return (p = !p) ? { done: n === 'return', value: __await(o[n](v)) } : f ? f(v) : v;
          }
        : f;
    }
  };

  __asyncValues = function(o) {
    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
    var m = o[Symbol.asyncIterator],
      i;
    return m
      ? m.call(o)
      : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
        (i = {}),
        verb('next'),
        verb('throw'),
        verb('return'),
        (i[Symbol.asyncIterator] = function() {
          return this;
        }),
        i);
    function verb(n) {
      i[n] =
        o[n] &&
        function(v) {
          return new Promise(function(resolve, reject) {
            (v = o[n](v)), settle(resolve, reject, v.done, v.value);
          });
        };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v) {
        resolve({ done: d, value: v });
      }, reject);
    }
  };

  __makeTemplateObject = function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };

  __importStar = function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };

  __importDefault = function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

  exporter('__extends', __extends);
  exporter('__assign', __assign);
  exporter('__rest', __rest);
  exporter('__decorate', __decorate);
  exporter('__param', __param);
  exporter('__metadata', __metadata);
  exporter('__awaiter', __awaiter);
  exporter('__generator', __generator);
  exporter('__exportStar', __exportStar);
  exporter('__values', __values);
  exporter('__read', __read);
  exporter('__spread', __spread);
  exporter('__spreadArrays', __spreadArrays);
  exporter('__await', __await);
  exporter('__asyncGenerator', __asyncGenerator);
  exporter('__asyncDelegator', __asyncDelegator);
  exporter('__asyncValues', __asyncValues);
  exporter('__makeTemplateObject', __makeTemplateObject);
  exporter('__importStar', __importStar);
  exporter('__importDefault', __importDefault);
});

__fuse.bundle({

// src/Controllers/BaseCardController.ts @3
3: function(__fusereq, exports, module){
class BaseCardController {
  constructor() {
    this.card = CardService.newCardBuilder();
    this.cardHeader = CardService.newCardHeader();
  }
  bindingContext(source) {
    this.source = source;
    if (!!this.source.name) {
      this.setName();
    }
    if (!!this.source.title) {
      this.setTitle();
    }
    if (!!this.source.subtitle) {
      this.setSubtitle();
    }
  }
  setName() {
    this.card = this.card.setName(this.source.name);
  }
  setTitle() {
    this.cardHeader = this.cardHeader.setTitle(this.source.title);
  }
  setSubtitle() {
    this.cardHeader = this.cardHeader.setSubtitle(this.source.subtitle);
  }
  addSections(sections) {
    sections.forEach(section => {
      if (section != null) {
        this.card.addSection(section);
      }
    });
    return this;
  }
  addSection(section) {
    this.card.addSection(section);
    return this;
  }
  build() {
    return this.card.setHeader(this.cardHeader).build();
  }
}
exports.BaseCardController = BaseCardController;

},

// src/Handlers/Templates.ts @6
6: function(__fusereq, exports, module){
function render(templateFileName, data) {
  const templateBaseDir = "src/Views/";
  const template = HtmlService.createTemplateFromFile(`${templateBaseDir}${templateFileName}`);
  Object.keys(data).forEach(key => {
    if (data[key] == null) {
      data[key] = " ";
    }
  });
  template.data = data;
  return template.evaluate().getContent();
}
exports.render = render;

},

// src/Data/Dictionary.ts @11
11: function(__fusereq, exports, module){
exports.__esModule = true;
var GoogleGeoCodeInterface;
(function (GoogleGeoCodeInterface) {
  GoogleGeoCodeInterface["CITY"] = "locality";
  GoogleGeoCodeInterface["COUNTRY"] = "country";
  GoogleGeoCodeInterface["COUNTY"] = "administrative_area_level_2";
  GoogleGeoCodeInterface["STATE"] = "administrative_area_level_1";
  GoogleGeoCodeInterface["ZIP"] = "postal_code";
  GoogleGeoCodeInterface["ZIP_CODE"] = "postal_code";
  GoogleGeoCodeInterface["LAT"] = "lat";
  GoogleGeoCodeInterface["LON"] = "lng";
})(GoogleGeoCodeInterface || (GoogleGeoCodeInterface = {}))
exports.GoogleGeoCodeInterface = GoogleGeoCodeInterface;
exports.INTERFACE = {
  GoogleGeoCodeInterface,
  NationalWeatherServiceInterface: {
    API: {
      ALERTS: {
        ACTIVE: "alerts/active",
        _: "alerts"
      },
      GRID_POINTS: {
        FORECAST: {
          HOURLY: "@wfo/@xy/forecast/hourly",
          _: "@wfo/@xy/forecast"
        },
        _: "@wfo/@xy"
      },
      POINTS: {
        _: "points"
      },
      _: "https://api.weather.gov/"
    },
    URL: {
      STATE_ALERTS: "https://alerts.weather.gov/cap/"
    }
  }
};
var APPROVED_POLITIES;
(function (APPROVED_POLITIES) {
  APPROVED_POLITIES["UNITED_STATES"] = "United States";
  APPROVED_POLITIES["US"] = "US";
  APPROVED_POLITIES["PR"] = "PR";
  APPROVED_POLITIES["PUERTO_RICO"] = "Puerto Rico";
  APPROVED_POLITIES["GUAM"] = "Guam";
})(APPROVED_POLITIES || (APPROVED_POLITIES = {}))
exports.APPROVED_POLITIES = APPROVED_POLITIES;
exports.HTTP = {
  WX_SERVICE: {
    PARAMS: {
      escaping: false,
      headers: {
        "Accept": "application/geo+json;version=1",
        "From": "chrisdavidramos@gmail.com",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0 SparseWX/2066190da3f83c823e3733b925a033e5"
      },
      muteHttpExceptions: true
    },
    URL: {
      STATE_ALERTS: "https://alerts.weather.gov/cap/"
    }
  }
};
var applicationState;
(function (applicationState) {
  applicationState["mint"] = "applicationState_mint";
  applicationState["wxService"] = "applicationState_wxService";
  applicationState["marker"] = "applicationState_marker";
  applicationState["test_lat"] = "applicationState_test_lat";
  applicationState["test_lon"] = "applicationState_test_lon";
  applicationState["test_coo"] = "applicationState_test_coo";
  applicationState["test_submittedAddress"] = "applicationState_test_submittedAddress";
  applicationState["test_chosenTempUnit"] = "applicationState_test_chosenTempUnit";
  applicationState["test_validAddress"] = "applicationState_test_validAddress";
  applicationState["test_validUsername"] = "applicationState_test_validUsername";
  applicationState["test_WeatherSectionAddress"] = "applicationState_test_WeatherSectionAddress";
  applicationState["test_WeatherWidgetArgs"] = "applicationState_test_WeatherWidgetArgs";
  applicationState["test_WeatherServiceArgs"] = "applicationState_test_WeatherServiceArgs";
  applicationState["test_urlNwsMetadata"] = "applicationState_test_urlNwsMetadata";
  applicationState["test_wxUrl"] = "applicationState_test_wxUrl";
  applicationState["test_WeatherServiceResultTemp"] = "applicationState_test_WeatherServiceResultTemp";
  applicationState["test_weatherWidgetException"] = "applicationState_test_weatherWidgetException";
  applicationState["test_WxWidgetCount"] = "applicationState_test_WxWidgetCount";
  applicationState["test_alertUrl"] = "applicationState_test_alertUrl";
  applicationState["test_metaDataUrl"] = "applicationState_test_metaDataUrl";
  applicationState["test_urlWxServiceCheck"] = "applicationState_test_urlWxServiceCheck";
  applicationState["test_userServiceCheck"] = "applicationState_test_userServiceCheck";
  applicationState["test_wxServiceResultTemp"] = "applicationState_test_wxServiceResultTemp";
  applicationState["test_wxPeriodCount"] = "applicationState_test_wxPeriodCount";
  applicationState["test_wxTimeZone"] = "applicationState_test_wxTimeZone";
  applicationState["test_catchEx"] = "applicationState_test_catchEx";
  applicationState["test_JRHfetch"] = "applicationState_test_JRHfetch";
  applicationState["test_fetchResponse"] = "applicationState_test_fetchResponse";
  applicationState["test_submitNameCallback"] = "applicationState_test_submitNameCallback";
  applicationState["test_shouldProcessForm"] = "applicationState_test_shouldProcessForm";
  applicationState["test_wxSuccessfulFetch"] = "applicationState_test_wxSuccessfulFetch";
  applicationState["test_PrepWx"] = "applicationState_test_PrepWx";
  applicationState["test_StatusCheck"] = "applicationState_test_StatusCheck";
  applicationState["test_wxPN"] = "applicationState_test_wxPN";
})(applicationState || (applicationState = {}))
exports.applicationState = applicationState;
var userBio;
(function (userBio) {
  userBio["name"] = "user_name";
  userBio["temp_unit"] = "user_temp_unit";
  userBio["suggested_address_one"] = "user_address";
  userBio["suggested_address_two"] = "suggested_address_two";
  userBio["suggested_address_three"] = "suggested_address_three";
})(userBio || (userBio = {}))
exports.userBio = userBio;
var userLocale;
(function (userLocale) {
  userLocale["address"] = "user_address";
  userLocale["city"] = "user_city";
  userLocale["coo"] = "user_coordinate";
  userLocale["coordinate"] = "user_coordinate";
  userLocale["coordinates"] = "user_coordinate";
  userLocale["lat"] = "user_lat";
  userLocale["lon"] = "user_lon";
  userLocale["country"] = "user_country";
  userLocale["county"] = "user_county";
  userLocale["region"] = "user_region";
  userLocale["state"] = "user_region";
  userLocale["state_long"] = "user_region_long";
  userLocale["tz"] = "user_tz";
  userLocale["zip"] = "user_zip_code";
  userLocale["zip_code"] = "user_zip_code";
})(userLocale || (userLocale = {}))
exports.userLocale = userLocale;
var DEFAULTS;
(function (DEFAULTS) {
  DEFAULTS["TEMP_UNIT"] = "dropdown_item_f";
})(DEFAULTS || (DEFAULTS = {}))
exports.DEFAULTS = DEFAULTS;
exports.PROPS = {
  DEFAULTS,
  OPTIONS: {
    TEMP_SELECTION_ITEMS: [["Fahrenheit", "dropdown_item_c", 0], ["Celsius", "dropdown_item_c", 1]]
  },
  applicationState,
  CACHE: {
    WX: {
      RAW: "CACHE_WX_RAW"
    }
  },
  WX: {
    WX_API: "WX_API",
    WX_API_ENDPOINT: "WX_API_ENDPOINT",
    WX_API_PARAMS: "WX_API_PARAMS",
    WX_UPDATE_TIME: "WX_UPDATE_TIME",
    WX_TIMEZONE: "WX_TZ",
    WX_TZ: "WX_TZ",
    CWA: "WX_CWA"
  },
  userBio,
  userLocale
};
exports.BRAND = {
  AUTHOR: "Christopher David Ramos",
  EMAILS: {
    BUGS: ["sparsewx@paxperscientiam.com", "'SparseWx' <sparsewx@paxperscientiam.com>"]
  },
  NAME: "SparseWx",
  URLS: {
    LICENSE: "https://github.com/paxperscientiam/sparse-wx/blob/license.txt/license.txt",
    NWS: "https://www.weather.gov/",
    PRIVACY: "https://github.com/paxperscientiam/sparse-wx/blob/privacy-policy.md/privacy.md"
  },
  version: " "
};
var CARDINAL_DIRECTIONS;
(function (CARDINAL_DIRECTIONS) {
  CARDINAL_DIRECTIONS["EAST"] = "east";
  CARDINAL_DIRECTIONS["NORTH"] = "north";
  CARDINAL_DIRECTIONS["NORTH_EAST"] = "northeast";
  CARDINAL_DIRECTIONS["NORTH_NE"] = "north-northeast";
  CARDINAL_DIRECTIONS["NORTH_NW"] = "north-northwest";
  CARDINAL_DIRECTIONS["NORTH_WEST"] = "northwest";
  CARDINAL_DIRECTIONS["SOUTH"] = "south";
  CARDINAL_DIRECTIONS["South"] = "southwest";
  CARDINAL_DIRECTIONS["SOUTH_WEST"] = "⇙";
  CARDINAL_DIRECTIONS["N"] = "north";
  CARDINAL_DIRECTIONS["NE"] = "northeast";
  CARDINAL_DIRECTIONS["NNE"] = "north-northeast";
  CARDINAL_DIRECTIONS["NNW"] = "north-northwest";
  CARDINAL_DIRECTIONS["NW"] = "northwest";
  CARDINAL_DIRECTIONS["E"] = "east";
  CARDINAL_DIRECTIONS["ENE"] = "east-northeast";
  CARDINAL_DIRECTIONS["ESE"] = "east-southeast";
  CARDINAL_DIRECTIONS["S"] = "south";
  CARDINAL_DIRECTIONS["SE"] = "southeast";
  CARDINAL_DIRECTIONS["SSE"] = "south-southeast";
  CARDINAL_DIRECTIONS["SSW"] = "South-southwest";
  CARDINAL_DIRECTIONS["SW"] = "southwest";
  CARDINAL_DIRECTIONS["W"] = "west";
  CARDINAL_DIRECTIONS["WEST"] = "west";
  CARDINAL_DIRECTIONS["WNW"] = "west-northwest";
  CARDINAL_DIRECTIONS["WSW"] = "west-southwest";
})(CARDINAL_DIRECTIONS || (CARDINAL_DIRECTIONS = {}))
exports.CARDINAL_DIRECTIONS = CARDINAL_DIRECTIONS;
var PALETTE;
(function (PALETTE) {
  PALETTE["AQUA"] = "#7FDBFF";
  PALETTE["BLUE"] = "#0074D9";
  PALETTE["NAVY"] = "#001f3f";
  PALETTE["TEAL"] = "#39CCCC";
  PALETTE["GREEN"] = "#2ECC40";
  PALETTE["LIME"] = "#01FF70";
  PALETTE["OLIVE"] = "#3D9970";
  PALETTE["YELLOW"] = "#FFDC00";
  PALETTE["FUCHSIA"] = "#F012BE";
  PALETTE["MAROON"] = "#85144b";
  PALETTE["ORANGE"] = "#FF851B";
  PALETTE["RED"] = "#FF4136";
  PALETTE["BLACK"] = "#111111";
  PALETTE["GRAY"] = "#AAAAAA";
  PALETTE["PURPLE"] = "#B10DC9";
  PALETTE["SILVER"] = "#DDDDDD";
  PALETTE["WHITE"] = "#FFFFFF";
})(PALETTE || (PALETTE = {}))
exports.PALETTE = PALETTE;
exports.UI = {
  COLORS: {
    SCHEME: {
      HIGHLIGHT: PALETTE.ORANGE,
      PRIMARY: PALETTE.NAVY,
      QUATERNARY: PALETTE.BLUE,
      SECONDARY: PALETTE.RED,
      TERTIARY: PALETTE.SILVER
    }
  },
  PALETTE,
  PLACEHOLDER_TEXT: {
    CARD_SECTION_HEADER: " ",
    CARD_SUBTITLE: " "
  },
  WIDGETS: {
    WEATHER_TODAY: {
      COLOR_ONE: "#4a707a"
    }
  },
  WX_SECTION__WIDGET_COUNT: 8
};

},

// node_modules/object-path/index.js @9
9: function(__fusereq, exports, module){
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.objectPath = factory();
  }
})(this, function () {
  'use strict';
  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if (obj == null) {
      return false;
    }
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  function isEmpty(value) {
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
      return true;
    } else if (typeof value !== 'string') {
      for (var i in value) {
        if (hasOwnProperty(value, i)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  function toString(type) {
    return toStr.call(type);
  }
  function isObject(obj) {
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }
  var isArray = Array.isArray || (function (obj) {
    return toStr.call(obj) === '[object Array]';
  });
  function isBoolean(obj) {
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }
  function getKey(key) {
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }
  function factory(options) {
    options = options || ({});
    var objectPath = function (obj) {
      return Object.keys(objectPath).reduce(function (proxy, prop) {
        if (prop === 'create') {
          return proxy;
        }
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }
        return proxy;
      }, {});
    };
    function hasShallowProperty(obj, prop) {
      return options.includeInheritedProps || typeof prop === 'number' && Array.isArray(obj) || hasOwnProperty(obj, prop);
    }
    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }
    function set(obj, path, value, doNotReplace) {
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }
      if (currentValue === void 0) {
        if (typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }
      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }
    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }
      if (!path || path.length === 0) {
        return !!obj;
      }
      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);
        if (typeof j === 'number' && isArray(obj) && j < obj.length || (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }
      return true;
    };
    objectPath.ensureExists = function (obj, path, value) {
      return set(obj, path, value, true);
    };
    objectPath.set = function (obj, path, value, doNotReplace) {
      return set(obj, path, value, doNotReplace);
    };
    objectPath.insert = function (obj, path, value, at) {
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };
    objectPath.empty = function (obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }
      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }
      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };
    objectPath.push = function (obj, path) {
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };
    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;
      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }
      return defaultValue;
    };
    objectPath.get = function (obj, path, defaultValue) {
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }
      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath);
      if (nextObj === void 0) {
        return defaultValue;
      }
      if (path.length === 1) {
        return nextObj;
      }
      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };
    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }
      if (obj == null) {
        return obj;
      }
      if (isEmpty(path)) {
        return obj;
      }
      if (typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }
      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }
      if (path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }
      return obj;
    };
    return objectPath;
  }
  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({
    includeInheritedProps: true
  });
  return mod;
});

},

// node_modules/dset/dist/dset.es.js @10
10: function(__fusereq, exports, module){
exports.__esModule = true;
function __DefaultExport__(obj, keys, val) {
  keys.split && (keys = keys.split('.'));
  var i = 0, l = keys.length, t = obj, x;
  for (; i < l; ++i) {
    x = t[keys[i]];
    t = t[keys[i]] = i === l - 1 ? val : x != null ? x : !!~keys[i + 1].indexOf('.') || !(+keys[i + 1] > -1) ? {} : [];
  }
}
exports.default = __DefaultExport__;

},

// src/Data/PushPull.ts @8
8: function(__fusereq, exports, module){
exports.__esModule = true;
var object_path_1 = __fusereq(9);
var object_path_1d = __fuse.dt(object_path_1);
var dset_1 = __fusereq(10);
var dset_1d = __fuse.dt(dset_1);
function push(referencePropComplex, value) {
  const reference = referencePropComplex[0];
  const property = referencePropComplex[1];
  let obj = JSON.parse(globalThis.userProperties.getProperty(reference));
  if (obj == null) {
    obj = {};
  }
  if (!!property) {
    dset_1d.default(obj, property, value);
  } else {
    obj = value;
  }
  globalThis.userProperties.setProperty(reference, JSON.stringify(obj));
}
exports.push = push;
function fetch(reference, property) {
  let obj = JSON.parse(globalThis.userProperties.getProperty(reference));
  if (obj == null) {
    obj = {};
    globalThis.userProperties.setProperty(reference, "{}");
    return null;
  }
  if (property == null) {
    return obj;
  }
  return object_path_1d.default.withInheritedProps.get(obj, property);
}
exports.fetch = fetch;

},

// src/Cards/Aux.ts @7
7: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
class CardFactory {
  constructor(data) {
    this.card = CardService.newCardBuilder();
    this.cardHeader = CardService.newCardHeader();
    if (data.name) {
      this.card.setName(data.name);
    }
    if (data.title) {
      this.cardHeader.setTitle(data.title);
    }
    if (data.subtitle) {
      this.cardHeader.setSubtitle(data.subtitle);
    }
    if (data.image) {
      this.cardHeader.setImageUrl(data.image);
    }
    this.card.setHeader(this.cardHeader);
  }
  addSections(sections) {
    sections.forEach(section => {
      if (section != null) {
        this.card.addSection(section);
      }
    });
    return this;
  }
  addSection(section) {
    this.card.addSection(section);
    return this;
  }
  addCardAction() {
    return this;
  }
  build() {
    return this.card.build();
  }
  setName(name) {
    this.card.setName(name);
    return this;
  }
  setHeader(cardHeader) {
    this.card.setHeader(cardHeader);
    return this;
  }
}
exports.CardFactory = CardFactory;
class CardSectionFactory {
  constructor(args) {
    this.data = {};
    this.section = CardService.newCardSection();
    this.data = {
      header: " ",
      ...args
    };
    if (typeof this.data.header === "string") {
      this.section.setHeader(this.data.header);
      PushPull_1.push(["state", "display.transient.card.section.header"], this.data.header);
    }
  }
  addWidget(widget) {
    this.section.addWidget(widget);
    return this;
  }
  addWidgets(widgets) {
    widgets.forEach(widget => {
      this.section.addWidget(widget);
    });
    return this;
  }
  setCollapsible(value) {
    this.section.setCollapsible(value);
    return this;
  }
  build() {
    return this.section;
  }
}
exports.CardSectionFactory = CardSectionFactory;
class WidgetFactory {
  newTextInput(data) {
    const widget = CardService.newTextInput().setFieldName(data.fieldName).setTitle(data.title).setHint(data.hint);
    if (data.suggestions) {
      widget.setSuggestionsAction(data.suggestions);
    }
    return widget;
  }
  newSelectionInput(data) {
    const widget = CardService.newSelectionInput().setFieldName(data.fieldName).setTitle(data.title);
    if (data.type === "DROPDOWN") {
      widget.setType(CardService.SelectionInputType.DROPDOWN);
    }
    const items = data.items;
    items.forEach(item => {
      let isSelected = false;
      if (PushPull_1.fetch("user", "temp_unit") === item.value) {
        isSelected = true;
      }
      widget.addItem(item.text, item.value, isSelected);
    });
    return widget;
  }
  newTextParagraph(data) {
    return CardService.newTextParagraph().setText(data.text);
  }
  newTextButton(data) {
    const widget = CardService.newTextButton().setText(data.text);
    if (data.action) {
      widget.setOnClickAction(data.action);
    }
    return widget;
  }
  newKeyValue(data) {
    const widget = CardService.newKeyValue().setContent(data.content);
    if (data.iconUrl) {
      widget.setIconUrl(data.iconUrl);
    }
    if (data.multiline) {
      widget.setMultiline(data.multiline);
    }
    return widget;
  }
  _TextInput(data) {
    return this.newTextInput(data);
  }
  _SelectionInput(data) {
    return this.newSelectionInput(data);
  }
  _Paragraph(data) {
    return this.newTextParagraph(data);
  }
  _TextButton(data) {
    return this.newTextButton(data);
  }
  _KeyValue(data) {
    return this.newKeyValue(data);
  }
}
exports.WidgetFactory = WidgetFactory;
class View {}
View.route = "";
View.data = {};
exports.View = View;

},

// src/Cards/Main/Sections/Disclaimer.ts @5
5: function(__fusereq, exports, module){
exports.__esModule = true;
var Templates_1 = __fusereq(6);
var Aux_1 = __fusereq(7);
const widgetFactory = new Aux_1.WidgetFactory();
var Dictionary_1 = __fusereq(11);
function DisclaimerSection(args = {}) {
  const data = {
    header: "Acknowledgments"
  };
  const cardSection = new Aux_1.CardSectionFactory(data).addWidget(widgetFactory._Paragraph({
    text: Templates_1.render("userNotices", {
      license: Dictionary_1.BRAND.URLS.LICENSE,
      nws: Dictionary_1.BRAND.URLS.NWS,
      privacy: Dictionary_1.BRAND.URLS.PRIVACY
    })
  }));
  cardSection.addWidget(CardService.newImage().setAltText("A nice image").setImageUrl("https://raw.githubusercontent.com/paxperscientiam/sparse-wx/us-flag/Img/Flag_of_the_United_States-50dpi.png"));
  return cardSection.setCollapsible(true).build();
}
exports.DisclaimerSection = DisclaimerSection;

},

// src/Controllers/MainCardController.ts @4
4: function(__fusereq, exports, module){
exports.__esModule = true;
var Disclaimer_1 = __fusereq(5);
var BaseCardController_1 = __fusereq(3);
class MainCardController extends BaseCardController_1.BaseCardController {
  constructor() {
    super();
    this.route = "localityInfo";
    this.card.addSection(Disclaimer_1.DisclaimerSection());
    this.card.setFixedFooter(CardService.newFixedFooter().setPrimaryButton(CardService.newTextButton().setText("help").setOpenLink(CardService.newOpenLink().setUrl("http://www.google.com"))));
  }
}
exports.MainCardController = MainCardController;

},

// src/Cards/User/Sections/UserReturnHome.ts @18
18: function(__fusereq, exports, module){
function UserReturnHomeSection() {
  const COLORS = UI.PALETTE;
  const goToMainCardAction = CardService.newAction().setFunctionName("goToHomeCardCallback");
  return CardService.newCardSection().addWidget(CardService.newTextButton().setText('<font color="${COLORS.ORANGE}">HOME</font>').setOnClickAction(goToMainCardAction));
}
exports.UserReturnHomeSection = UserReturnHomeSection;

},

// src/Cards/User/Sections/UserInput.ts @17
17: function(__fusereq, exports, module){
exports.__esModule = true;
var Aux_1 = __fusereq(7);
function UserInputSection() {
  const cardSection = new Aux_1.CardSectionFactory();
  const widgetFactory = new Aux_1.WidgetFactory();
  cardSection.addWidget(widgetFactory._TextInput({
    fieldName: "user_name_key",
    hint: "How should SparseWx address you? (25 character max)",
    title: "Your Name (optional)"
  }));
  return cardSection.setCollapsible(false).build();
}
exports.UserInputSection = UserInputSection;

},

// src/Controllers/ViewsController.ts @15
15: function(__fusereq, exports, module){
class View {
  static render(route, data) {
    const templateBaseDir = "src/Views/";
    const template = HtmlService.createTemplateFromFile(`${templateBaseDir}${route}`);
    Object.keys(data).forEach(key => {
      if (data[key] == null) {
        data[key] = " ";
      }
    });
    template.data = data;
    return template.evaluate().getContent();
  }
}
exports.View = View;

},

// src/Models/UserModel.ts @16
16: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
class UserModel {
  constructor() {
    this.namespace = "user";
  }
  set name(name) {
    PushPull_1.push([this.namespace, "name"], name);
  }
  get name() {
    return PushPull_1.fetch(this.namespace, "name");
  }
  set address(address) {
    PushPull_1.push([this.namespace, "address"], address);
  }
  get address() {
    return PushPull_1.fetch(this.namespace, "address");
  }
  set zipcode(zip) {
    PushPull_1.push([this.namespace, "zipcode"], zip);
  }
  get zipcode() {
    return PushPull_1.fetch(this.namespace, "zipcode");
  }
  set country(country) {
    PushPull_1.push([this.namespace, "country"], country);
  }
  get country() {
    return PushPull_1.fetch(this.namespace, "country");
  }
  set isMint(bool) {
    PushPull_1.push([this.namespace, "newuser"], bool);
  }
  get isMint() {
    return PushPull_1.fetch(this.namespace, "newuser");
  }
  set temperatureUnit(unit) {
    PushPull_1.push([this.namespace, "temperatureunit"], unit);
  }
  get temperatureUnit() {
    return PushPull_1.fetch(this.namespace, "temperatureunit");
  }
}
exports.UserModel = UserModel;

},

// src/Cards/User/Sections/UserInfo.ts @14
14: function(__fusereq, exports, module){
exports.__esModule = true;
var ViewsController_1 = __fusereq(15);
var Aux_1 = __fusereq(7);
var UserModel_1 = __fusereq(16);
function UserInfoSection() {
  const model = new UserModel_1.UserModel();
  const useraddress = model.address;
  const username = model.name;
  Logger.log(`username: ${username == ""}`);
  Logger.log(`username: ${username == null}`);
  Logger.log(`address: ${useraddress == ""}`);
  Logger.log(`address: ${useraddress == null}`);
  const textContent = ViewsController_1.View.render("userInfo", {
    useraddress,
    username
  });
  const widgetFactory = new Aux_1.WidgetFactory();
  return new Aux_1.CardSectionFactory().addWidget(widgetFactory._Paragraph({
    text: textContent
  })).build();
}
exports.UserInfoSection = UserInfoSection;

},

// src/Cards/User/Sections.ts @13
13: function(__fusereq, exports, module){
exports.__esModule = true;
var UserInfo_1 = __fusereq(14);
var UserInput_1 = __fusereq(17);
var UserReturnHome_1 = __fusereq(18);
exports.UserInfoSection = UserInfo_1.UserInfoSection;
exports.UserInputSection = UserInput_1.UserInputSection;
exports.UserReturnHomeSection = UserReturnHome_1.UserReturnHomeSection;

},

// src/Models/BaseCardModel.ts @34
34: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
class BaseCardModel {
  set name(name) {
    PushPull_1.push([this.namespace, "card.name"], name);
  }
  get name() {
    return PushPull_1.fetch(this.namespace, "card.name");
  }
  set title(title) {
    PushPull_1.push([this.namespace, "header.title"], title);
  }
  get title() {
    return PushPull_1.fetch(this.namespace, "header.title");
  }
  set subtitle(subtitle) {
    PushPull_1.push([this.namespace, "header.subtitle"], subtitle);
  }
  get subtitle() {
    return PushPull_1.fetch(this.namespace, "header.subtitle");
  }
}
exports.BaseCardModel = BaseCardModel;

},

// src/Models/GenericModel.ts @35
35: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
class GenericModel {
  set data(args) {
    PushPull_1.push([this.namespace, args[0]], args[1]);
  }
  get data() {
    return PushPull_1.fetch(this.namespace);
  }
}
exports.GenericModel = GenericModel;

},

// src/Utilities/Date.ts @23
23: function(__fusereq, exports, module){
function formatDateService(date, format = "E, d MMM y") {
  return Utilities.formatDate(new Date(date), getUserTimeZone(), format);
}
exports.formatDateService = formatDateService;
function formatTimeService(date) {
  return Utilities.formatDate(new Date(date), getUserTimeZone(), "h:mm a");
}
exports.formatTimeService = formatTimeService;
class DateArray {
  constructor() {
    const timeZone = getUserTimeZone();
    const date = new Date();
    this.HOUR = Number(Utilities.formatDate(date, timeZone, "H"));
    this.WEEKDAY = Utilities.formatDate(date, timeZone, "EEEE");
    this.WEEK_DAY = this.WEEKDAY;
    this.MONTH = Utilities.formatDate(date, timeZone, "MMMM");
    this.TIME = Utilities.formatDate(date, timeZone, "h:mm a");
    if (this.HOUR >= 0 && this.HOUR < 12) {
      this.GREETING = "Good morning";
    } else if (this.HOUR >= 12 && this.HOUR < 18) {
      this.GREETING = "Good afternoon";
    } else {
      this.GREETING = "Good evening";
    }
  }
}
exports.DateArray = DateArray;
function timeConversion(millisec) {
  const seconds = Math.round(millisec / 1000);
  const minutes = Math.round(millisec / (1000 * 60));
  const hours = Math.round(millisec / (1000 * 60 * 60));
  const days = Math.round(millisec / (1000 * 60 * 60 * 24));
  if (seconds < 60) {
    return seconds + " Seconds";
  } else if (minutes < 60) {
    return minutes + " Minutes";
  } else if (hours < 24) {
    return hours + " Hours";
  } else {
    return days + " Days";
  }
}
exports.timeConversion = timeConversion;
function formatAge(date) {
  const msgDate = new Date(date).getTime();
  const todayDate = Date.now();
  const age = timeConversion(todayDate - msgDate);
  return age;
}
exports.formatAge = formatAge;
function getUserTimeZone() {
  return CalendarApp.getDefaultCalendar().getTimeZone();
}
exports.getUserTimeZone = getUserTimeZone;
function convertC2F(temperature) {
  return (temperature * (9 / 5) + 32).toFixed(0);
}
exports.convertC2F = convertC2F;
function convertF2C(temperature) {
  return ((temperature - 32) * 5 / 9).toFixed(0);
}
exports.convertF2C = convertF2C;
function timeStamp() {
  return new Date().toTimeString().slice(0, 8);
}
exports.timeStamp = timeStamp;

},

// src/Models/MainCardModel.ts @36
36: function(__fusereq, exports, module){
exports.__esModule = true;
var BaseCardModel_1 = __fusereq(34);
var Date_1 = __fusereq(23);
const da = new Date_1.DateArray();
class MainCardModel extends BaseCardModel_1.BaseCardModel {
  constructor() {
    super();
    this.namespace = "MainCardState";
    this.name = "maincard";
    this.title = `${da.GREETING}!`;
    this.subtitle = `Today is ${da.WEEKDAY}`;
  }
}
exports.MainCardModel = MainCardModel;

},

// src/Models/UserCardModel.ts @37
37: function(__fusereq, exports, module){
exports.__esModule = true;
var Models_1 = __fusereq(33);
class UserCardModel extends Models_1.BaseCardModel {
  constructor() {
    super();
    this.namespace = "UserCardState";
    this.name = "usercard";
    this.title = "Settings";
    this.subtitle = " ";
  }
}
exports.UserCardModel = UserCardModel;

},

// src/Models.ts @33
33: function(__fusereq, exports, module){
exports.__esModule = true;
var BaseCardModel_1 = __fusereq(34);
var GenericModel_1 = __fusereq(35);
var MainCardModel_1 = __fusereq(36);
var UserCardModel_1 = __fusereq(37);
var UserModel_1 = __fusereq(16);
exports.BaseCardModel = BaseCardModel_1.BaseCardModel;
exports.GenericModel = GenericModel_1.GenericModel;
exports.MainCardModel = MainCardModel_1.MainCardModel;
exports.UserModel = UserModel_1.UserModel;
exports.UserCardModel = UserCardModel_1.UserCardModel;

},

// src/Models/ApplicationModel.ts @38
38: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
class ApplicationModel {
  constructor() {
    this.namespace = "ApplicationState";
    PushPull_1.push([this.namespace, "application.input.temperatureUnit.options"], "dropdown_item_f, dropdown_item_c");
  }
  set address(address) {
    PushPull_1.push([this.namespace, "application.input.user_address_key"], address);
  }
  get address() {
    return PushPull_1.fetch(this.namespace, "application.input.user_address_key");
  }
  set isMint(bool) {
    PushPull_1.push([this.namespace, "application.mint"], bool);
  }
  get isMint() {
    return PushPull_1.fetch(this.namespace, "application.mint");
  }
  set isUserNameValid(bool) {
    PushPull_1.push([this.namespace, "application.valid.username"], bool);
  }
  get isUserNameValid() {
    return PushPull_1.fetch(this.namespace, "application.valid.username");
  }
  set isAddressValid(bool) {
    PushPull_1.push([this.namespace, "application.valid.address"], bool);
  }
  get isAddressValid() {
    return PushPull_1.fetch(this.namespace, "application.valid.address");
  }
}
exports.ApplicationModel = ApplicationModel;

},

// src/Services/Location.ts @22
22: function(__fusereq, exports, module){
exports.__esModule = true;
var Date_1 = __fusereq(23);
var Dictionary_1 = __fusereq(11);
var PushPull_1 = __fusereq(8);
function checkLocationServiceStatus() {
  const result = Maps.newGeocoder().geocode("10011");
  Logger.log(`[${Date_1.timeStamp()}][locationServiceStatus] ${result.status}`);
  PushPull_1.push(["state", "status.location"], result.status);
  return result.status;
}
exports.checkLocationServiceStatus = checkLocationServiceStatus;
function processGeocoderResultsService(polity, geometry) {
  const GeoInterface = Dictionary_1.GoogleGeoCodeInterface;
  const lon = geometry.location.lng.toFixed(4);
  const lat = geometry.location.lat.toFixed(4);
  const coordinate = lat + "," + lon;
  const localeKeys = Object.keys(Dictionary_1.PROPS.userLocale);
  localeKeys.forEach(key => {
    PushPull_1.push(["user", key], null);
  });
  PushPull_1.push(["polity"], polity);
  polity.forEach(pol => {
    if (pol.types.indexOf(GeoInterface.CITY) > -1) {
      PushPull_1.push(["user", "city"], pol.short_name);
    }
    if (pol.types.indexOf(GeoInterface.STATE) > -1) {
      PushPull_1.push(["user", "state"], pol.short_name);
      PushPull_1.push(["user", "state_long"], pol.long_name);
    }
    if (pol.types.indexOf(GeoInterface.COUNTY) > -1) {
      PushPull_1.push(["user", "county"], pol.short_name);
    }
    if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
      PushPull_1.push(["user", "country"], pol.long_name);
    }
    if (pol.types.indexOf(GeoInterface.ZIP_CODE) > -1) {
      PushPull_1.push(["user", "zip_code"], pol.long_name);
    }
  });
  PushPull_1.push(["user", "lat"], lat);
  PushPull_1.push(["user", "lon"], lon);
  PushPull_1.push(["user", "coordinate"], coordinate);
  Logger.log(`[${Date_1.timeStamp()}][lon] ${lon}`);
  Logger.log(`[${Date_1.timeStamp()}][lat] ${lat}`);
  Logger.log(`[${Date_1.timeStamp()}][coordinate] ${coordinate}`);
}
exports.processGeocoderResultsService = processGeocoderResultsService;

},

// src/Handlers/JsonResponse.ts @27
27: function(__fusereq, exports, module){
function JsonResponseHandler(url, query = {}, params = {
  muteHttpExceptions: true
}) {
  const data = {
    "@context": ["JsonResponseHandler"],
    params,
    query,
    url
  };
  const objJsonHandlerMethods = {
    fetch() {
      const response = UrlFetchApp.fetch(data.url, data.params);
      const json = response.getContentText();
      const responseData = JSON.parse(json);
      return {
        "@context": ["JsonResponseHandler", {
          method: "fetch"
        }],
        "data": responseData,
        "status": [true, "Things are OK."]
      };
    }
  };
  const obj = Object.create(objJsonHandlerMethods);
  obj.data = data;
  return obj;
}
exports.JsonResponseHandler = JsonResponseHandler;

},

// src/Handlers/nwsUrlHandlers.ts @28
28: function(__fusereq, exports, module){
exports.__esModule = true;
exports.NWSUrlService = {
  uri: {
    base: "https://api.weather.gov/",
    alerts: {
      active: "alerts/active"
    }
  },
  getMetaLink(coordinates) {
    return `${this.uri.base}points/${coordinates}`;
  }
};

},

// src/Handlers/Aux.ts @25
25: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
function _Cache(fn, fnArgs, cacheName, cacheTime = 1500) {
  const objCacheMethodsBuilder = Object.create({
    data: {}
  });
  const cache = CacheService.getUserCache();
  objCacheMethodsBuilder.data.cache = cache;
  const cached = objCacheMethodsBuilder.data.cache.get(cacheName);
  objCacheMethodsBuilder.data.cached = cached;
  let result;
  let message;
  let hits = PushPull_1.fetch("state", "cache.hits");
  if (!!cached) {
    result = cached;
    message = "Cache found";
    ++hits;
    PushPull_1.push(["state", "cache.hits"], hits);
  } else {
    if (fnArgs != null) {
      result = fn(...fnArgs);
    } else {
      result = fn();
    }
    cache.put(cacheName, result, cacheTime);
    message = "Not found. Cached.";
  }
  PushPull_1.push(["state", `cache.${cacheName}`], message);
  objCacheMethodsBuilder.data = {
    "@context": ["cacheHandler"],
    cache,
    cacheName,
    cached,
    message,
    result
  };
  objCacheMethodsBuilder.invalidate = () => {
    if (cached != null) {
      objCacheMethodsBuilder.data.cachedName = null;
      return true;
    }
    return false;
  };
  objCacheMethodsBuilder.getResult = () => {
    return {
      "@context": ["cacheHandler", {
        method: "getResult"
      }],
      "cacheData": objCacheMethodsBuilder.data.result,
      "cacheName": objCacheMethodsBuilder.data.cachedName,
      "cacheStatus": [true, objCacheMethodsBuilder.data.message]
    };
  };
  return objCacheMethodsBuilder;
}
exports._Cache = _Cache;

},

// node_modules/@paxperscientiam/dlv.ts/dist/dlv.es.js @26
26: function(__fusereq, exports, module){
exports.__esModule = true;
function __DefaultExport__(t, n, e, l = 0) {
  const o = n.split ? n.split(".") : n;
  for (; t && l < o.length; ) t = t[o[l++]];
  return void 0 === t || l < o.length ? e : t;
}
exports.default = __DefaultExport__;

},

// src/Services/Weather.ts @24
24: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
var Dictionary_1 = __fusereq(11);
var Aux_1 = __fusereq(25);
var dlv_ts_1 = __fusereq(26);
var dlv_ts_1d = __fuse.dt(dlv_ts_1);
var JsonResponse_1 = __fusereq(27);
var nwsUrlHandlers_1 = __fusereq(28);
var Date_1 = __fusereq(23);
function nwsMetaLocationData() {
  const lat = Number(PushPull_1.fetch("user", "lat")).toFixed(4);
  const lon = Number(PushPull_1.fetch("user", "lon")).toFixed(4);
  const coord = `${lat},${lon}`;
  Logger.log(`[${Date_1.timeStamp()}][coord] ${coord}`);
  const urlForMeta = nwsUrlHandlers_1.NWSUrlService.getMetaLink(coord);
  Logger.log(`[${Date_1.timeStamp()}][urlForMeta] ${urlForMeta}`);
  const params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
  const preWxRaw = JsonResponse_1.JsonResponseHandler(urlForMeta, {}, params);
  const wxRaw = Aux_1._Cache(preWxRaw.fetch.bind(preWxRaw), [""], "wxRaw", 0);
  return wxRaw.getResult();
}
function getWeatherServiceDataService() {
  const obj = Object.create({});
  const wxResponse = nwsMetaLocationData();
  obj.status = [];
  if (wxResponse.cacheData != null) {
    PushPull_1.push(["state", "cache.wx.meta"], "not found");
    obj.status.push([true, "metadata result found in cache"]);
  } else {
    PushPull_1.push(["state", "cache.wx.meta"], "found");
    obj.status.push([false, "metadata not found in cache!"]);
    return obj;
  }
  if (dlv_ts_1d.default(wxResponse, "cacheData.data.properties") == null) {
    PushPull_1.push(["state", "cache.wx.meta.properties"], "meta");
    Logger.log("wxResponse does not contain wx properties");
    obj.status.push([false, "wxUrl fail"]);
    return obj;
  }
  const timeZone = dlv_ts_1d.default(wxResponse, ".data.properties.timeZone");
  PushPull_1.push(["wx", "timeZone"], timeZone);
  const wxUrl = dlv_ts_1d.default(wxResponse, "cacheData.data.properties.forecast");
  if (wxUrl != null) {
    PushPull_1.push(["state", "service.wx.meta.forecastUrl"], wxUrl);
    obj.status.push([true, `wxUrl: ${wxUrl}`]);
  } else {
    PushPull_1.push(["state", "service.wx.meta.forecastUrl"], undefined);
    obj.status.push([false, "wxUrl is undefined!"]);
    return obj;
  }
  const params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
  const preWxRaw = JsonResponse_1.JsonResponseHandler(wxUrl, {}, params);
  const fetchResponse = Aux_1._Cache(preWxRaw.fetch.bind(preWxRaw), [""], "wxRawForecast", 0).getResult();
  if (fetchResponse.cacheStatus != null) {
    PushPull_1.push(["state", "cache.wx"], "cached");
    Logger.log(`wx dump response found in cache`);
    obj.status.push([true, `wx dump response found in cache`]);
  } else {
    PushPull_1.push(["state", "cache.wx"], "not cached");
    Logger.log("wx dump NOT found in cache!");
    obj.status.push([false, "wx dump NOT found in cache!"]);
    return obj;
  }
  obj.wx = dlv_ts_1d.default(fetchResponse, "cacheData.data");
  if (dlv_ts_1d.default(obj, "wx.properties") == null) {
    obj.status.push([false, "mo wx data from site!"]);
    return obj;
  }
  obj.updateTime = dlv_ts_1d.default(obj.wx, "properties.updateTime");
  PushPull_1.push(["wx", "updateTime"], obj.updateTime);
  obj.elevation = dlv_ts_1d.default(obj.wx, "properties.elevation");
  PushPull_1.push(["wx", "elevation"], obj.elevation);
  const wxPeriodCounts = dlv_ts_1d.default(obj.wx, "properties.periods");
  if (!!wxPeriodCounts) {
    obj.wxPeriodCount = wxPeriodCounts.length;
  }
  obj.getPeriod = period => {
    const periodic = obj.wx.properties.periods[period];
    PushPull_1.push(["state", "display.wx.data.period"], period);
    const response = {
      condition: periodic.shortForecast.toLowerCase(),
      status: [true, "wx is good"],
      iconUrl: periodic.icon,
      isDaytime: periodic.isDaytime,
      name: periodic.name,
      temp: periodic.temperature,
      unit: periodic.temperatureUnit,
      windDirection: periodic.windDirection,
      windSpeed: periodic.windSpeed,
      cwa: obj.wx.properties.cwa,
      cwaUrl: "https://www.weather.gov/",
      updateTime: obj.wx.properties.updateTime
    };
    return response;
  };
  return obj;
}
exports.getWeatherServiceDataService = getWeatherServiceDataService;
function checkWeatherServiceStatus() {
  const urlWxServiceCheck = nwsUrlHandlers_1.NWSUrlService.uri.base;
  const params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
  let result;
  try {
    result = JsonResponse_1.JsonResponseHandler(urlWxServiceCheck, {}, params).fetch();
  } catch (e) {
    PushPull_1.push(["state", "status.wx"], "ERR");
    Logger.log(`checkWeatherServiceStatus: ${e}`);
    return "ERR";
  }
  Logger.log(`[${Date_1.timeStamp()}][wxServiceStatus] ${result.data.status}`);
  const status = dlv_ts_1d.default(result, "data.status");
  PushPull_1.push(["state", "status.wx"], status);
  return status;
}
exports.checkWeatherServiceStatus = checkWeatherServiceStatus;
function getForecastStalenessService() {
  const lastUpdateTime = PushPull_1.fetch("wx", "updateTime");
  let diff;
  if (!!lastUpdateTime) {
    diff = Date.now() - new Date(lastUpdateTime).getTime();
    diff = Date_1.timeConversion(diff);
    PushPull_1.push(["wx", "forecastAge"], diff);
    return [true, diff];
  }
  return [false, "unknown"];
}
exports.getForecastStalenessService = getForecastStalenessService;
function getAlertsByStateService() {
  const params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
  const userstate = PushPull_1.fetch("user", "state");
  const urlWxAlerts = `https://api.weather.gov/alerts/active/count`;
  let response;
  let count;
  if (!!userstate) {
    response = JsonResponse_1.JsonResponseHandler(urlWxAlerts, {}, params).fetch().data;
    count = response.areas[userstate];
    if (count != null) {
      count = count.toFixed(0);
      PushPull_1.push(["state", "service.wx.alerts"], true);
      return [true, count];
    }
    PushPull_1.push(["state", "service.wx.alerts"], false);
    return [false, "0 alerts"];
  }
  PushPull_1.push(["state", "service.wx.alerts"], "ERR");
  return [false, "ERR"];
}
exports.getAlertsByStateService = getAlertsByStateService;

},

// src/Services/HighlightHolidayService.ts @31
31: function(__fusereq, exports, module){
function isHoldayService(dayName) {
  const days = [/Tonight/i, /Sunday/i, /Monday/i, /Tuesday/i, /Wednesday/i, /Thursday/i, /Friday/i, /Saturday/i];
  return true !== days.some(rx => rx.test(dayName));
}
exports.isHoldayService = isHoldayService;

},

// src/Services/ComputeApparentTemperatureService.ts @29
29: function(__fusereq, exports, module){
exports.__esModule = true;
var PushPull_1 = __fusereq(8);
function apparentTemperatureService(args) {
  let temperature;
  let windspeed;
  let tempUnit;
  tempUnit = PushPull_1.fetch("user", "temp_unit");
  if (!args.temperature || !args.windspeed) {
    return null;
  }
  temperature = Number(args.temperature);
  windspeed = Number(args.windspeed);
  if (tempUnit === "dropdown_item_f") {
    if (temperature <= 50 && windspeed > 3) {
      const windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
      return parseInt(windchill.toString(), 10).toFixed(0);
    }
    return null;
  }
  if (tempUnit === "dropdown_item_c") {
    if (temperature <= 10 && windspeed > 4.8) {
      windspeed *= 1.61;
      const windchill = 13.12 + 0.6125 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * Math.pow(windspeed, 0.16);
      return parseInt(windchill.toString(), 10).toFixed(0);
    }
    return null;
  }
  return null;
}
exports.apparentTemperatureService = apparentTemperatureService;

},

// src/Services/IsColdService.ts @30
30: function(__fusereq, exports, module){
exports.__esModule = true;
var Date_1 = __fusereq(23);
var PushPull_1 = __fusereq(8);
var Dictionary_1 = __fusereq(11);
function textColorTemperatureService(temperature) {
  let temp = "";
  if (PushPull_1.fetch("user", "temp_unit") === "dropdown_item_c") {
    temp = Date_1.convertF2C(temperature);
  }
  if (temperature < 32) {
    Logger.log(`Blue for ${temperature}`);
    return Dictionary_1.PALETTE.BLUE;
  }
  if (temperature > 75) {
    Logger.log(`Maroon for ${temperature}`);
    return Dictionary_1.PALETTE.MAROON;
  }
  if (temperature > 100) {
    Logger.log(`Orange for ${temperature}`);
    return Dictionary_1.PALETTE.ORANGE;
  }
  return "BLACK";
}
exports.textColorTemperatureService = textColorTemperatureService;

},

// src/Services/User.ts @32
32: function(__fusereq, exports, module){
exports.__esModule = true;
var Date_1 = __fusereq(23);
var PushPull_1 = __fusereq(8);
function checkUserServiceStatus() {
  const lat = PushPull_1.fetch("user", "lat");
  if (!lat) {
    Logger.log(`[${Date_1.timeStamp()}][status.user] ERR as no coordinates`);
    PushPull_1.push(["state", "status.user"], "ERR");
    return "ERR";
  }
  Logger.log(`[${Date_1.timeStamp()}][status.user] OK`);
  PushPull_1.push(["state", "status.user"], "OK");
  return "OK";
}
exports.checkUserServiceStatus = checkUserServiceStatus;

},

// src/Services.ts @21
21: function(__fusereq, exports, module){
exports.__esModule = true;
Object.assign(exports, __fusereq(22));
Object.assign(exports, __fusereq(24));
Object.assign(exports, __fusereq(29));
Object.assign(exports, __fusereq(30));
Object.assign(exports, __fusereq(31));
Object.assign(exports, __fusereq(22));
Object.assign(exports, __fusereq(32));
Object.assign(exports, __fusereq(24));

},

// src/Utilities/Validate.ts @20
20: function(__fusereq, exports, module){
exports.__esModule = true;
var Services_1 = __fusereq(21);
var Dictionary_1 = __fusereq(11);
var UserModel_1 = __fusereq(16);
function validateUserName(input = "") {
  if (input == "") {
    return [true];
  }
  if ((/^.{1,26}$/i).test(input)) {
    return [true, {
      message: "Nice name."
    }];
  }
  return [false, {
    message: "!!! Your name cannot be longer than 26 characters."
  }];
}
exports.validateUserName = validateUserName;
function validateZIP(input) {
  return (/^[0-9]{5}(?:-[0-9]{4})?$/).test(input);
}
exports.validateZIP = validateZIP;
function validateMailingAddress(address) {
  const userModel = new UserModel_1.UserModel();
  if (address == null) {
    return [false, "No valid address."];
  }
  const GeoInterface = Dictionary_1.INTERFACE.GoogleGeoCodeInterface;
  const response = Maps.newGeocoder().setRegion("us").geocode(address);
  if (response.status === "ZERO_RESULTS") {
    return [false, "ZERO_RESULTS"];
  }
  const result = response.results[0];
  const polity = result.address_components;
  const approvedPolities = Object.keys(Dictionary_1.APPROVED_POLITIES);
  polity.forEach(pol => {
    if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
      userModel.country = pol.long_name;
    }
  });
  const strPolity = userModel.country;
  const isApprovedPolity = strPolity === "United States";
  if (!isApprovedPolity) {
    globalThis.userProperties.deleteProperty(Dictionary_1.PROPS.userLocale.country);
    return [false, "UNSUPPORTED_REGION"];
  }
  Logger.log(`The polity ${strPolity} is approved: ${isApprovedPolity}`);
  Services_1.processGeocoderResultsService(polity, result.geometry);
  return [true];
}
exports.validateMailingAddress = validateMailingAddress;

},

// src/Handlers/Callbacks.ts @19
19: function(__fusereq, exports, module){
exports.__esModule = true;
var Validate_1 = __fusereq(20);
var Dictionary_1 = __fusereq(11);
var Models_1 = __fusereq(33);
var Controllers_1 = __fusereq(2);
var Aux_1 = __fusereq(7);
var Models_2 = __fusereq(33);
var ApplicationModel_1 = __fusereq(38);
function submitNameCallback(e) {
  const userModel = new Models_2.UserModel();
  const applicationModel = new ApplicationModel_1.ApplicationModel();
  const name = e.formInput.user_name_key;
  const isUserNameValid = Validate_1.validateUserName(name);
  if (isUserNameValid[0]) {
    applicationModel.isUserNameValid = true;
    applicationModel.isMint = false;
    userModel.name = name;
    return true;
  } else {
    applicationModel.isUserNameValid = false;
    throw new Error("bad name");
  }
}
globalThis.submitAddressCallback = e => {
  const applicationModel = new ApplicationModel_1.ApplicationModel();
  const userModel = new Models_2.UserModel();
  const address = e.formInput.user_address_key;
  applicationModel.address = address;
  const storedAddress = userModel.address;
  if (!address && !storedAddress) {
    throw new Error("First time? You'll need to set an address");
  } else if (!address) {
    return false;
  }
  Logger.log(`Submitted address is ${address}`);
  const isValid = Validate_1.validateMailingAddress(address);
  if (isValid[0]) {
    applicationModel.isAddressValid = true;
    applicationModel.isMint = false;
    return true;
  } else {
    const response = "Sorry, try a different address.";
    if (isValid[1] === "ZERO_RESULTS") {
      applicationModel.address = "ZERO_RESULTS";
      throw new Error("Sorry, that address wasn't found. Try something else.");
    }
    if (isValid[1] === "UNSUPPORTED_REGION") {
      applicationModel.address = "UNSUPPORTED_REGION";
      throw new Error(`Sorry, ${Dictionary_1.BRAND.NAME} only supports results for the USA.`);
    }
    applicationModel.address = "ERR";
    throw new Error(response);
  }
};
globalThis.submitTemperatureUnitCallback = e => {
  const userModel = new Models_2.UserModel();
  const chosenTempUnit = e.formInputs.temperature_unit_list[0];
  const currentTempUnit = e.temp_unit;
  if (currentTempUnit === chosenTempUnit) {
    return false;
  }
  if (!chosenTempUnit || chosenTempUnit === "") {
    return false;
  }
  userModel.temperatureUnit = chosenTempUnit;
  return true;
};
globalThis.getAddressSuggestionsCallback = () => {
  Logger.log("Address suggestions callback ... called");
  const suggestions = CardService.newSuggestions();
  const arrSuggestionsTemp = [user.suggested_address_one, user.suggested_address_two, user.suggested_address_three];
  suggestions.addSuggestion("one").addSuggestion("two").addSuggestion("three");
  return CardService.newSuggestionsResponseBuilder().setSuggestions(suggestions).build();
};
globalThis.processUserPreferencesFormCallback = e => {
  Logger.log("processUserPreferencesFormCallback ... ");
  const model = new Models_1.MainCardModel();
  const mainCard = new Controllers_1.MainCardController();
  mainCard.bindingContext(model);
  let shouldProcess = false;
  let notification = "";
  try {
    const isNameChanged = submitNameCallback(e);
    shouldProcess = shouldProcess || isNameChanged;
    if (isNameChanged) {
      notification = "Name set. ";
    }
  } catch (event) {
    return CardService.newActionResponseBuilder().setNotification(CardService.newNotification().setType(CardService.NotificationType.ERROR).setText(event.message)).setStateChanged(false).build();
  }
  try {
    const isAddressChanged = globalThis.submitAddressCallback(e);
    shouldProcess = shouldProcess || isAddressChanged;
    if (isAddressChanged) {
      notification += "Address set.";
    }
  } catch (event) {
    return CardService.newActionResponseBuilder().setNotification(CardService.newNotification().setType(CardService.NotificationType.ERROR).setText(event.message)).setStateChanged(false).build();
  }
  try {
    const isTempUnitChanged = globalThis.submitTemperatureUnitCallback(e);
    shouldProcess = shouldProcess || isTempUnitChanged;
    if (isTempUnitChanged) {
      notification += " Unit changed.";
    }
  } catch (event) {
    return CardService.newActionResponseBuilder().setNotification(CardService.newNotification().setType(CardService.NotificationType.ERROR).setText(event.message)).setStateChanged(false).build();
  }
  if (shouldProcess) {
    return CardService.newActionResponseBuilder().setNavigation(CardService.newNavigation().pushCard(mainCard.build())).setNotification(CardService.newNotification().setType(CardService.NotificationType.INFO).setText(notification)).setStateChanged(true).build();
  }
  return CardService.newActionResponseBuilder().setNotification(CardService.newNotification().setType(CardService.NotificationType.INFO).setText(`Nothing changed`)).setStateChanged(false).build();
};
function UserSection() {
  const applicatioModel = new ApplicationModel_1.ApplicationModel();
  const userModel = new Models_2.UserModel();
  const isMint = applicatioModel.isMint;
  const userzip = userModel.zipcode;
  const submitAddressSuggestionsAction = CardService.newAction().setFunctionName("getAddressSuggestionsCallback").setParameters({});
  const processUserFormAction = CardService.newAction().setFunctionName("processUserPreferencesFormCallback").setParameters({});
  let setAddressTitle = "Forecast Location";
  if (userzip) {
    setAddressTitle += ` (${userzip})`;
  }
  const cardSection = new Aux_1.CardSectionFactory();
  const widgetFactory = new Aux_1.WidgetFactory();
  cardSection.addWidget(widgetFactory._TextInput({
    fieldName: "user_name_key",
    hint: "How should SparseWx address you? (25 character max)",
    title: "Your Name (optional)"
  })).addWidget(widgetFactory._TextInput({
    fieldName: "user_address_key",
    hint: "City, state or ZIP code",
    title: setAddressTitle,
    suggestions: submitAddressSuggestionsAction
  })).addWidget(widgetFactory._SelectionInput({
    fieldName: "temperature_unit_list",
    items: [{
      text: "Fahrenheit",
      value: "dropdown_item_f",
      selected: true
    }, {
      text: "Celsius",
      value: "dropdown_item_c",
      selected: false
    }],
    title: "Temperature Scale",
    type: "DROPDOWN"
  })).addWidget(widgetFactory._TextButton({
    action: processUserFormAction,
    text: "Submit"
  }));
  return cardSection.setCollapsible(false).build();
}
exports.UserSection = UserSection;

},

// src/Controllers/UserCardController.ts @12
12: function(__fusereq, exports, module){
exports.__esModule = true;
var Controllers_1 = __fusereq(2);
var Disclaimer_1 = __fusereq(5);
var Sections_1 = __fusereq(13);
var Callbacks_1 = __fusereq(19);
class UserCardController extends Controllers_1.BaseCardController {
  constructor() {
    super();
    this.card.addSection(Sections_1.UserInfoSection());
    this.card.addSection(Callbacks_1.UserSection());
    this.card.addSection(Disclaimer_1.DisclaimerSection());
  }
}
exports.UserCardController = UserCardController;

},

// src/Controllers.ts @2
2: function(__fusereq, exports, module){
exports.__esModule = true;
var BaseCardController_1 = __fusereq(3);
var MainCardController_1 = __fusereq(4);
var UserCardController_1 = __fusereq(12);
exports.BaseCardController = BaseCardController_1.BaseCardController;
exports.MainCardController = MainCardController_1.MainCardController;
exports.UserCardController = UserCardController_1.UserCardController;

},

// src/index.ts @1
1: function(__fusereq, exports, module){
exports.__esModule = true;
var Controllers_1 = __fusereq(2);
var Models_1 = __fusereq(33);
const userProperties = PropertiesService.getUserProperties();
globalThis.userProperties = userProperties;
globalThis.buildAddOn = () => {
  const model = new Models_1.MainCardModel();
  const mainCard = new Controllers_1.MainCardController();
  mainCard.bindingContext(model);
  return mainCard.build();
};
globalThis.buildHomePage = () => {
  var cardSection = CardService.newCardSection().addWidget(CardService.newKeyValue().setIconUrl("https://icon.png").setContent("KeyValue widget with an image on the left and text on the right"));
  var card = CardService.newCardBuilder().setName("Card name").setHeader(CardService.newCardHeader().setTitle("Homepage")).addSection(cardSection).build();
  return card;
};

}
}, function(){
__fuse.r(1)
})
//# sourceMappingURL=app.js.map