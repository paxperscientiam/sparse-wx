//     Copyright (C) 2018 Christopher David Ramos

// thanks https://webbjocke.com/javascript-check-data-types/

// Returns if a value is an object
export function isObject(value: any) {
  return value && typeof value === "object" && value.constructor === Object
}

// Returns if a value is null
export function isNull(value: any) {
  return value === null
}

// Returns if a value is undefined
export function isUndefined(value: any) {
  return typeof value === "undefined"
}

export function isSet(value: any) {
  const result = !isNull(value) &&
    !isUndefined(value) &&
    (value !== typeof(undefined)) &&
    (value !== typeof(null))

  if (!result) {
    return false
  }
  if ((value).toString().length > 0) {
    return result && true
  }
}

// Returns if a value is a boolean
export function isBoolean(value: any) {
  return typeof value === "boolean"
}

// Returns if a value is a regexp
export function isRegExp(value: any) {
  return value && typeof value === "object" && value.constructor === RegExp
}

export function isError(value: any) {
  return value instanceof Error && typeof value.message !== "undefined"
}

// Returns if value is a date object
export function isDate(value: any) {
  const date = new Date(value)
  return Boolean(+date) && date.getDate()
}

// Returns if a Symbol
export function isSymbol(value: any) {
  return typeof value === "symbol"
}

// Returns if a value is a string
export function isString(value: any) {
  return typeof value === "string" || value instanceof String
}

// Returns if a value is really a number
export function isNumber(value: any) {
  return typeof value === "number" && isFinite(value)
}

// Returns if a value is an array
export function isArray(value: any) {
  return value && typeof value === "object" && value.constructor === Array
}

// Returns if a value is a export function
export function isFunction(value: any) {
  return typeof value === "function"
}
