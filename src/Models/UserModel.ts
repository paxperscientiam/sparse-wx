import {fetch, push as pushy} from "@/Data/PushPull"

export class UserModel  {
  private namespace: string = "user"

  set name(name: string) {
    pushy([this.namespace, "name"], name)
  }
  get name() {
    return fetch(this.namespace, "name")
  }

  set address(address: string) {
    pushy([this.namespace, "address"], address)
  }
  get address() {
    return fetch(this.namespace, "address")
  }

  set zipcode(zip: string) {
    pushy([this.namespace, "zipcode"], zip)
  }
  get zipcode() {
    return fetch(this.namespace, "zipcode")
  }

  set country(country: string) {
    pushy([this.namespace, "country"], country)
  }
  get country() {
    return fetch(this.namespace, "country")
  }

  set isMint(bool: boolean) {
    pushy([this.namespace, "newuser"], bool)
  }
  get isMint() {
    return fetch(this.namespace, "newuser")
  }

  set temperatureUnit(unit: string) {
    pushy([this.namespace, "temperatureunit"], unit)
  }

  get temperatureUnit() {
    return fetch(this.namespace, "temperatureunit")
  }
}
