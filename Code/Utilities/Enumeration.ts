//     Copyright (C) 2018 Christopher David Ramos
function Enumeration(obj) {
    if (!(this instanceof Enumeration)) {
        return new Enumeration(obj)
    }
    for (const key in obj) {
        this[key] = obj[key]
    }
    Object.freeze(this)
    return this.hasOwnProperty(key)
}

function testEnumeration() {
    const colors = new Enumeration(
        {
            ORANGE: "orange",
            RED: "red",
            YELLOW: "yellow",
        })
}
