//     Copyright (C) 2018 Christopher David Ramos
interface ICardWrapper extends CardBuilder {
  (data): any
  addSections: (sections: CardSection[]) => this
}

export function _Card(data): ICardWrapper {
  const objCardBuilder = Object.create(objCardMethods)

  const card = CardService.newCardBuilder()
  const cardHeader = CardService.newCardHeader()

  if (data.name) {
    card.setName(data.name)
  }

  if (data.title) {
    cardHeader.setTitle(data.title)
  }
  if (data.subtitle) {
    cardHeader.setSubtitle(data.subtitle)
  }
  if (data.image) {
    cardHeader.setImageUrl(data.image)
  }

  card.setHeader(cardHeader)

  objCardBuilder.data = data
  objCardBuilder.card = card
  return objCardBuilder
}

const objCardMethods = {
  addSections(sections: CardSection[]) {
    sections.forEach((section: CardSection) => {
      if (section != null) {
        this.card.addSection(section)
      }
    })
    return this
  },

  addSection(section: CardSection) {
    this.card.addSection(section)
    return this
  },

  build() {
    return this.card.build()
  },

  setName(name) {
    this.card.setName(name)
    return this
  },

  setHeader(cardHeader: CardHeader) {
    this.card.setHeader(cardHeader)
    return this
  },

  _() {
    return this.card
  },
}

interface ICardSectionWrapper {
  (data?): any
  addWidgets: (widgets: Widget[]) => this
  addWidget: (widget: Widget) => this
  setCollapsible: (value: boolean) => this
  build: () => CardSection
}

export function _CardSection(args?): ICardSectionWrapper {
  const data = {
    header: " ",
    ...args,
  }

  const objCardSectionBuilder = Object.create(objCardSectionMethods)

  const section = CardService.newCardSection()

  if (typeof data.header === "string") {
    section.setHeader(data.header)
    push(["state", "display.transient.card.section.header"], data.header)
  }

  objCardSectionBuilder.section = section
  return objCardSectionBuilder
}

const objCardSectionMethods = {
  addWidget(widget: Widget) {
    this.section.addWidget(widget)
    return this
  },

  addWidgets(widgets: Widget[]) {
    widgets.forEach((widget: Widget) => {
      this.section.addWidget(widget)
    })
    return this
  },

  setCollapsible(value: boolean) {
    this.section.setCollapsible(value)
    return this
  },

  build() {
    return this.section
  },
}

export function _Widget(): Widget {
  const objWidgetBuilder = Object.create(objWidgetMethods)
  return objWidgetBuilder
}

const objWidgetMethods = {
  newTextInput(data) {
    const widget = CardService.newTextInput()
      .setFieldName(data.fieldName)
      .setTitle(data.title)
      .setHint(data.hint)

    if (data.suggestions) {
      widget.setSuggestionsAction(data.suggestions)
    }
    return widget
  },

  newSelectionInput(data): SelectionInput {
    const widget = CardService.newSelectionInput()
      .setFieldName(data.fieldName)
      .setTitle(data.title)

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
  },

  newTextParagraph(data): TextParagraph {
    return CardService.newTextParagraph()
      .setText(data.text)
  },

  newTextButton(data): TextButton {
    const widget = CardService.newTextButton()
      .setText(data.text)

    if (data.action) {
      widget.setOnClickAction(data.action)
    }
    return widget
  },

  newKeyValue(data): KeyValue {
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
  },

}

export function _TextInput(data): TextInput {
  return objWidgetMethods.newTextInput(data)
}

export function _SelectionInput(data): SelectionInput {
  return objWidgetMethods.newSelectionInput(data)
}

export function _Paragraph(data): TextParagraph {
  return objWidgetMethods.newTextParagraph(data)
}

export function _TextButton(data): TextButton {
  return objWidgetMethods.newTextButton(data)
}

export function _KeyValue(data): KeyValue {
  return objWidgetMethods.newKeyValue(data)
}
