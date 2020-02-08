import {fetch, push as pushy} from "@/Data/PushPull"

export class BaseCardModel {
    namespace!: string

    set name(name: string) {
        pushy([this.namespace, "card.name"], name)
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
