//     Copyright (C) 2018 Christopher David Ramos
/**
 * Returns an object with the values of the argument objects.
 * If multiple objects have the same property value, the last value set is retained.
 * @param {...Object}
 * @returns {Object}
 */

function mergeObjs() {
    const obj = arguments[0]
    for (i = 1; i < arguments.length; i++) {
        const src = arguments[i]
        for (const key in src) {
            if (src.hasOwnProperty(key)) {
                obj[key] = src[key]
            }
        }
    }
    return obj
}

function flattenObj(ob) {
    let iterator
    const toReturn = {}
    let x
    let flatObject

    for (iterator in ob) {
        if (!ob.hasOwnProperty(i)) {continue}

        if ((typeof ob[i]) === "object") {
            flatObject = flattenObject(ob[i])
            for (x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) {continue}

                toReturn[i + "." + x] = flatObject[x]
            }
        } else {
            toReturn[i] = ob[i]
        }
    }
    return toReturn
}

function testUtils() {
    Logger.log()
}
