import {push as pushy} from "@/Data/PushPull"

interface ICardSectionData {
  header?: string
}

interface ICardSectionWrapper {
  // (data: ICardSectionData): CardSectionFactory
  source: ICardSectionData
  cardSection: CardSection

  addWidgets: (widgets: Widget[]) => this
  addWidget: (widget: Widget) => this
  setCollapsible: (value: boolean) => this
  build: () => CardSection
}

export class BaseCardSectionController implements ICardSectionWrapper {
  cardSection!: CardSection

  source!: ICardSectionData

  constructor() {
    this.cardSection = CardService.newCardSection()
  }

  bindingContext(args?: ICardSectionData) {
    this.source = {
      header: " ",
      ...args,
    }

    if (typeof this.source.header === "string") {
      this.cardSection.setHeader(this.source.header)
      pushy(["state", "display.transient.card.section.header"], this.source.header)
    }
  }

  addWidget(widget: Widget) {
    this.cardSection.addWidget(widget)
    return this
  }

  addWidgets(widgets: Widget[]) {
    widgets.forEach((widget: Widget) => {
      this.cardSection.addWidget(widget)
    })
    return this
  }

  setCollapsible(value: boolean) {
    this.cardSection.setCollapsible(value)
    return this
  }

  build() {
    return this.cardSection
  }
}
