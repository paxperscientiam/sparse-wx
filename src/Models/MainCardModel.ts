import {fetch, push as pushy} from "@/Data/PushPull"

export class MainCardModel {
  set name(name: string) {
    pushy(["MainCardState", "card.name"], name)
  }
  get name() {
    return fetch("MainCardState", "card.name")
  }

  set title(title: string) {
    pushy(["MainCardState", "header.title"], title)
  }
  get title() {
    return fetch("MainCardState", "header.title")
  }

  set subtitle(subtitle: string) {
    pushy(["MainCardState", "header.subtitle"], subtitle)
  }
   get subtitle() {
    return fetch("MainCardState", "header.subtitle")
  }
}
