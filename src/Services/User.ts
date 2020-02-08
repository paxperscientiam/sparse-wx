//     Copyright (C) 2018 Christopher David Ramos

import { timeStamp } from "~Utilities/Date"

import {fetch, push as pushy} from "~Data/PushPull"

export function checkUserServiceStatus(): string {
  const lat = fetch("user", "lat")
  if (!lat) {
    Logger.log(`[${timeStamp()}][status.user] ERR as no coordinates`)
    pushy(["state", "status.user"], "ERR")
    return "ERR"
  }
  Logger.log(`[${timeStamp()}][status.user] OK`)
  pushy(["state", "status.user"], "OK")
  return "OK"
}
