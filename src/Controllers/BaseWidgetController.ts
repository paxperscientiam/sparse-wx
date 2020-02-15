export function newTextInput(data: IWidgetSuggestionsData) {
  const widget = CardService.newTextInput()
    .setFieldName(data.fieldName)
    .setTitle(data.title)
    .setHint(data.hint)

  if (data.suggestions) {
    widget.setSuggestionsAction(data.suggestions)
  }
  return widget
}

export function newTextParagraph(data: {text: string}): TextParagraph {
    return CardService.newTextParagraph()
      .setText(data.text)
}



// export class WidgetFactory {
//   newTextInput(data: IWidgetSuggestionsData) {
//     const widget = CardService.newTextInput()
//       .setFieldName(data.fieldName)
//       .setTitle(data.title)
//       .setHint(data.hint)

//     if (data.suggestions) {
//       widget.setSuggestionsAction(data.suggestions)
//     }
//     return widget
//   }

//   const x: SelectionMode

//   newSelectionInput(data: IWidgetSelectionData): SelectionInput {
//     const widget = CardService.newSelectionInput()
//       .setFieldName(data.fieldName)
//       .setTitle(data.title)

//     // @ts-ignore
//     if (data.type === "DROPDOWN") {
//       widget
//         .setType(CardService.SelectionInputType.DROPDOWN)
//     }

//     const items = data.items

//     items.forEach((item) => {
//       let isSelected = false
//       if (fetch("user", "temp_unit") === item.value) {
//         isSelected = true
//       }
//       widget.addItem(item.text, item.value, isSelected)
//     })
//     return widget
//   }

//   newTextParagraph(data: {text: string}): TextParagraph {
//     return CardService.newTextParagraph()
//       .setText(data.text)
//   }

//   newTextButton(data: any): TextButton {
//     const widget = CardService.newTextButton()
//       .setText(data.text)

//     if (data.action) {
//       widget.setOnClickAction(data.action)
//     }
//     return widget
//   }

//   newKeyValue(data: any): KeyValue {
//     const widget = CardService.newKeyValue()
//       .setContent(data.content)

//     if (data.iconUrl) {
//       widget.setIconUrl(data.iconUrl)
//     }
//     //     if (data.icon) {
//     //       widget.setIcon(data.icon)
//     //     }
//     if (data.multiline) {
//       widget.setMultiline(data.multiline)
//     }
//     return widget
//   }

//   _TextInput(data: any): TextInput {
//     return this.newTextInput(data)
//   }

//   _SelectionInput(data: any): SelectionInput {
//     return this.newSelectionInput(data)
//   }

//   _Paragraph(data: any): TextParagraph {
//     return this.newTextParagraph(data)
//   }

//   _TextButton(data: any): TextButton {
//     return this.newTextButton(data)
//   }

//   _KeyValue(data: any): KeyValue {
//     return this.newKeyValue(data)
//   }
// }
