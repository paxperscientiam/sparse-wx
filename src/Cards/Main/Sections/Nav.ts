//     Copyright (C) 2018 Christopher David Ramos
import { NavButtonsWidget } from "~Cards/Main/Widgets/NavButtons"

import { _CardSection } from "~Cards/Aux"

export function NavSection(): CardSection {
  return _CardSection()
    .addWidget(NavButtonsWidget())
    .build()
}
