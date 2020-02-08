(function(){
var $fsx = (function() {
  function syntheticDefaultExportPolyfill(input) {
    if (input == null || ['function', 'object', 'array'].indexOf(typeof input) === -1) {
      return;
    }
    // use hasOwnProperty to avoid triggering usage warnings from libraries like mobx
    var hasDefaultProperty = Object.prototype.hasOwnProperty.call(input, 'default');
    var hasModuleProperty = Object.prototype.hasOwnProperty.call(input, '__esModule');
    // to get around frozen input
    if (Object.isFrozen(input)) {
      if (!hasDefaultProperty) {
        input['default'] = input;
      }
      if (!hasModuleProperty) {
        input['__esModule'] = true;
      }
      return;
    }
    // free to define properties
    if (!hasDefaultProperty) {
      Object.defineProperty(input, 'default', { value: input, writable: true, enumerable: false });
    }
    if (!hasModuleProperty) {
      Object.defineProperty(input, '__esModule', { value: true });
    }
  }
  var $fsx = {};
  $fsx.f = {};
  $fsx.m = {};
  $fsx.r = function(id) {
    var cached = $fsx.m[id];
    // resolve if in cache
    if (cached) {
      return cached.m.exports;
    }
    var file = $fsx.f[id];
    if (!file) {
      return;
    }
    cached = $fsx.m[id] = {};
    cached.exports = {};
    cached.m = { exports: cached.exports };
    file.call(cached.exports, cached.m, cached.exports);
    syntheticDefaultExportPolyfill(cached.m.exports);
    return cached.m.exports;
  };
  return $fsx;
})();
// default/src/index.js
$fsx.f[8] = function(module, exports){
"use strict";
exports.__esModule = true;
// import {} from "@Cards/
// globalThis polyfill thanks to some genius on the net!
(function () {
    if (typeof Application === "object") {
        return;
    }
    Object.defineProperty(Object.prototype, "__magic__", {
        configurable: true,
        get: function () {
            return this;
        }
    });
    // @ts-ignore
    __magic__.Application = __magic__;
    // @ts-ignore
    delete Object.prototype.__magic__;
})();
var MainCardController_1 = $fsx.r(3);
var MainCardModel_1 = $fsx.r(7);
var userProperties = PropertiesService.getUserProperties();
Application.userProperties = userProperties;
Application.buildAddOn = function () {
    var model = new MainCardModel_1.MainCardModel();
    var mainCard = new MainCardController_1.MainCardController();
    model.title = "Title of the main card!";
    model.name = "Main card";
    model.subtitle = "maincard subtitle";
    //
    mainCard.bindingContext(model);
    //
    return mainCard.build();
};
//# sourceMappingURL=index.js.map
}
// default/src/Cards/MainCardController.js
$fsx.f[3] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(1);
var CardController_1 = $fsx.r(2);
var MainCardController = /** @class */ (function (_super) {
    tslib_1.__extends(MainCardController, _super);
    function MainCardController() {
        var _this = _super.call(this) || this;
        _this.route = "localityInfo";
        return _this;
    }
    return MainCardController;
}(CardController_1.BaseCardController));
exports.MainCardController = MainCardController;
// export const MainCard = new MainCardController()
// export function MainCard(): CardBuilder {
//   const date = new DateArray()
//   const userName = "Valerie"
//   const greeting = (() => {
//     if (!!userName) {
//       return `${date.GREETING}, ${userName}!`
//     } else {
//       return `${date.GREETING}!`
//     }
//   })()
//   const data = {
//     image: "",
//     name: "mainCard",
//     subtitle: `Today is ${date.WEEKDAY}.`,
//     title: greeting,
//   }
//   return new CardFactory(data).addSections([
//     DisclaimerSection(),
//   ])
// }
//# sourceMappingURL=MainCardController.js.map
}
// tslib/tslib.es6.js
$fsx.f[1] = function(module, exports){
"use strict";
exports.__esModule = true;
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
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
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
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
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result["default"] = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
exports.__importDefault = __importDefault;

}
// default/src/Cards/CardController.js
$fsx.f[2] = function(module, exports){
"use strict";
exports.__esModule = true;
var BaseCardController = /** @class */ (function () {
    function BaseCardController() {
        this.card = CardService.newCardBuilder();
        this.cardHeader = CardService.newCardHeader();
    }
    BaseCardController.prototype.bindingContext = function (source) {
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
    };
    BaseCardController.prototype.setName = function () {
        this.card = this.card.setName(this.source.name);
        return this;
    };
    BaseCardController.prototype.setTitle = function () {
        this.cardHeader = this.cardHeader.setTitle(this.source.title);
        return this;
    };
    BaseCardController.prototype.setSubtitle = function () {
        this.cardHeader = this.cardHeader.setSubtitle(this.source.subtitle);
    };
    BaseCardController.prototype.build = function () {
        return this.card.setHeader(this.cardHeader).build();
    };
    return BaseCardController;
}());
exports.BaseCardController = BaseCardController;
//# sourceMappingURL=CardController.js.map
}
// default/src/Models/MainCardModel.js
$fsx.f[7] = function(module, exports){
"use strict";
exports.__esModule = true;
var PushPull_1 = $fsx.r(6);
var MainCardModel = /** @class */ (function () {
    function MainCardModel() {
    }
    Object.defineProperty(MainCardModel.prototype, "name", {
        get: function () {
            return PushPull_1.fetch("MainCardState", "card.name");
        },
        set: function (name) {
            PushPull_1.push(["MainCardState", "card.name"], name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainCardModel.prototype, "title", {
        get: function () {
            return PushPull_1.fetch("MainCardState", "header.title");
        },
        set: function (title) {
            PushPull_1.push(["MainCardState", "header.title"], title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainCardModel.prototype, "subtitle", {
        get: function () {
            return PushPull_1.fetch("MainCardState", "header.subtitle");
        },
        set: function (subtitle) {
            PushPull_1.push(["MainCardState", "header.subtitle"], subtitle);
        },
        enumerable: true,
        configurable: true
    });
    return MainCardModel;
}());
exports.MainCardModel = MainCardModel;
//# sourceMappingURL=MainCardModel.js.map
}
// default/src/Data/PushPull.js
$fsx.f[6] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(1);
var object_path_1 = tslib_1.__importDefault($fsx.r(4));
// @ts-ignore
var dset_1 = tslib_1.__importDefault($fsx.r(5));
function push(referencePropComplex, value) {
    var reference = referencePropComplex[0];
    var property = referencePropComplex[1];
    // @ts-ignore
    var obj = JSON.parse(Application.userProperties.getProperty(reference));
    if (obj == null) {
        obj = {};
    }
    if (!!property) {
        dset_1["default"](obj, property, value);
    }
    else {
        obj = value;
    }
    Application.userProperties.setProperty(reference, JSON.stringify(obj));
}
exports.push = push;
function fetch(reference, property) {
    // @ts-ignore
    var obj = JSON.parse(Application.userProperties.getProperty(reference));
    if (obj == null) {
        obj = {};
        Application.userProperties.setProperty(reference, "{}");
        return null;
    }
    if (property == null) {
        return obj;
    }
    return object_path_1["default"].withInheritedProps.get(obj, property);
}
exports.fetch = fetch;
//# sourceMappingURL=PushPull.js.map
}
// object-path/index.js
$fsx.f[4] = function(module, exports){
"use strict";
(function (root, factory) {
    'use strict';
    /*istanbul ignore next:cant test*/
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    }
    else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    }
    else {
        // Browser globals
        root.objectPath = factory();
    }
})(this, function () {
    'use strict';
    var toStr = Object.prototype.toString;
    function hasOwnProperty(obj, prop) {
        if (obj == null) {
            return false;
        }
        //to handle objects with null prototypes (too edge case?)
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    function isEmpty(value) {
        if (!value) {
            return true;
        }
        if (isArray(value) && value.length === 0) {
            return true;
        }
        else if (typeof value !== 'string') {
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
    var isArray = Array.isArray || function (obj) {
        /*istanbul ignore next:cant test*/
        return toStr.call(obj) === '[object Array]';
    };
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
        options = options || {};
        var objectPath = function (obj) {
            return Object.keys(objectPath).reduce(function (proxy, prop) {
                if (prop === 'create') {
                    return proxy;
                }
                /*istanbul ignore else*/
                if (typeof objectPath[prop] === 'function') {
                    proxy[prop] = objectPath[prop].bind(objectPath, obj);
                }
                return proxy;
            }, {});
        };
        function hasShallowProperty(obj, prop) {
            return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop));
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
                //check if we assume an array
                if (typeof path[1] === 'number') {
                    obj[currentPath] = [];
                }
                else {
                    obj[currentPath] = {};
                }
            }
            return set(obj[currentPath], path.slice(1), value, doNotReplace);
        }
        objectPath.has = function (obj, path) {
            if (typeof path === 'number') {
                path = [path];
            }
            else if (typeof path === 'string') {
                path = path.split('.');
            }
            if (!path || path.length === 0) {
                return !!obj;
            }
            for (var i = 0; i < path.length; i++) {
                var j = getKey(path[i]);
                if ((typeof j === 'number' && isArray(obj) && j < obj.length) ||
                    (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
                    obj = obj[j];
                }
                else {
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
            }
            else if (isBoolean(value)) {
                return objectPath.set(obj, path, false);
            }
            else if (typeof value === 'number') {
                return objectPath.set(obj, path, 0);
            }
            else if (isArray(value)) {
                value.length = 0;
            }
            else if (isObject(value)) {
                for (i in value) {
                    if (hasShallowProperty(value, i)) {
                        delete value[i];
                    }
                }
            }
            else {
                return objectPath.set(obj, path, null);
            }
        };
        objectPath.push = function (obj, path /*, values */) {
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
                }
                else {
                    delete obj[currentPath];
                }
            }
            else {
                return objectPath.del(obj[currentPath], path.slice(1));
            }
            return obj;
        };
        return objectPath;
    }
    var mod = factory();
    mod.create = factory;
    mod.withInheritedProps = factory({ includeInheritedProps: true });
    return mod;
});

}
// dset/dist/dset.es.js
$fsx.f[5] = function(module, exports){
"use strict";
exports.__esModule = true;
function default_1(obj, keys, val) {
    keys.split && (keys = keys.split('.'));
    var i = 0, l = keys.length, t = obj, x;
    for (; i < l; ++i) {
        x = t[keys[i]];
        t = t[keys[i]] = (i === l - 1 ? val : (x != null ? x : (!!~keys[i + 1].indexOf('.') || !(+keys[i + 1] > -1)) ? {} : []));
    }
}
exports["default"] = default_1;

}
// Importing a single entry
$fsx.r(8);
})()
//# sourceMappingURL=app.js.map