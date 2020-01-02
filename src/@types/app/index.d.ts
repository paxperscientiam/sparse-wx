import Global = NodeJS.Global

declare const timeStamp: () => string

declare const buildAddOn: () => Card
declare const _Cache: (a: () => any, b: any[], c: string, d?: number) => any

declare const checkLocationServiceStatus
declare const clearConfig: () => void
declare const dictionary: IDictionary

declare const exists: (reference: string, property?: string) => boolean
declare const make: (reference: string, thing: any) => void
declare const push: (a: string[], b) => void
declare const fetch: (a, b?) => any
declare const has: (a, b?) => boolean

declare const userProperties: Properties

declare interface ISparseWx extends Global {
  timeStamp

  getAddressSuggestionsCallback

  buildAddOn
  _Cache

  checkLocationServiceStatus
  clearConfig

  dictionary
  ICONS
  UI
  PALETTE
  PROPS

  exists
  make
  push
  fetch
  has

  userProperties

  submitNameCallback
  submitAddressCallback

  doGet: (e: any) => void

  onInstall: (e: any) => void
}

declare const ICONS: IDictionaryIcons
declare const PROPS
declare const UI
declare const COLORS: IColors
declare const PALETTE: IPalette

declare const objectPath
declare const QS
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

// GAS types
type ButtonSet = GoogleAppsScript.Card_Service.ButtonSet
type Card = GoogleAppsScript.Card_Service.Card
type CardBuilder = GoogleAppsScript.Card_Service.CardBuilder
type CardHeader = GoogleAppsScript.Card_Service.CardHeader
type CardSection = GoogleAppsScript.Card_Service.CardSection
type SelectionInput = GoogleAppsScript.Card_Service.SelectionInput
type TextButton = GoogleAppsScript.Card_Service.TextButton
type TextInput = GoogleAppsScript.Card_Service.TextInput
type TextParagraph = GoogleAppsScript.Card_Service.TextParagraph
type Widget = GoogleAppsScript.Card_Service.Widget
type KeyValue = GoogleAppsScript.Card_Service.KeyValue
type Icon = GoogleAppsScript.Card_Service.Icon
type Cache = GoogleAppsScript.Cache.Cache
type Properties = GoogleAppsScript.Properties.Properties
type ActionResponseBuilder = GoogleAppsScript.Card_Service.ActionResponseBuilder

type HtmlTemplate = GoogleAppsScript.HTML.HtmlTemplate

declare interface IData {
  id: string
  [propName: string]: any
}

declare function render(a: string): void

declare interface ICacheWrapper {
  data: {
    cache: Cache,
    cachedName: string,
    cached,
    message: string,
    result,
  }
  invalidate: () => boolean
  getResult: () => any
}

declare interface IUser {
  fetch: (a: string[] | string) => any
  setValue: (a: string, b: any) => any

  address
  city
  coo
  coordinate
  lat
  lon
  country
  county
  name
  region
  state
  state_long
  tz
  zip
  zip_code
  temp_unit

  suggested_address_one
  suggested_address_two
  suggested_address_three

  fields
}

declare interface IApplicationState {
  [prop: string]: string
}

declare interface IColors {
  SCHEME: {
    PRIMARY: string,
    SECONDARY: string,
    TERTIARY: string,
    HIGHLIGHT: string,
  },
  TEMP: string,
}

declare interface IUserInterface {
  COLORS: {
    SCHEME: {
      PRIMARY: string,
      SECONDARY: string,
      TERTIARY: string,
      HIGHLIGHT: string,
    },
    TEMP: string,
  }
  ICONS: any
  WIDGETS: {
    WEATHER_TODAY: { IMetadata },
  }
  WX_SECTION__WIDGET_COUNT: number
  PALETTE: {
    [prop: string]: string,
  }
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
  version
}

declare interface IProps {
  STATE
  user
  WX
  CACHE
}

declare interface IDictionary {
  UI: IUserInterface
  INTERFACE: IINTERFACE
  APPROVED_POLITIES: object
  BRAND: IBrand
  CARDINAL_DIRECTIONS: object
  HTTP: IHttp
  PROPS: IProps
  PALETTE
}

declare interface IDictionaryIconsUI {
  IMG_BARS: string
  IMG_QUESTIONMARK: string
  IMG_LOGO: string
  IMG_ERROR: string
  IMG_INFO: string
  IMG_COG: string
}

declare interface IDictionaryIconsWx {
  UNKNOWN
  ERROR

  [prop: string]: IDictionaryIconsWxProps
}
declare interface IDictionaryIconsWxProps {
  DAY: string
  NIGHT: string
}

declare interface IJsonResponseHandler {
  url: string
  query: object
  params: object
  cacheName: string
  cacheTime: number
  json: object
  data: object

  [prop: string]: any
}

declare const JsonResponseHandlerTest: () => any

declare interface IDictionaryIcons {
  UI: IDictionaryIconsUI
  WX
}
//
declare interface IPalette {
  [color: string]: string
}

declare const Machine
declare const URI
declare const curry
declare const _cards

declare const submitNameCallback: (any) => [boolean, string]
declare const submitTemperatureUnitCallback: (any) => [boolean, string]
declare const submitAddressCallback: (any) => [boolean, string]

declare const user: IUser
declare const applicationState: IApplicationState

declare const UserCard: () => CardBuilder
declare const MainCard: () => CardBuilder

declare var section: CardSection
declare var sections: CardSection[]
