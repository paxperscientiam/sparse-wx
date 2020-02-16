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
}
