//     Copyright (C) 2018 Christopher David Ramos
function serializeObject(object) {
    return JSON.stringify(object)
}

function parseObject(objAsString) {
    return JSON.parse(objAsString)
}

function setScriptObjectProperty(reference, object) {
    scriptProperties.setProperty(reference, serializeObject(object))
}

function getScriptObjectProperty(reference) {
    return parseObject(scriptProperties.getProperty(reference))
}

function setUserObjectProperty(reference, object) {
    userProperties.setProperty(reference, serializeObject(object))
}

function getUserObjectProperty(reference) {
    return parseObject(userProperties.getProperty(reference))
}

function cleanObject(object, refObject) {
    //
}

function serializedObjectIOTest() {
    var obj = {
        a: 7,
        b: {
            home: 123,
            garage: 72453,
        }
    };
    setScriptObjectProperty("testObject", obj)

    var _obj = getScriptObjectProperty("testObject");

    _obj.b.home = 124124
    setScriptObjectProperty("testObject", _obj)

    Logger.log(getScriptObjectProperty("testObject").b)



    var strObj = JSON.stringify(obj)
    // Logger.log(obj['b']['home'])


}
