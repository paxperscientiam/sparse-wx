function dumpScriptConfig(): any {
  return PropertiesService.getScriptProperties().getProperties()
}

function dumpUserConfig(): any {
  return PropertiesService.getUserProperties().getProperties()
}

function dumpConfig(): any[] {
  const sc = dumpScriptConfig()
  const uc = dumpUserConfig()
  return [{scriptConfig: sc}, {userConfig: uc}]
}

function clearUserProperties(): void {
  Logger.log("Delete Local NPT User Properties:")
  if (PropertiesService.getUserProperties() !== null) {
    Logger.log(PropertiesService.getUserProperties().deleteAllProperties())
    Logger.log("  Deleted")
  } else {
    Logger.log("  None")
  }
}

function clearScriptProperties(): void {
  Logger.log("Delete Local Script Properties:")
  if (PropertiesService.getScriptProperties() !== null) {
    Logger.log(PropertiesService.getScriptProperties().deleteAllProperties())
    Logger.log("  Deleted")
  } else {
    Logger.log("  None")
  }
}

function clearConfig(): void {
  clearUserProperties()
  clearScriptProperties()
}

function bsTest(): string {
  return "bs"
}
