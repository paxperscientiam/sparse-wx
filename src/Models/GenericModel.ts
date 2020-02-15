import {fetch, push as pushy} from "@/Data/PushPull"

interface LooseObject {
  namespace: string
  [key: string]: any
  data: any
}

export class GenericModel implements LooseObject {
  namespace!: string

  set data(args: [string, any]) {
    pushy([this.namespace, args[0]], args[1])
  }

  get data() {
    return fetch(this.namespace)
  }
}
