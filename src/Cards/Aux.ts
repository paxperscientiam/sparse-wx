//     Copyright (C) 2018 Christopher David Ramos
import {fetch, push as pushy} from "@/Data/PushPull"

interface ICardData {
  image?: any,
  name?: string,
  title?: string,
  subtitle?: string,
}

interface ICardWrapper extends CardBuilder {
  // (data: ICardData): InstanceType<this>
  addSections: (sections: CardSection[]) => this
  setHeader: (cardHeader: CardHeader) => this
  setName: (name: string) => this
}

interface ICardSectionData {
  header?: string
}

interface ICardSectionWrapper {
  // (data: ICardSectionData): CardSectionFactory
  data: ICardSectionData
  section: CardSection

  addWidgets: (widgets: Widget[]) => this
  addWidget: (widget: Widget) => this
  setCollapsible: (value: boolean) => this
  build: () => CardSection
}

interface IWidgetData {
  fieldName: string
  title: string
  hint: string

}
interface IWidgetSuggestionsData extends IWidgetData {
  suggestions: Action
}
interface IWidgetSuggestionsData extends IWidgetData {
  suggestions: Action
}
interface IWidgetSelectionData extends IWidgetData {
  type: SelectionInputType
  items: any[]
}

// model
export class CardFactory implements ICardWrapper {
  card: CardBuilder = CardService.newCardBuilder()
  cardHeader: CardHeader = CardService.newCardHeader()

  constructor(data: ICardData) {
    if (data.name) {
      this.card.setName(data.name)
    }
    if (data.title) {
      this.cardHeader.setTitle(data.title)
    }
    if (data.subtitle) {
      this.cardHeader.setSubtitle(data.subtitle)
    }
    if (data.image) {
      this.cardHeader.setImageUrl(data.image)
    }
    this.card.setHeader(this.cardHeader)
  }

  addSections(sections: CardSection[]) {
    sections.forEach((section: CardSection) => {
      if (section != null) {
        this.card.addSection(section)
      }
    })
    return this
  }

  addSection(section: CardSection) {
    this.card.addSection(section)
    return this
  }

  addCardAction() {
    return this
  }

  build() {
    return this.card.build()
  }

  setName(name: string) {
    this.card.setName(name)
    return this
  }

  setHeader(cardHeader: CardHeader) {
    this.card.setHeader(cardHeader)
    return this
  }
}

export class CardSectionFactory implements ICardSectionWrapper {
  data: ICardSectionData = {}
  section: CardSection = CardService.newCardSection()

  constructor(args?: ICardSectionData) {
    this.data = {
      header: " ",
      ...args,
    }

    if (typeof this.data.header === "string") {
      this.section.setHeader(this.data.header)
      pushy(["state", "display.transient.card.section.header"], this.data.header)
    }

  }

  addWidget(widget: Widget) {
    this.section.addWidget(widget)
    return this
  }

  addWidgets(widgets: Widget[]) {
    widgets.forEach((widget: Widget) => {
      this.section.addWidget(widget)
    })
    return this
  }

  setCollapsible(value: boolean) {
    this.section.setCollapsible(value)
    return this
  }

  build() {
    return this.section
  }
}

export class WidgetFactory {
  newTextInput(data: IWidgetSuggestionsData) {
    const widget = CardService.newTextInput()
      .setFieldName(data.fieldName)
      .setTitle(data.title)
      .setHint(data.hint)

    if (data.suggestions) {
      widget.setSuggestionsAction(data.suggestions)
    }
    return widget
  }

  newSelectionInput(data: IWidgetSelectionData): SelectionInput {
    const widget = CardService.newSelectionInput()
      .setFieldName(data.fieldName)
      .setTitle(data.title)

    // @ts-ignore
    if (data.type === "DROPDOWN") {
      widget
        .setType(CardService.SelectionInputType.DROPDOWN)
    }

    const items = data.items

    items.forEach((item) => {
      let isSelected = false
      if (fetch("user", "temp_unit") === item.value) {
        isSelected = true
      }
      widget.addItem(item.text, item.value, isSelected)
    })
    return widget
  }

  newTextParagraph(data: {text: string}): TextParagraph {
    return CardService.newTextParagraph()
      .setText(data.text)
  }

  newTextButton(data: any): TextButton {
    const widget = CardService.newTextButton()
      .setText(data.text)

    if (data.action) {
      widget.setOnClickAction(data.action)
    }
    return widget
  }

  newKeyValue(data: any): KeyValue {
    const widget = CardService.newKeyValue()
      .setContent(data.content)

    if (data.iconUrl) {
      widget.setIconUrl(data.iconUrl)
    }
    //     if (data.icon) {
    //       widget.setIcon(data.icon)
    //     }
    if (data.multiline) {
      widget.setMultiline(data.multiline)
    }
    return widget
  }

  _TextInput(data: any): TextInput {
    return this.newTextInput(data)
  }

  _SelectionInput(data: any): SelectionInput {
    return this.newSelectionInput(data)
  }

  _Paragraph(data: any): TextParagraph {
    return this.newTextParagraph(data)
  }

  _TextButton(data: any): TextButton {
    return this.newTextButton(data)
  }

  _KeyValue(data: any): KeyValue {
    return this.newKeyValue(data)
  }
}

interface IView {
  route: string
  data: {[prop: string]: string}
}
// @ts-ignore
export class View implements IView {
  static route: string = ""
  static data: {[prop: string]: string} = {}
}
