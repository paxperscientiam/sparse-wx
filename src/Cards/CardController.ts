import {render} from "@/Handlers/Templates"
// import { View } from "@/Aux"
import { CardSectionFactory, WidgetFactory, CardFactory } from "@/Cards/Aux"

interface IDamn {
  route: string
  source: any
}

export class BaseCardController implements IDamn {
  route!: string
  view!: any
  source!: any

  card: any
  cardHeader: any

  constructor() {
    this.card = CardService.newCardBuilder()
    this.cardHeader = CardService.newCardHeader()
  }

  bindingContext(source: any) {
    this.source = source
    if (!!this.source.name) {
      this.setName()
    }
    if (!!this.source.title) {
      this.setTitle()
    }
    if (!!this.source.subtitle) {
      this.setSubtitle()
    }
  }

  setName() {
    this.card = this.card.setName(this.source.name)
    return this
  }

  setTitle() {
    this.cardHeader = this.cardHeader.setTitle(this.source.title)
    return this
  }

  setSubtitle() {
    this.cardHeader = this.cardHeader.setSubtitle(this.source.subtitle)
  }

  build() {
    return this.card.setHeader(this.cardHeader).build()
  }
}
