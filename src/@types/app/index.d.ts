import Global = NodeJS.Global

declare interface ISparseWx extends Global {
  timeStamp: () => string

  goToUserCardCallback: () => any

  getAddressSuggestionsCallback: () => Card

  buildAddOn: () => Card
  buildHomePage: () => Card


  _Cache: (a: () => any, b: any[], c: string, d?: number) => any


  checkLocationServiceStatus: () => any
  clearConfig: () => void

  dictionary: IDictionary
  ICONS: any
  UI: any
  PALETTE: IPalette
  PROPS: any

  exists: (reference: string, property?: string) => boolean
  make: (reference: string, thing: any) => void
  push: (a: string[], b: any) => void
  fetch: (a: any, b?: any) => any
  has: (a: any, b?: any) => boolean

  userProperties: Properties

  submitNameCallback: (e: any) => boolean
  submitAddressCallback: (e: any) => boolean
  submitTemperatureUnitCallback: (e: any) => [boolean, string]

  doGet: (e: any) => void

  onInstall: (e: any) => void
}

declare const Application: ISparseWx

declare const ICONS: IDictionaryIcons
declare const COLORS: IColors
declare const PALETTE: IPalette

// declare const QS
// declare const dset

// tslint:disable
declare interface String {
  capitalize: () => string
  toTitleCase: () => string
}

// tslint:disable
declare interface Number {
  commaThousDotDec: () => string
}

declare interface InputObject {
  [prop: string]: any
}

// GAS types
type Action = GoogleAppsScript.Card_Service.Action
type ActionResponse = GoogleAppsScript.Card_Service.ActionResponse
type ButtonSet = GoogleAppsScript.Card_Service.ButtonSet
type Card = GoogleAppsScript.Card_Service.Card
type CardBuilder = GoogleAppsScript.Card_Service.CardBuilder
type CardHeader = GoogleAppsScript.Card_Service.CardHeader
type CardSection = GoogleAppsScript.Card_Service.CardSection
type SelectionInput = GoogleAppsScript.Card_Service.SelectionInput
type SelectionInputType = GoogleAppsScript.Card_Service.SelectionInputType
type TextButton = GoogleAppsScript.Card_Service.TextButton
type TextInput = GoogleAppsScript.Card_Service.TextInput
type TextParagraph = GoogleAppsScript.Card_Service.TextParagraph
type Widget = GoogleAppsScript.Card_Service.Widget
type KeyValue = GoogleAppsScript.Card_Service.KeyValue
type Icon = GoogleAppsScript.Card_Service.Icon
type Cache = GoogleAppsScript.Cache.Cache
type Properties = GoogleAppsScript.Properties.Properties
type ActionResponseBuilder = GoogleAppsScript.Card_Service.ActionResponseBuilder
type URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions
type HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse
type HtmlTemplate = GoogleAppsScript.HTML.HtmlTemplate

type FixedFooter = any

declare namespace GoogleAppsScript {
  module Card_Service {
    interface CardBuilder {
      setFixedFooter(a: any): CardBuilder
      // newFixedFooter(fixedFooter: FixedFooter): FixedFooter
    }
  }
}


declare interface IData {
  id: string
  [propName: string]: any
}

declare function render(a: string): void

declare interface ICacheWrapper {
  data: {
    cache: Cache | null,
    cachedName: string | null,
    cached: any,
    message: string | null,
    result: any,
  }
  invalidate: () => boolean
  getResult: () => any
}

declare interface IUser {
  fetch: (a: string[] | string) => any
  setValue: (a: string, b: any) => any

  address: string
  city: string
  coo: string
  coordinate: string
  lat: string
  lon: string
  country: string
  county: string
  name: string
  region: string
  state: string
  state_long: string
  tz: string
  zip: string
  zip_code: string
  temp_unit: string

  suggested_address_one: string
  suggested_address_two: string
  suggested_address_three: string

  fields: string
}

declare interface IApplicationState {
  [prop: string]: string
}

declare interface IColors {
  SCHEME: {
    PRIMARY: {[key: string]: IPalette},
    SECONDARY: {[key: string]: IPalette},
    TERTIARY: {[key: string]: IPalette},
    HIGHLIGHT: {[key: string]: IPalette},
  },
  TEMP: string,
}

declare interface IUserInterface {
  COLORS: {
    SCHEME: {
      PRIMARY: {[key: string]: IPalette},
      SECONDARY: {[key: string]: IPalette},
      TERTIARY: {[key: string]: IPalette},
      HIGHLIGHT: {[key: string]: IPalette},
      QUATERNARY: {[key: string]: IPalette},
    },
  }
  WIDGETS: {
    WEATHER_TODAY: {
      COLOR_ONE: {[key: string]: IPalette},
    }
  }
  WX_SECTION__WIDGET_COUNT: number
  PALETTE: IPalette
  PLACEHOLDER_TEXT: object
}

declare interface IINTERFACE {
  GoogleGeoCodeInterface: { [key: string]: string }
  NationalWeatherServiceInterface: any
}

declare interface IGeocodeSR {
  [prop: string]: any
}

declare interface IHttp {
  WX_SERVICE: {
    PARAMS: object,
    URL: any,
  }
}

declare interface IBrand {
  AUTHOR: string
  EMAILS: any
  NAME: string
  URLS: any
  version: string
}

declare interface IProps {
  OPTIONS: any
  //  STATE: any
  DEFAULTS: any
  //  user: any
  userBio: any
  userLocale: any
  WX: any
  CACHE: any,
  applicationState: IApplicationState
}

declare interface IDictionary {
  UI: IUserInterface
  INTERFACE: IINTERFACE
  APPROVED_POLITIES: object
  BRAND: IBrand
  CARDINAL_DIRECTIONS: object
  HTTP: IHttp
  PROPS: IProps
  PALETTE: any
}

declare interface IDictionaryIconsUI {
  IMG_BARS: string
  IMG_QUESTIONMARK: string
  IMG_LOGO: string
  IMG_ERROR: string
  IMG_INFO: string
  IMG_COG: string
}

declare interface IJsonResponseHandler {
  data: {
    params: URLFetchRequestOptions,
    query: object,
    url: string,
  }
  cacheName: string
  cacheTime: number
  json: object
  fetch: () => { "@context": [string, object],
                 "data": any,
                 "status": [boolean, string]
               }

  [prop: string]: any
}

declare const JsonResponseHandlerTest: () => any

declare interface IDictionaryIcons {
  UI: IDictionaryIconsUI
}
//
declare enum IPalette {
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

// declare const Machine
// declare const URI
// declare const curry
// declare const _cards

declare const user: IUser
declare const applicationState: IApplicationState

declare const UserCard: () => CardBuilder
declare const MainCard: () => CardBuilder

declare var section: CardSection
declare var sections: CardSection[]

declare interface ISelectionInput {
  fieldName: string,
  hint?: string,
  items?: [{
    text: string,
    value: any,
  }],
  title: string,
  type: SelectionInputType,
  suggestions?: any,
}
