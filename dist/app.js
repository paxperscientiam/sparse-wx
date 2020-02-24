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
$fsx.f[39] = function(module, exports){
"use strict";
exports.__esModule = true;
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
var Controllers_1 = $fsx.r(11);
var Models_1 = $fsx.r(34);
var userProperties = PropertiesService.getUserProperties();
Application.userProperties = userProperties;
Application.buildAddOn = function () {
    var model = new Models_1.MainCardModel();
    var mainCard = new Controllers_1.MainCardController();
    //
    mainCard.bindingContext(model);
    //
    return mainCard.build();
    // const userCardModel = new UserCardModel()
    // const userCard = new UserCardController()
    // userCard.bindingContext(userCardModel)
    // return userCard.build()
};
Application.buildHomePage = function () {
    var cardSection = CardService.newCardSection()
        .addWidget(CardService.newKeyValue()
        .setIconUrl("https://icon.png")
        .setContent("KeyValue widget with an image on the left and text on the right"));
    // Finish building the card section ...
    var card = CardService.newCardBuilder()
        .setName("Card name")
        .setHeader(CardService.newCardHeader().setTitle("Homepage"))
        .addSection(cardSection)
        .build();
    return card;
};
//# sourceMappingURL=index.js.map
}
// default/src/Controllers.js
$fsx.f[11] = function(module, exports){
"use strict";
exports.__esModule = true;
var BaseCardController_1 = $fsx.r(1);
exports.BaseCardController = BaseCardController_1.BaseCardController;
var MainCardController_1 = $fsx.r(10);
exports.MainCardController = MainCardController_1.MainCardController;
var UserCardController_1 = $fsx.r(38);
exports.UserCardController = UserCardController_1.UserCardController;
//# sourceMappingURL=Controllers.js.map
}
// default/src/Controllers/BaseCardController.js
$fsx.f[1] = function(module, exports){
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
    };
    BaseCardController.prototype.setTitle = function () {
        this.cardHeader = this.cardHeader.setTitle(this.source.title);
    };
    BaseCardController.prototype.setSubtitle = function () {
        this.cardHeader = this.cardHeader.setSubtitle(this.source.subtitle);
    };
    BaseCardController.prototype.addSections = function (sections) {
        var _this = this;
        sections.forEach(function (section) {
            if (section != null) {
                _this.card.addSection(section);
            }
        });
        return this;
    };
    BaseCardController.prototype.addSection = function (section) {
        this.card.addSection(section);
        return this;
    };
    BaseCardController.prototype.build = function () {
        return this.card.setHeader(this.cardHeader).build();
    };
    return BaseCardController;
}());
exports.BaseCardController = BaseCardController;
//# sourceMappingURL=BaseCardController.js.map
}
// default/src/Controllers/MainCardController.js
$fsx.f[10] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
var Disclaimer_1 = $fsx.r(9);
var BaseCardController_1 = $fsx.r(1);
var MainCardController = /** @class */ (function (_super) {
    tslib_1.__extends(MainCardController, _super);
    function MainCardController() {
        var _this = _super.call(this) || this;
        _this.route = "localityInfo";
        _this.card.addSection(Disclaimer_1.DisclaimerSection());
        _this.card.setFixedFooter(CardService
            .newFixedFooter()
            .setPrimaryButton(CardService
            .newTextButton()
            .setText("help")
            .setOpenLink(CardService.newOpenLink().setUrl("http://www.google.com"))));
        return _this;
    }
    return MainCardController;
}(BaseCardController_1.BaseCardController));
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
$fsx.f[2] = function(module, exports){
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
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
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
        return m.call(o);
    if (o && typeof o.length === "number")
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}
exports.__classPrivateFieldGet = __classPrivateFieldGet;
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}
exports.__classPrivateFieldSet = __classPrivateFieldSet;

}
// default/src/Cards/Main/Sections/Disclaimer.js
$fsx.f[9] = function(module, exports){
"use strict";
exports.__esModule = true;
var Templates_1 = $fsx.r(3);
var Aux_1 = $fsx.r(7);
var widgetFactory = new Aux_1.WidgetFactory();
var Dictionary_1 = $fsx.r(8);
//
function DisclaimerSection(args) {
    if (args === void 0) { args = {}; }
    var data = {
        header: "Acknowledgments"
    };
    var cardSection = new Aux_1.CardSectionFactory(data)
        .addWidget(widgetFactory._Paragraph({
        text: Templates_1.render("userNotices", {
            license: Dictionary_1.BRAND.URLS.LICENSE,
            nws: Dictionary_1.BRAND.URLS.NWS,
            privacy: Dictionary_1.BRAND.URLS.PRIVACY
        })
    }));
    // @ts-ignore
    cardSection.addWidget(CardService.newImage().setAltText("A nice image").setImageUrl("https://raw.githubusercontent.com/paxperscientiam/sparse-wx/us-flag/Img/Flag_of_the_United_States-50dpi.png"));
    return cardSection
        .setCollapsible(true)
        .build();
}
exports.DisclaimerSection = DisclaimerSection;
//# sourceMappingURL=Disclaimer.js.map
}
// default/src/Handlers/Templates.js
$fsx.f[3] = function(module, exports){
"use strict";
exports.__esModule = true;
function render(templateFileName, data) {
    var templateBaseDir = "src/Views/";
    var template = HtmlService.createTemplateFromFile("" + templateBaseDir + templateFileName);
    // make sure not to pass undefined, null, or empty string to template engine
    Object.keys(data).forEach(function (key) {
        if (data[key] == null) {
            data[key] = " ";
        }
    });
    // @ts-ignore
    template.data = data;
    return template.evaluate().getContent();
}
exports.render = render;
//# sourceMappingURL=Templates.js.map
}
// default/src/Cards/Aux.js
$fsx.f[7] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
var PushPull_1 = $fsx.r(6);
// model
var CardFactory = /** @class */ (function () {
    function CardFactory(data) {
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
    CardFactory.prototype.addSections = function (sections) {
        var _this = this;
        sections.forEach(function (section) {
            if (section != null) {
                _this.card.addSection(section);
            }
        });
        return this;
    };
    CardFactory.prototype.addSection = function (section) {
        this.card.addSection(section);
        return this;
    };
    CardFactory.prototype.addCardAction = function () {
        return this;
    };
    CardFactory.prototype.build = function () {
        return this.card.build();
    };
    CardFactory.prototype.setName = function (name) {
        this.card.setName(name);
        return this;
    };
    CardFactory.prototype.setHeader = function (cardHeader) {
        this.card.setHeader(cardHeader);
        return this;
    };
    return CardFactory;
}());
exports.CardFactory = CardFactory;
var CardSectionFactory = /** @class */ (function () {
    function CardSectionFactory(args) {
        this.data = {};
        this.section = CardService.newCardSection();
        this.data = tslib_1.__assign({ header: " " }, args);
        if (typeof this.data.header === "string") {
            this.section.setHeader(this.data.header);
            PushPull_1.push(["state", "display.transient.card.section.header"], this.data.header);
        }
    }
    CardSectionFactory.prototype.addWidget = function (widget) {
        this.section.addWidget(widget);
        return this;
    };
    CardSectionFactory.prototype.addWidgets = function (widgets) {
        var _this = this;
        widgets.forEach(function (widget) {
            _this.section.addWidget(widget);
        });
        return this;
    };
    CardSectionFactory.prototype.setCollapsible = function (value) {
        this.section.setCollapsible(value);
        return this;
    };
    CardSectionFactory.prototype.build = function () {
        return this.section;
    };
    return CardSectionFactory;
}());
exports.CardSectionFactory = CardSectionFactory;
var WidgetFactory = /** @class */ (function () {
    function WidgetFactory() {
    }
    WidgetFactory.prototype.newTextInput = function (data) {
        var widget = CardService.newTextInput()
            .setFieldName(data.fieldName)
            .setTitle(data.title)
            .setHint(data.hint);
        if (data.suggestions) {
            widget.setSuggestionsAction(data.suggestions);
        }
        return widget;
    };
    WidgetFactory.prototype.newSelectionInput = function (data) {
        var widget = CardService.newSelectionInput()
            .setFieldName(data.fieldName)
            .setTitle(data.title);
        // @ts-ignore
        if (data.type === "DROPDOWN") {
            widget
                .setType(CardService.SelectionInputType.DROPDOWN);
        }
        var items = data.items;
        items.forEach(function (item) {
            var isSelected = false;
            if (PushPull_1.fetch("user", "temp_unit") === item.value) {
                isSelected = true;
            }
            widget.addItem(item.text, item.value, isSelected);
        });
        return widget;
    };
    WidgetFactory.prototype.newTextParagraph = function (data) {
        return CardService.newTextParagraph()
            .setText(data.text);
    };
    WidgetFactory.prototype.newTextButton = function (data) {
        var widget = CardService.newTextButton()
            .setText(data.text);
        if (data.action) {
            widget.setOnClickAction(data.action);
        }
        return widget;
    };
    WidgetFactory.prototype.newKeyValue = function (data) {
        var widget = CardService.newKeyValue()
            .setContent(data.content);
        if (data.iconUrl) {
            widget.setIconUrl(data.iconUrl);
        }
        //     if (data.icon) {
        //       widget.setIcon(data.icon)
        //     }
        if (data.multiline) {
            widget.setMultiline(data.multiline);
        }
        return widget;
    };
    WidgetFactory.prototype._TextInput = function (data) {
        return this.newTextInput(data);
    };
    WidgetFactory.prototype._SelectionInput = function (data) {
        return this.newSelectionInput(data);
    };
    WidgetFactory.prototype._Paragraph = function (data) {
        return this.newTextParagraph(data);
    };
    WidgetFactory.prototype._TextButton = function (data) {
        return this.newTextButton(data);
    };
    WidgetFactory.prototype._KeyValue = function (data) {
        return this.newKeyValue(data);
    };
    return WidgetFactory;
}());
exports.WidgetFactory = WidgetFactory;
// @ts-ignore
var View = /** @class */ (function () {
    function View() {
    }
    View.route = "";
    View.data = {};
    return View;
}());
exports.View = View;
//# sourceMappingURL=Aux.js.map
}
// default/src/Data/PushPull.js
$fsx.f[6] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
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
// default/src/Data/Dictionary.js
$fsx.f[8] = function(module, exports){
"use strict";
exports.__esModule = true;
var GoogleGeoCodeInterface;
(function (GoogleGeoCodeInterface) {
    // values are those used by Google
    GoogleGeoCodeInterface["CITY"] = "locality";
    GoogleGeoCodeInterface["COUNTRY"] = "country";
    GoogleGeoCodeInterface["COUNTY"] = "administrative_area_level_2";
    GoogleGeoCodeInterface["STATE"] = "administrative_area_level_1";
    GoogleGeoCodeInterface["ZIP"] = "postal_code";
    GoogleGeoCodeInterface["ZIP_CODE"] = "postal_code";
    GoogleGeoCodeInterface["LAT"] = "lat";
    GoogleGeoCodeInterface["LON"] = "lng";
})(GoogleGeoCodeInterface = exports.GoogleGeoCodeInterface || (exports.GoogleGeoCodeInterface = {}));
exports.INTERFACE = {
    GoogleGeoCodeInterface: GoogleGeoCodeInterface,
    NationalWeatherServiceInterface: {
        // NWS values
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
})(APPROVED_POLITIES = exports.APPROVED_POLITIES || (exports.APPROVED_POLITIES = {}));
exports.HTTP = {
    WX_SERVICE: {
        PARAMS: {
            escaping: false,
            headers: {
                "Accept": "application/geo+json;version=1",
                "From": "chrisdavidramos@gmail.com",
                // tslint:disable-next-line:max-line-length
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
})(applicationState = exports.applicationState || (exports.applicationState = {}));
var userBio;
(function (userBio) {
    userBio["name"] = "user_name";
    userBio["temp_unit"] = "user_temp_unit";
    userBio["suggested_address_one"] = "user_address";
    userBio["suggested_address_two"] = "suggested_address_two";
    userBio["suggested_address_three"] = "suggested_address_three";
})(userBio = exports.userBio || (exports.userBio = {}));
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
})(userLocale = exports.userLocale || (exports.userLocale = {}));
var DEFAULTS;
(function (DEFAULTS) {
    DEFAULTS["TEMP_UNIT"] = "dropdown_item_f";
})(DEFAULTS = exports.DEFAULTS || (exports.DEFAULTS = {}));
exports.PROPS = {
    DEFAULTS: DEFAULTS,
    OPTIONS: {
        TEMP_SELECTION_ITEMS: [
            ["Fahrenheit", "dropdown_item_c", 0],
            ["Celsius", "dropdown_item_c", 1],
        ]
    },
    applicationState: applicationState,
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
    userBio: userBio,
    userLocale: userLocale
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
    // EAST = "⇛",
    CARDINAL_DIRECTIONS["NORTH"] = "north";
    // NORTH = "⇑",
    CARDINAL_DIRECTIONS["NORTH_EAST"] = "northeast";
    // NORTH_EAST = "⇗",
    CARDINAL_DIRECTIONS["NORTH_NE"] = "north-northeast";
    CARDINAL_DIRECTIONS["NORTH_NW"] = "north-northwest";
    CARDINAL_DIRECTIONS["NORTH_WEST"] = "northwest";
    // NORTH_WEST = "⇖",
    //
    CARDINAL_DIRECTIONS["SOUTH"] = "south";
    // SOUTH = "⇓",
    //      SOUTH_EAST = "southeast",
    // SOUTH_EAST = "⇘",
    CARDINAL_DIRECTIONS["South"] = "southwest";
    CARDINAL_DIRECTIONS["SOUTH_WEST"] = "\u21D9";
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
})(CARDINAL_DIRECTIONS = exports.CARDINAL_DIRECTIONS || (exports.CARDINAL_DIRECTIONS = {}));
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
})(PALETTE = exports.PALETTE || (exports.PALETTE = {}));
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
    PALETTE: PALETTE,
    PLACEHOLDER_TEXT: {
        CARD_SECTION_HEADER: " ",
        CARD_SUBTITLE: " "
    },
    // https://clrs.cc/
    WIDGETS: {
        WEATHER_TODAY: {
            COLOR_ONE: "#4a707a"
        }
    },
    WX_SECTION__WIDGET_COUNT: 8
};
//# sourceMappingURL=Dictionary.js.map
}
// default/src/Controllers/UserCardController.js
$fsx.f[38] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
var Controllers_1 = $fsx.r(11);
var Disclaimer_1 = $fsx.r(9);
var Sections_1 = $fsx.r(17);
var Callbacks_1 = $fsx.r(37);
var UserCardController = /** @class */ (function (_super) {
    tslib_1.__extends(UserCardController, _super);
    function UserCardController() {
        var _this = _super.call(this) || this;
        _this.card.addSection(Sections_1.UserInfoSection());
        _this.card.addSection(Callbacks_1.UserSection());
        _this.card.addSection(Disclaimer_1.DisclaimerSection());
        return _this;
    }
    return UserCardController;
}(Controllers_1.BaseCardController));
exports.UserCardController = UserCardController;
//# sourceMappingURL=UserCardController.js.map
}
// default/src/Cards/User/Sections.js
$fsx.f[17] = function(module, exports){
"use strict";
exports.__esModule = true;
var UserInfo_1 = $fsx.r(14);
exports.UserInfoSection = UserInfo_1.UserInfoSection;
var UserInput_1 = $fsx.r(15);
exports.UserInputSection = UserInput_1.UserInputSection;
var UserReturnHome_1 = $fsx.r(16);
exports.UserReturnHomeSection = UserReturnHome_1.UserReturnHomeSection;
//# sourceMappingURL=Sections.js.map
}
// default/src/Cards/User/Sections/UserInfo.js
$fsx.f[14] = function(module, exports){
"use strict";
exports.__esModule = true;
var ViewsController_1 = $fsx.r(12);
var Aux_1 = $fsx.r(7);
var UserModel_1 = $fsx.r(13);
function UserInfoSection() {
    var model = new UserModel_1.UserModel();
    var useraddress = model.address;
    var username = model.name;
    Logger.log("username: " + (username == ""));
    Logger.log("username: " + (username == null));
    Logger.log("address: " + (useraddress == ""));
    Logger.log("address: " + (useraddress == null));
    var textContent = ViewsController_1.View.render("userInfo", {
        useraddress: useraddress,
        username: username
    });
    var widgetFactory = new Aux_1.WidgetFactory();
    return new Aux_1.CardSectionFactory()
        .addWidget(widgetFactory._Paragraph({
        text: textContent
    }))
        .build();
}
exports.UserInfoSection = UserInfoSection;
//# sourceMappingURL=UserInfo.js.map
}
// default/src/Controllers/ViewsController.js
$fsx.f[12] = function(module, exports){
"use strict";
exports.__esModule = true;
var View = /** @class */ (function () {
    function View() {
    }
    View.render = function (route, data) {
        var templateBaseDir = "src/Views/";
        var template = HtmlService.createTemplateFromFile("" + templateBaseDir + route);
        // make sure not to pass undefined, null, or empty string to template engine
        Object.keys(data).forEach(function (key) {
            if (data[key] == null) {
                data[key] = " ";
            }
        });
        // @ts-ignore
        template.data = data;
        return template.evaluate().getContent();
    };
    return View;
}());
exports.View = View;
//# sourceMappingURL=ViewsController.js.map
}
// default/src/Models/UserModel.js
$fsx.f[13] = function(module, exports){
"use strict";
exports.__esModule = true;
var PushPull_1 = $fsx.r(6);
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.namespace = "user";
    }
    Object.defineProperty(UserModel.prototype, "name", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "name");
        },
        set: function (name) {
            PushPull_1.push([this.namespace, "name"], name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "address", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "address");
        },
        set: function (address) {
            PushPull_1.push([this.namespace, "address"], address);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "zipcode", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "zipcode");
        },
        set: function (zip) {
            PushPull_1.push([this.namespace, "zipcode"], zip);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "country", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "country");
        },
        set: function (country) {
            PushPull_1.push([this.namespace, "country"], country);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "isMint", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "newuser");
        },
        set: function (bool) {
            PushPull_1.push([this.namespace, "newuser"], bool);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "temperatureUnit", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "temperatureunit");
        },
        set: function (unit) {
            PushPull_1.push([this.namespace, "temperatureunit"], unit);
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map
}
// default/src/Cards/User/Sections/UserInput.js
$fsx.f[15] = function(module, exports){
"use strict";
exports.__esModule = true;
var Aux_1 = $fsx.r(7);
function UserInputSection() {
    // const model = new UserModel()
    // const isMint = model.isMint
    var cardSection = new Aux_1.CardSectionFactory();
    var widgetFactory = new Aux_1.WidgetFactory();
    cardSection
        .addWidget(widgetFactory._TextInput({
        fieldName: "user_name_key",
        hint: "How should SparseWx address you? (25 character max)",
        title: "Your Name (optional)"
    }));
    return cardSection.setCollapsible(false).build();
}
exports.UserInputSection = UserInputSection;
//# sourceMappingURL=UserInput.js.map
}
// default/src/Cards/User/Sections/UserReturnHome.js
$fsx.f[16] = function(module, exports){
"use strict";
exports.__esModule = true;
function UserReturnHomeSection() {
    var COLORS = UI.PALETTE;
    var goToMainCardAction = CardService.newAction()
        .setFunctionName("goToHomeCardCallback");
    return CardService.newCardSection()
        .addWidget(CardService
        .newTextButton()
        .setText('<font color="${COLORS.ORANGE}">HOME</font>')
        .setOnClickAction(goToMainCardAction));
}
exports.UserReturnHomeSection = UserReturnHomeSection;
//# sourceMappingURL=UserReturnHome.js.map
}
// default/src/Handlers/Callbacks.js
$fsx.f[37] = function(module, exports){
"use strict";
exports.__esModule = true;
var Validate_1 = $fsx.r(30);
var Dictionary_1 = $fsx.r(8);
// import { ResetWidget } from "@/Cards/Main/Widgets/Reset"
// import { MainCard } from "@/Cards/Main"
var Aux_1 = $fsx.r(7);
var Models_1 = $fsx.r(34);
var ApplicationModel_1 = $fsx.r(36);
// @ts-ignore
function submitNameCallback(e) {
    var userModel = new Models_1.UserModel();
    var applicationModel = new ApplicationModel_1.ApplicationModel();
    var name = e.formInput.user_name_key;
    var isUserNameValid = Validate_1.validateUserName(name);
    if (isUserNameValid[0]) {
        applicationModel.isUserNameValid = true;
        applicationModel.isMint = false;
        userModel.name = name;
        return true;
    }
    else {
        applicationModel.isUserNameValid = false;
        throw new Error("bad name");
    }
}
Application.submitAddressCallback = function (e) {
    var applicationModel = new ApplicationModel_1.ApplicationModel();
    var userModel = new Models_1.UserModel();
    var address = e.formInput.user_address_key;
    // @test
    applicationModel.address = address;
    var storedAddress = userModel.address;
    if (!address && !storedAddress) {
        throw new Error("First time? You'll need to set an address");
    }
    else if (!address) {
        // false means don't process
        return false;
    }
    Logger.log("Submitted address is " + address);
    var isValid = Validate_1.validateMailingAddress(address);
    // if valid, retrieve address from storage
    if (isValid[0]) {
        applicationModel.isAddressValid = true;
        applicationModel.isMint = false;
        //  const cache = CacheService.getUserCache()
        // cache.removeAll(["wxRaw", "wxRawForecast"])
        // successful validation means that lon,lat, and address properties defined
        return true;
    }
    else {
        var response = "Sorry, try a different address.";
        if (isValid[1] === "ZERO_RESULTS") {
            applicationModel.address = "ZERO_RESULTS";
            throw new Error("Sorry, that address wasn't found. Try something else.");
        }
        if (isValid[1] === "UNSUPPORTED_REGION") {
            applicationModel.address = "UNSUPPORTED_REGION";
            throw new Error("Sorry, " + Dictionary_1.BRAND.NAME + " only supports results for the USA.");
        }
        applicationModel.address = "ERR";
        throw new Error(response);
    }
};
Application.submitTemperatureUnitCallback = function (e) {
    var userModel = new Models_1.UserModel();
    var chosenTempUnit = e.formInputs.temperature_unit_list[0];
    var currentTempUnit = e.temp_unit;
    if (currentTempUnit === chosenTempUnit) {
        return false;
    }
    if (!chosenTempUnit || chosenTempUnit === "") {
        return false;
    }
    userModel.temperatureUnit = chosenTempUnit;
    return true;
};
Application.getAddressSuggestionsCallback = function () {
    Logger.log("Address suggestions callback ... called");
    // will use recent entries
    var suggestions = CardService.newSuggestions();
    var arrSuggestionsTemp = [
        user.suggested_address_one,
        user.suggested_address_two,
        user.suggested_address_three,
    ];
    // arrSuggestionsTemp.forEach((element) => {
    //     if (element != null) {
    //       suggestions.addSuggestion(element)
    //     }
    //   })
    suggestions
        .addSuggestion("one")
        .addSuggestion("two")
        .addSuggestion("three");
    return CardService.newSuggestionsResponseBuilder()
        .setSuggestions(suggestions)
        .build();
};
Application.processUserPreferencesFormCallback = function (e) {
    Logger.log("processUserPreferencesFormCallback ... ");
    var shouldProcess = false;
    var notification = "";
    try {
        var isNameChanged = submitNameCallback(e);
        // @ts-ignore
        shouldProcess = shouldProcess || isNameChanged;
        if (isNameChanged) {
            notification = "Name set. ";
        }
    }
    catch (event) {
        return CardService.newActionResponseBuilder()
            .setNotification(CardService.newNotification()
            .setType(CardService.NotificationType.ERROR)
            .setText(event.message))
            .setStateChanged(false)
            .build();
    }
    try {
        var isAddressChanged = Application.submitAddressCallback(e);
        // @ts-ignore
        shouldProcess = shouldProcess || isAddressChanged;
        if (isAddressChanged) {
            notification += "Address set.";
        }
    }
    catch (event) {
        return CardService.newActionResponseBuilder()
            .setNotification(CardService.newNotification()
            .setType(CardService.NotificationType.ERROR)
            .setText(event.message))
            .setStateChanged(false)
            .build();
    }
    try {
        var isTempUnitChanged = Application.submitTemperatureUnitCallback(e);
        // @ts-ignore
        shouldProcess = shouldProcess || isTempUnitChanged;
        if (isTempUnitChanged) {
            notification += " Unit changed.";
        }
    }
    catch (event) {
        return CardService.newActionResponseBuilder()
            .setNotification(CardService.newNotification()
            .setType(CardService.NotificationType.ERROR)
            .setText(event.message))
            .setStateChanged(false)
            .build();
    }
    if (shouldProcess) {
        return CardService.newActionResponseBuilder()
            .setNavigation(CardService
            .newNavigation()
            .pushCard(MainCard().build()))
            .setNotification(CardService.newNotification()
            .setType(CardService.NotificationType.INFO)
            .setText(notification))
            .setStateChanged(true)
            .build();
    }
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification()
        .setType(CardService.NotificationType.INFO)
        .setText("Nothing changed"))
        .setStateChanged(false)
        .build();
};
function UserSection() {
    var applicatioModel = new ApplicationModel_1.ApplicationModel();
    var userModel = new Models_1.UserModel();
    var isMint = applicatioModel.isMint;
    var userzip = userModel.zipcode;
    var submitAddressSuggestionsAction = CardService.newAction()
        .setFunctionName("getAddressSuggestionsCallback")
        .setParameters({});
    var processUserFormAction = CardService.newAction()
        .setFunctionName("processUserPreferencesFormCallback")
        .setParameters({});
    var setAddressTitle = "Forecast Location";
    if (userzip) {
        setAddressTitle += " (" + userzip + ")";
    }
    var cardSection = new Aux_1.CardSectionFactory();
    var widgetFactory = new Aux_1.WidgetFactory();
    cardSection
        .addWidget(widgetFactory._TextInput({
        fieldName: "user_name_key",
        hint: "How should SparseWx address you? (25 character max)",
        title: "Your Name (optional)"
    }))
        .addWidget(widgetFactory._TextInput({
        fieldName: "user_address_key",
        hint: "City, state or ZIP code",
        title: setAddressTitle,
        suggestions: submitAddressSuggestionsAction
    }))
        .addWidget(widgetFactory._SelectionInput({
        fieldName: "temperature_unit_list",
        items: [
            {
                text: "Fahrenheit",
                value: "dropdown_item_f",
                selected: true
            },
            {
                text: "Celsius",
                value: "dropdown_item_c",
                selected: false
            },
        ],
        title: "Temperature Scale",
        type: "DROPDOWN"
    }))
        .addWidget(widgetFactory._TextButton({
        action: processUserFormAction,
        text: "Submit"
    }));
    // if (!isMint) {
    //   cardSection
    //     .addWidget(ResetWidget())
    // }
    return cardSection.setCollapsible(false).build();
}
exports.UserSection = UserSection;
//# sourceMappingURL=Callbacks.js.map
}
// default/src/Utilities/Validate.js
$fsx.f[30] = function(module, exports){
"use strict";
exports.__esModule = true;
var Services_1 = $fsx.r(29);
var Dictionary_1 = $fsx.r(8);
var UserModel_1 = $fsx.r(13);
function validateUserName(input) {
    if (input === void 0) { input = ""; }
    if (input == "") {
        return [true];
    }
    if (/^.{1,26}$/i.test(input)) {
        // test for length
        return [true, { message: "Nice name." }];
    }
    return [
        false,
        {
            message: "!!! Your name cannot be longer than 26 characters."
        },
    ];
}
exports.validateUserName = validateUserName;
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
function validateZIP(input) {
    // https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s14.html
    return /^[0-9]{5}(?:-[0-9]{4})?$/.test(input);
}
exports.validateZIP = validateZIP;
function validateMailingAddress(address) {
    var userModel = new UserModel_1.UserModel();
    // https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
    if (address == null) {
        return [false, "No valid address."];
    }
    var GeoInterface = Dictionary_1.INTERFACE.GoogleGeoCodeInterface;
    var response = Maps.newGeocoder()
        .setRegion("us")
        .geocode(address);
    if (response.status === "ZERO_RESULTS") {
        return [false, "ZERO_RESULTS"];
    }
    var result = response.results[0];
    var polity = result.address_components;
    var approvedPolities = Object.keys(Dictionary_1.APPROVED_POLITIES);
    polity.forEach(function (pol) {
        if (pol.types.indexOf(GeoInterface.COUNTRY) > -1) {
            userModel.country = pol.long_name;
        }
    });
    var strPolity = userModel.country;
    //const isApprovedPolity = approvedPolities.indexOf(strPolity) > -1
    var isApprovedPolity = (strPolity === "United States");
    if (!isApprovedPolity) {
        Application.userProperties.deleteProperty(Dictionary_1.PROPS.userLocale.country);
        return [false, "UNSUPPORTED_REGION"];
    }
    Logger.log("The polity " + strPolity + " is approved: " + isApprovedPolity);
    // stores approved data
    Services_1.processGeocoderResultsService(polity, result.geometry);
    //  const lastAddressResult = userModel.address
    //  const lastAddressResult2 = user.fetch("suggested_address_two").response
    // if (lastAddressResult != null) {
    //   pushy(["user", "suggested_address_two"],  lastAddressResult)
    // }
    // pushy(["user", "address"], result.formatted_address)
    //
    return [true];
}
exports.validateMailingAddress = validateMailingAddress;
//# sourceMappingURL=Validate.js.map
}
// default/src/Services.js
$fsx.f[29] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
tslib_1.__exportStar($fsx.r(19), exports);
tslib_1.__exportStar($fsx.r(24), exports);
tslib_1.__exportStar($fsx.r(25), exports);
tslib_1.__exportStar($fsx.r(26), exports);
tslib_1.__exportStar($fsx.r(27), exports);
tslib_1.__exportStar($fsx.r(19), exports);
tslib_1.__exportStar($fsx.r(28), exports);
tslib_1.__exportStar($fsx.r(24), exports);
// export *  { checkLocationServiceStatus } from "@/Services/Location"
// import { checkWeatherServiceStatus, WeatherIconService } from "@/Services/Weather"
// import { apparentTemperatureService } from "@/Services/ComputeApparentTemperatureService"
//
// import { textColorTemperatureService } from "@/Services/IsColdService"
// import { isHoldayService } from "@/Services/HighlightHolidayService"
// import { processGeocoderResultsService } from "@/Services/Location"
// import { checkUserServiceStatus } from "@/Services/User"
// import {
//   getAlertsByStateService,
//   getForecastStalenessService,
//   getWeatherServiceDataService,
// } from "@/Services/Weather"
// export {
//   apparentTemperatureService,
//   checkLocationServiceStatus,
//   checkUserServiceStatus,
//   checkWeatherServiceStatus,
//   WeatherIconService,
//   getAlertsByStateService,
//   getForecastStalenessService,
//   getWeatherServiceDataService,
//   isHoldayService,
//   processGeocoderResultsService,
//   textColorTemperatureService,
// }
//# sourceMappingURL=Services.js.map
}
// default/src/Services/Location.js
$fsx.f[19] = function(module, exports){
"use strict";
exports.__esModule = true;
var Date_1 = $fsx.r(18);
var Dictionary_1 = $fsx.r(8);
var PushPull_1 = $fsx.r(6);
// @ts-ignore
function checkLocationServiceStatus() {
    // simply tests if service returns a good result
    var result = Maps.newGeocoder().geocode("10011");
    Logger.log("[" + Date_1.timeStamp() + "][locationServiceStatus] " + result.status);
    PushPull_1.push(["state", "status.location"], result.status);
    return result.status;
}
exports.checkLocationServiceStatus = checkLocationServiceStatus;
// function getCoordinatesFromAddressService(address: string) {
//   const response = Maps.newGeocoder().geocode(address)
//     .results
//   const result =  {
//     lat: response[0].geometry.location.lat.toFixed(4),
//     lon: response[0].geometry.location.lng.toFixed(4),
//   }
//   result.coo = result.lat + "," + result.lon
//   return result
// }
function processGeocoderResultsService(polity, geometry) {
    var GeoInterface = Dictionary_1.GoogleGeoCodeInterface;
    var lon = geometry.location.lng.toFixed(4);
    var lat = geometry.location.lat.toFixed(4);
    var coordinate = lat + "," + lon;
    var localeKeys = Object.keys(Dictionary_1.PROPS.userLocale);
    localeKeys.forEach(function (key) {
        PushPull_1.push(["user", key], null);
    });
    PushPull_1.push(["polity"], polity);
    polity.forEach(function (pol) {
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
    Logger.log("[" + Date_1.timeStamp() + "][lon] " + lon);
    Logger.log("[" + Date_1.timeStamp() + "][lat] " + lat);
    Logger.log("[" + Date_1.timeStamp() + "][coordinate] " + coordinate);
}
exports.processGeocoderResultsService = processGeocoderResultsService;
//# sourceMappingURL=Location.js.map
}
// default/src/Utilities/Date.js
$fsx.f[18] = function(module, exports){
"use strict";
exports.__esModule = true;
function formatDateService(date, format) {
    if (format === void 0) { format = "E, d MMM y"; }
    return Utilities.formatDate(new Date(date), getUserTimeZone(), format);
}
exports.formatDateService = formatDateService;
function formatTimeService(date) {
    return Utilities.formatDate(new Date(date), getUserTimeZone(), "h:mm a");
}
exports.formatTimeService = formatTimeService;
var DateArray = /** @class */ (function () {
    function DateArray() {
        var timeZone = getUserTimeZone();
        var date = new Date();
        this.HOUR = Number(Utilities.formatDate(date, timeZone, "H"));
        this.WEEKDAY = Utilities.formatDate(date, timeZone, "EEEE");
        this.WEEK_DAY = this.WEEKDAY;
        this.MONTH = Utilities.formatDate(date, timeZone, "MMMM");
        this.TIME = Utilities.formatDate(date, timeZone, "h:mm a");
        if (this.HOUR >= 0 && this.HOUR < 12) {
            // this.GREETING = Translate("Good morning")
            this.GREETING = "Good morning";
        }
        else if (this.HOUR >= 12 && this.HOUR < 18) {
            // this.GREETING = Translate("Good afternoon")
            this.GREETING = "Good afternoon";
        }
        else {
            // this.GREETING = Translate("Good evening")
            this.GREETING = "Good evening";
        }
    }
    return DateArray;
}());
exports.DateArray = DateArray;
function timeConversion(millisec) {
    // https://stackoverflow.com/a/32180863
    var seconds = Math.round((millisec / 1000));
    var minutes = Math.round((millisec / (1000 * 60)));
    var hours = Math.round((millisec / (1000 * 60 * 60)));
    var days = Math.round((millisec / (1000 * 60 * 60 * 24)));
    if (seconds < 60) {
        return seconds + " Seconds";
    }
    else if (minutes < 60) {
        return minutes + " Minutes";
    }
    else if (hours < 24) {
        return hours + " Hours";
    }
    else {
        return days + " Days";
    }
}
exports.timeConversion = timeConversion;
function formatAge(date) {
    var msgDate = new Date(date).getTime();
    var todayDate = Date.now(); // milliseconds
    var age = timeConversion(todayDate - msgDate);
    return age;
}
exports.formatAge = formatAge;
//
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
// export function diffDate(newDate, oldDate) {
//   // expects date objects
// }
function timeStamp() {
    return (new Date()).toTimeString().slice(0, 8);
}
exports.timeStamp = timeStamp;
//# sourceMappingURL=Date.js.map
}
// default/src/Services/Weather.js
$fsx.f[24] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
var PushPull_1 = $fsx.r(6);
var Dictionary_1 = $fsx.r(8);
var Aux_1 = $fsx.r(20);
var dlv_ts_1 = tslib_1.__importDefault($fsx.r(21));
var JsonResponse_1 = $fsx.r(22);
var nwsUrlHandlers_1 = $fsx.r(23);
var Date_1 = $fsx.r(18);
function nwsMetaLocationData() {
    //  const WX = PROPS.WX
    var lat = Number(PushPull_1.fetch("user", "lat")).toFixed(4);
    var lon = Number(PushPull_1.fetch("user", "lon")).toFixed(4);
    var coord = lat + "," + lon;
    Logger.log("[" + Date_1.timeStamp() + "][coord] " + coord);
    var urlForMeta = nwsUrlHandlers_1.NWSUrlService.getMetaLink(coord);
    Logger.log("[" + Date_1.timeStamp() + "][urlForMeta] " + urlForMeta);
    var params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
    var preWxRaw = JsonResponse_1.JsonResponseHandler(urlForMeta, {}, params);
    var wxRaw = Aux_1._Cache(preWxRaw.fetch.bind(preWxRaw), [""], "wxRaw", 0);
    return wxRaw.getResult();
}
function getWeatherServiceDataService() {
    var obj = Object.create({});
    var wxResponse = nwsMetaLocationData();
    obj.status = [];
    // obj.push(wxResponse.cacheStatus)
    if (wxResponse.cacheData != null) {
        PushPull_1.push(["state", "cache.wx.meta"], "not found");
        obj.status.push([true, "metadata result found in cache"]);
    }
    else {
        PushPull_1.push(["state", "cache.wx.meta"], "found");
        obj.status.push([false, "metadata not found in cache!"]);
        return obj;
    }
    if (dlv_ts_1["default"](wxResponse, "cacheData.data.properties") == null) {
        PushPull_1.push(["state", "cache.wx.meta.properties"], "meta");
        Logger.log("wxResponse does not contain wx properties");
        obj.status.push([false, "wxUrl fail"]);
        return obj;
    }
    var timeZone = dlv_ts_1["default"](wxResponse, ".data.properties.timeZone");
    PushPull_1.push(["wx", "timeZone"], timeZone);
    var wxUrl = dlv_ts_1["default"](wxResponse, "cacheData.data.properties.forecast");
    if (wxUrl != null) {
        PushPull_1.push(["state", "service.wx.meta.forecastUrl"], wxUrl);
        obj.status.push([true, "wxUrl: " + wxUrl]);
    }
    else {
        PushPull_1.push(["state", "service.wx.meta.forecastUrl"], undefined);
        obj.status.push([false, "wxUrl is undefined!"]);
        return obj;
    }
    var params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
    var preWxRaw = JsonResponse_1.JsonResponseHandler(wxUrl, {}, params);
    var fetchResponse = Aux_1._Cache(preWxRaw.fetch.bind(preWxRaw), [""], "wxRawForecast", 0).getResult();
    if (fetchResponse.cacheStatus != null) {
        PushPull_1.push(["state", "cache.wx"], "cached");
        Logger.log("wx dump response found in cache");
        obj.status.push([true, "wx dump response found in cache"]);
    }
    else {
        PushPull_1.push(["state", "cache.wx"], "not cached");
        Logger.log("wx dump NOT found in cache!");
        obj.status.push([false, "wx dump NOT found in cache!"]);
        return obj;
    }
    obj.wx = dlv_ts_1["default"](fetchResponse, "cacheData.data");
    //  obj.timeZone = wx.properties.timeZone
    if (dlv_ts_1["default"](obj, "wx.properties") == null) {
        obj.status.push([false, "mo wx data from site!"]);
        return obj;
    }
    obj.updateTime = dlv_ts_1["default"](obj.wx, "properties.updateTime");
    PushPull_1.push(["wx", "updateTime"], obj.updateTime);
    obj.elevation = dlv_ts_1["default"](obj.wx, "properties.elevation");
    PushPull_1.push(["wx", "elevation"], obj.elevation);
    var wxPeriodCounts = dlv_ts_1["default"](obj.wx, "properties.periods");
    if (!!wxPeriodCounts) {
        obj.wxPeriodCount = wxPeriodCounts.length;
    }
    obj.getPeriod = function (period) {
        var periodic = obj.wx.properties.periods[period];
        PushPull_1.push(["state", "display.wx.data.period"], period);
        var response = {
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
    var urlWxServiceCheck = nwsUrlHandlers_1.NWSUrlService.uri.base;
    var params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
    var result;
    try {
        result = JsonResponse_1.JsonResponseHandler(urlWxServiceCheck, {}, params).fetch();
    }
    catch (e) {
        PushPull_1.push(["state", "status.wx"], "ERR");
        Logger.log("checkWeatherServiceStatus: " + e);
        return "ERR";
    }
    Logger.log("[" + Date_1.timeStamp() + "][wxServiceStatus] " + result.data.status);
    var status = dlv_ts_1["default"](result, "data.status");
    PushPull_1.push(["state", "status.wx"], status);
    return status;
}
exports.checkWeatherServiceStatus = checkWeatherServiceStatus;
function getForecastStalenessService() {
    var lastUpdateTime = PushPull_1.fetch("wx", "updateTime");
    var diff;
    if (!!lastUpdateTime) {
        diff = Date.now() - (new Date(lastUpdateTime)).getTime();
        diff = Date_1.timeConversion(diff);
        PushPull_1.push(["wx", "forecastAge"], diff);
        return [true, diff];
    }
    return [false, "unknown"];
}
exports.getForecastStalenessService = getForecastStalenessService;
function getAlertsByStateService() {
    var params = Dictionary_1.HTTP.WX_SERVICE.PARAMS;
    var userstate = PushPull_1.fetch("user", "state");
    var urlWxAlerts = "https://api.weather.gov/alerts/active/count";
    var response;
    var count;
    if (!!userstate) {
        response = JsonResponse_1.JsonResponseHandler(urlWxAlerts, {}, params).fetch().data;
        count = (response.areas[userstate]);
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
//# sourceMappingURL=Weather.js.map
}
// default/src/Handlers/Aux.js
$fsx.f[20] = function(module, exports){
"use strict";
exports.__esModule = true;
var PushPull_1 = $fsx.r(6);
function _Cache(fn, fnArgs, cacheName, cacheTime) {
    if (cacheTime === void 0) { cacheTime = 1500; }
    var objCacheMethodsBuilder = Object.create({
        data: {}
    });
    var cache = CacheService.getUserCache();
    objCacheMethodsBuilder.data.cache = cache;
    var cached = objCacheMethodsBuilder.data.cache.get(cacheName);
    objCacheMethodsBuilder.data.cached = cached;
    var result;
    var message;
    var hits = PushPull_1.fetch("state", "cache.hits");
    if (!!cached) {
        result = cached;
        message = "Cache found";
        ++hits;
        PushPull_1.push(["state", "cache.hits"], hits);
    }
    else {
        if (fnArgs != null) {
            result = fn.apply(void 0, fnArgs);
        }
        else {
            result = fn();
        }
        cache.put(cacheName, result, cacheTime);
        message = "Not found. Cached.";
    }
    PushPull_1.push(["state", "cache." + cacheName], message);
    objCacheMethodsBuilder.data = {
        // @ts-ignore
        "@context": ["cacheHandler"],
        cache: cache,
        cacheName: cacheName,
        cached: cached,
        message: message,
        result: result
    };
    objCacheMethodsBuilder.invalidate = function () {
        if (cached != null) {
            objCacheMethodsBuilder.data.cachedName = null;
            return true;
        }
        return false;
    };
    objCacheMethodsBuilder.getResult = function () {
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
//# sourceMappingURL=Aux.js.map
}
// @paxperscientiam/dlv.ts/dist/dlv.es.js
$fsx.f[21] = function(module, exports){
"use strict";
exports.__esModule = true;
function default_1(t, n, e, l) {
    if (l === void 0) { l = 0; }
    var o = n.split ? n.split(".") : n;
    for (; t && l < o.length;)
        t = t[o[l++]];
    return void 0 === t || l < o.length ? e : t;
}
exports["default"] = default_1;
//# sourceMappingURL=dlv.es.js.map

}
// default/src/Handlers/JsonResponse.js
$fsx.f[22] = function(module, exports){
"use strict";
exports.__esModule = true;
function JsonResponseHandler(url, query, params) {
    if (query === void 0) { query = {}; }
    if (params === void 0) { params = { muteHttpExceptions: true }; }
    var data = {
        "@context": ["JsonResponseHandler"],
        params: params,
        query: query,
        url: url
    };
    var objJsonHandlerMethods = {
        fetch: function () {
            var response = UrlFetchApp.fetch(data.url, data.params);
            var json = response.getContentText();
            var responseData = JSON.parse(json);
            return {
                "@context": ["JsonResponseHandler",
                    {
                        method: "fetch"
                    }],
                "data": responseData,
                "status": [true, "Things are OK."]
            };
        }
    };
    var obj = Object.create(objJsonHandlerMethods);
    obj.data = data;
    return obj;
}
exports.JsonResponseHandler = JsonResponseHandler;
//# sourceMappingURL=JsonResponse.js.map
}
// default/src/Handlers/nwsUrlHandlers.js
$fsx.f[23] = function(module, exports){
"use strict";
exports.__esModule = true;
exports.NWSUrlService = {
    uri: {
        base: "https://api.weather.gov/",
        alerts: {
            active: "alerts/active"
        }
    },
    getMetaLink: function (coordinates) {
        return this.uri.base + "points/" + coordinates;
    }
};
// interface INWSUrlService {
// }
// export class NWSUrlService {
//   NWS_INTERFACE
//   API: any
//   URL_BASE: string
//   alerts: string
//   activeAlerts: string
//   constructor() {
//     this.NWS_INTERFACE = dictionary.INTERFACE.NationalWeatherServiceInterface
//     this.API = this.NWS_INTERFACE.API
//     this.URL_BASE = this.API._
//     this.alerts = `${this.URL_BASE}${this.API.ALERTS._}`
//     this.activeAlerts = `${this.URL_BASE}${this.API.ALERTS.ACTIVE}`
//   }
//   meta(coordinates: string) {
//     /// points/{point}
//     return `${this.URL_BASE}${this.API.POINTS._}/${coordinates}`
//   }
//   forecast(wfo: string, gridpoints: string) {
//     let url = `${this.URL_BASE}${this.API.GRID_POINTS.FORECAST._}`
//     url = url.replace(/@wfo/i, wfo)
//     url = url.replace(/@xy/i, gridpoints)
//     return url
//   }
//   zoneAlerts(zoneid: string) {
//     // note that zone is county id which comes from meta.properties.county
//     // eg https://api.weather.gov/alerts/active/zone/VTC007
//     return `${this.URL_BASE}${this.API.ALERTS.ACTIVE}/zone/${zoneid}`
//   }
// }
// //
// //
// // function _nwsUrlHandlerTest_metaUrlFromCoord() {
// //   const coordinates = "44.4759,-73.2121"
// //   const a = new NWSUrlService()
// //   const b = a.meta
// //   const c = b(coordinates); Logger.log(c)
// //   return c
// // }
// //
// // function _nwsUrlHandlerTest__forecastUrlFromCoord() {
// //   const coordinates = "44.4759,-73.2121"
// //   const a = new NWSUrlService()
// //   const b = a.meta
// //   const metaUrl = b(coordinates)
// //   const forecastUrl = a._forecastUrlFromCoord(metaUrl); Logger.log(forecastUrl)
// //   return forecastUrl
// // }
// // //
// // function _nwsUrlHandlerTest_forecastUrlFromCoord() {
// //   const coordinates = "44.4759,-73.2121"
// //   const a = new NWSUrlService(); Logger.log(a)
// //   const b = a.forecastUrlFromCoord; Logger.log(b)
// //   const c = b(coordinates); Logger.log(c)
// // }
//# sourceMappingURL=nwsUrlHandlers.js.map
}
// default/src/Services/ComputeApparentTemperatureService.js
$fsx.f[25] = function(module, exports){
"use strict";
exports.__esModule = true;
var PushPull_1 = $fsx.r(6);
function apparentTemperatureService(args) {
    var temperature;
    var windspeed;
    var tempUnit;
    tempUnit = PushPull_1.fetch("user", "temp_unit");
    // Temperature in F and windspeed in MPH
    // https://www.weather.gov/safety/cold-faqs
    // Windchill (ºF) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
    if (!args.temperature || !args.windspeed) {
        return null;
    }
    temperature = Number(args.temperature);
    windspeed = Number(args.windspeed);
    if (tempUnit === "dropdown_item_f") {
        if (temperature <= 50 && windspeed > 3) {
            var windchill = 35.74
                + (0.6215 * temperature)
                - (35.75 * Math.pow(windspeed, 0.16))
                + (0.4275 * temperature * Math.pow(windspeed, 0.16));
            return parseInt(windchill.toString(), 10).toFixed(0);
        }
        return null;
    }
    if (tempUnit === "dropdown_item_c") {
        if (temperature <= 10 && windspeed > 4.8) {
            // convert windspeed to KPM (making an assumption)
            windspeed *= 1.61;
            var windchill = 13.12
                + (0.6125 * temperature)
                - (11.37 * Math.pow(windspeed, 0.16))
                + (0.3965 * Math.pow(windspeed, 0.16));
            return parseInt(windchill.toString(), 10).toFixed(0);
        }
        return null;
    }
    //   if (temperature !=null && relativeHumidity != null) {
    //         // temperature in F and relativeHumidty in percentage points
    //         temperature = Number(temperature)
    //         relativeHumidity = Number(relativeHumidity)
    //         if (temperature >= 80 && relativeHumidity >= 40) {
    //             return _calculateHeadIndexService(temperature,
    //                                               relativeHumidity)
    //         }
    //     }
    return null;
}
exports.apparentTemperatureService = apparentTemperatureService;
// function _calculateHeadIndexService(temperature, RH) {
//     // https://www.weather.gov/ama/heatindex
//     const heatIndex =
//         -42.379
//         + (2.04901523 * temperature)
//         + (10.14333127 * RH)
//         - (0.22475541 * temperature * RH)
//         - (Math.pow(6.83783, -3) * Math.pow(temperature, 2))
//         - (Math.pow(5.481717, -2) * Math.pow(RH, 2))
//         + (Math.pow(1.22874, -3) * Math.pow(temperature, 2) * RH)
//         + (Math.pow(8.5282, -4) * temperature * Math.pow(RH, 2))
//         - (Math.pow(1.99, -6) * Math.pow(temperature, 2) * Math.pow(RH, 2))
//     Logger.log("Apparent temp is Heat Index")
//     return heatIndex
// }
// function apparentTempTest() {
//     const x = apparentTemperatureService({ temperature: 100, relativeHumidity: 50 })
//     Logger.log(x)
// }
//# sourceMappingURL=ComputeApparentTemperatureService.js.map
}
// default/src/Services/IsColdService.js
$fsx.f[26] = function(module, exports){
"use strict";
exports.__esModule = true;
var Date_1 = $fsx.r(18);
var PushPull_1 = $fsx.r(6);
var Dictionary_1 = $fsx.r(8);
function textColorTemperatureService(temperature) {
    var temp = "";
    if (PushPull_1.fetch("user", "temp_unit") === "dropdown_item_c") {
        temp = Date_1.convertF2C(temperature);
    }
    if (temperature < 32) {
        Logger.log("Blue for " + temperature);
        return Dictionary_1.PALETTE.BLUE;
    }
    if (temperature > 75) {
        Logger.log("Maroon for " + temperature);
        return Dictionary_1.PALETTE.MAROON;
    }
    if (temperature > 100) {
        Logger.log("Orange for " + temperature);
        return Dictionary_1.PALETTE.ORANGE;
    }
    return "BLACK";
}
exports.textColorTemperatureService = textColorTemperatureService;
//# sourceMappingURL=IsColdService.js.map
}
// default/src/Services/HighlightHolidayService.js
$fsx.f[27] = function(module, exports){
"use strict";
exports.__esModule = true;
function isHoldayService(dayName) {
    var days = [
        /Tonight/i,
        /Sunday/i,
        /Monday/i,
        /Tuesday/i,
        /Wednesday/i,
        /Thursday/i,
        /Friday/i,
        /Saturday/i,
    ];
    return true !== days.some(function (rx) { return rx.test(dayName); });
}
exports.isHoldayService = isHoldayService;
//# sourceMappingURL=HighlightHolidayService.js.map
}
// default/src/Services/User.js
$fsx.f[28] = function(module, exports){
"use strict";
exports.__esModule = true;
var Date_1 = $fsx.r(18);
var PushPull_1 = $fsx.r(6);
function checkUserServiceStatus() {
    var lat = PushPull_1.fetch("user", "lat");
    if (!lat) {
        Logger.log("[" + Date_1.timeStamp() + "][status.user] ERR as no coordinates");
        PushPull_1.push(["state", "status.user"], "ERR");
        return "ERR";
    }
    Logger.log("[" + Date_1.timeStamp() + "][status.user] OK");
    PushPull_1.push(["state", "status.user"], "OK");
    return "OK";
}
exports.checkUserServiceStatus = checkUserServiceStatus;
//# sourceMappingURL=User.js.map
}
// default/src/Models.js
$fsx.f[34] = function(module, exports){
"use strict";
exports.__esModule = true;
var BaseCardModel_1 = $fsx.r(31);
exports.BaseCardModel = BaseCardModel_1.BaseCardModel;
var GenericModel_1 = $fsx.r(32);
exports.GenericModel = GenericModel_1.GenericModel;
var MainCardModel_1 = $fsx.r(33);
exports.MainCardModel = MainCardModel_1.MainCardModel;
var UserCardModel_1 = $fsx.r(35);
exports.UserCardModel = UserCardModel_1.UserCardModel;
var UserModel_1 = $fsx.r(13);
exports.UserModel = UserModel_1.UserModel;
//# sourceMappingURL=Models.js.map
}
// default/src/Models/BaseCardModel.js
$fsx.f[31] = function(module, exports){
"use strict";
exports.__esModule = true;
var PushPull_1 = $fsx.r(6);
var BaseCardModel = /** @class */ (function () {
    function BaseCardModel() {
    }
    Object.defineProperty(BaseCardModel.prototype, "name", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "card.name");
        },
        set: function (name) {
            PushPull_1.push([this.namespace, "card.name"], name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCardModel.prototype, "title", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "header.title");
        },
        set: function (title) {
            PushPull_1.push([this.namespace, "header.title"], title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseCardModel.prototype, "subtitle", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "header.subtitle");
        },
        set: function (subtitle) {
            PushPull_1.push([this.namespace, "header.subtitle"], subtitle);
        },
        enumerable: true,
        configurable: true
    });
    return BaseCardModel;
}());
exports.BaseCardModel = BaseCardModel;
//# sourceMappingURL=BaseCardModel.js.map
}
// default/src/Models/GenericModel.js
$fsx.f[32] = function(module, exports){
"use strict";
exports.__esModule = true;
var PushPull_1 = $fsx.r(6);
var GenericModel = /** @class */ (function () {
    function GenericModel() {
    }
    Object.defineProperty(GenericModel.prototype, "data", {
        get: function () {
            return PushPull_1.fetch(this.namespace);
        },
        set: function (args) {
            PushPull_1.push([this.namespace, args[0]], args[1]);
        },
        enumerable: true,
        configurable: true
    });
    return GenericModel;
}());
exports.GenericModel = GenericModel;
//# sourceMappingURL=GenericModel.js.map
}
// default/src/Models/MainCardModel.js
$fsx.f[33] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
var BaseCardModel_1 = $fsx.r(31);
var Date_1 = $fsx.r(18);
var da = new Date_1.DateArray();
var MainCardModel = /** @class */ (function (_super) {
    tslib_1.__extends(MainCardModel, _super);
    function MainCardModel() {
        var _this = _super.call(this) || this;
        _this.namespace = "MainCardState";
        _this.name = "maincard";
        _this.title = da.GREETING + "!";
        _this.subtitle = "Today is " + da.WEEKDAY;
        return _this;
    }
    return MainCardModel;
}(BaseCardModel_1.BaseCardModel));
exports.MainCardModel = MainCardModel;
//# sourceMappingURL=MainCardModel.js.map
}
// default/src/Models/UserCardModel.js
$fsx.f[35] = function(module, exports){
"use strict";
exports.__esModule = true;
var tslib_1 = $fsx.r(2);
var Models_1 = $fsx.r(34);
var UserCardModel = /** @class */ (function (_super) {
    tslib_1.__extends(UserCardModel, _super);
    function UserCardModel() {
        var _this = _super.call(this) || this;
        _this.namespace = "UserCardState";
        _this.name = "usercard";
        _this.title = "Settings";
        _this.subtitle = " ";
        return _this;
    }
    return UserCardModel;
}(Models_1.BaseCardModel));
exports.UserCardModel = UserCardModel;
//# sourceMappingURL=UserCardModel.js.map
}
// default/src/Models/ApplicationModel.js
$fsx.f[36] = function(module, exports){
"use strict";
exports.__esModule = true;
var PushPull_1 = $fsx.r(6);
var ApplicationModel = /** @class */ (function () {
    // private _inputTemperatureUnit: string = "F"
    function ApplicationModel() {
        this.namespace = "ApplicationState";
        PushPull_1.push([this.namespace, "application.input.temperatureUnit.options"], "dropdown_item_f, dropdown_item_c");
    }
    Object.defineProperty(ApplicationModel.prototype, "address", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "application.input.user_address_key");
        },
        // submitted address
        set: function (address) {
            PushPull_1.push([this.namespace, "application.input.user_address_key"], address);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationModel.prototype, "isMint", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "application.mint");
        },
        set: function (bool) {
            PushPull_1.push([this.namespace, "application.mint"], bool);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationModel.prototype, "isUserNameValid", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "application.valid.username");
        },
        set: function (bool) {
            PushPull_1.push([this.namespace, "application.valid.username"], bool);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationModel.prototype, "isAddressValid", {
        get: function () {
            return PushPull_1.fetch(this.namespace, "application.valid.address");
        },
        set: function (bool) {
            PushPull_1.push([this.namespace, "application.valid.address"], bool);
        },
        enumerable: true,
        configurable: true
    });
    return ApplicationModel;
}());
exports.ApplicationModel = ApplicationModel;
//# sourceMappingURL=ApplicationModel.js.map
}
// Importing a single entry
$fsx.r(39);
})()
//# sourceMappingURL=app.js.map