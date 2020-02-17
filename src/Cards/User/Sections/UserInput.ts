import { CardSectionFactory, WidgetFactory } from "@/Cards/Aux"

import {UserModel} from "@/Models/UserModel"

export function UserInputSection(): CardSection {
  // const model = new UserModel()
  // const isMint = model.isMint

  const cardSection = new CardSectionFactory()
  const widgetFactory = new WidgetFactory()

  cardSection
    .addWidget(widgetFactory._TextInput({
      fieldName: "user_name_key",
      hint: "How should SparseWx address you? (25 character max)",
      title: "Your Name (optional)",
    }))
  return cardSection.setCollapsible(false).build()
}
