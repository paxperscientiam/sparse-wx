import {fetch, push as pushy} from "@/Data/PushPull"

export class ApplicationModel {
  namespace: string = "ApplicationState"
  // private _inputTemperatureUnit: string = "F"

  constructor() {
    pushy([this.namespace, "application.input.temperatureUnit.options"], "dropdown_item_f, dropdown_item_c")
  }

  // submitted address
  set address(address: string) {
    pushy([this.namespace, "application.input.user_address_key"], address)
  }
  get address() {
    return fetch(this.namespace, "application.input.user_address_key")
  }

  set isMint(bool: boolean) {
    pushy([this.namespace, "application.mint"], bool)
  }
  get isMint() {
    return fetch(this.namespace, "application.mint")
  }

  set isUserNameValid(bool: boolean) {
    pushy([this.namespace, "application.valid.username"], bool)
  }
  get isUserNameValid() {
    return fetch(this.namespace, "application.valid.username")
  }

  set isAddressValid(bool: boolean) {
     pushy([this.namespace, "application.valid.address"], bool)
  }
  get isAddressValid() {
     return fetch(this.namespace, "application.valid.address")
  }

  // set inputTemperatureUnit(unit: string) {
  //   push([this.namespace, "application.input.temperatureUnit.values"], "dropdown_item_f, dropdown_item_c")
  // }
}
