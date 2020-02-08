//     Copyright (C) 2018 Christopher David Ramos
import { NavButtonsWidget } from "@/Cards/Main/Widgets/NavButtons"

import { CardSectionFactory } from "@/Cards/Aux"

export function NavSection(): CardSection {
  return new CardSectionFactory()
    .addWidget(NavButtonsWidget())
    .build()
}
