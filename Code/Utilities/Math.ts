//     Copyright (C) 2018 Christopher David Ramos

// thanks https://webbjocke.com/javascript-check-data-types/

// Returns if a value is an object
function isObject(value) {
    return value && typeof value === "object" && value.constructor === Object
}

// Returns if a value is null
function isNull(value) {
    return value === null
}

// Returns if a value is undefined
function isUndefined(value) {
    return typeof value === "undefined"
}

function isSet(value) {
    const result = !isNull(value) && !isUndefined(value)
    if (!result) {
        return false
    }
    if ((value).toString().length > 0) {
        return result && true
    }
}

// Returns if a value is a boolean
function isBoolean(value) {
    return typeof value === "boolean"
}

// Returns if a value is a regexp
function isRegExp(value) {
    return value && typeof value === "object" && value.constructor === RegExp
}

function isError(value) {
    return value instanceof Error && typeof value.message !== "undefined"
}

// Returns if value is a date object
function isDate(value) {
    return value instanceof Date
}

// Returns if a Symbol
function isSymbol(value) {
    return typeof value === "symbol"
}

// Returns if a value is a string
function isString(value) {
    return typeof value === "string" || value instanceof String
}

// Returns if a value is really a number
function isNumber(value) {
    return typeof value === "number" && isFinite(value)
}

// Returns if a value is an array
function isArray(value) {
    return value && typeof value === "object" && value.constructor === Array
}

// Returns if a value is a function
function isFunction(value) {
    return typeof value === "function"
}
