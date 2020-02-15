import {fetch, push as pushy} from "@/Data/PushPull"

export class BaseCardModel {
  namespace!: string

  set name(name: string) {
    pushy([this.namespace, "card.name"], name)
  }
  get name() {
    return fetch(this.namespace, "card.name")
  }

  set title(title: string) {
    pushy([this.namespace, "header.title"], title)
  }
  get title() {
    return fetch(this.namespace, "header.title")
  }

  set subtitle(subtitle: string) {
    pushy([this.namespace, "header.subtitle"], subtitle)
  }
  get subtitle() {
    return fetch(this.namespace, "header.subtitle")
  }
}
