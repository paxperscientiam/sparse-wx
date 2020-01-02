//     Copyright (C) 2018 Christopher David Ramos

import { timeStamp } from "~Utilities/Date"

export function checkUserServiceStatus(): string {
  const lat = fetch("user", "lat")
  if (!lat) {
    Logger.log(`[${timeStamp()}][status.user] ERR as no coordinates`)
    push(["state", "status.user"], "ERR")
    return "ERR"
  }
  Logger.log(`[${timeStamp()}][status.user] OK`)
  push(["state", "status.user"], "OK")
  return "OK"
}
