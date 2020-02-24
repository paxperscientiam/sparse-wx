// Compiled using ts2gas 3.4.4 (TypeScript 3.7.4)
var exports = exports || {};
var module = module || { exports: exports };
"use strict";
function dumpScriptConfig() {
    return PropertiesService.getScriptProperties().getProperties();
}
function dumpUserConfig() {
    return PropertiesService.getUserProperties().getProperties();
}
function dumpConfig() {
    var sc = dumpScriptConfig();
    var uc = dumpUserConfig();
    return [{ scriptConfig: sc }, { userConfig: uc }];
}
function clearUserProperties() {
    Logger.log("Delete Local NPT User Properties:");
    if (PropertiesService.getUserProperties() !== null) {
        Logger.log(PropertiesService.getUserProperties().deleteAllProperties());
        Logger.log("  Deleted");
    }
    else {
        Logger.log("  None");
    }
}
function clearScriptProperties() {
    Logger.log("Delete Local Script Properties:");
    if (PropertiesService.getScriptProperties() !== null) {
        Logger.log(PropertiesService.getScriptProperties().deleteAllProperties());
        Logger.log("  Deleted");
    }
    else {
        Logger.log("  None");
    }
}
function clearConfig() {
    clearUserProperties();
    clearScriptProperties();
}
function bsTest() {
    return "bs";
}
