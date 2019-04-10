//     Copyright (C) 2018 Christopher David Ramos
import { render } from "Handlers/Templates"

import { _CardSection, _Paragraph } from "Cards/Aux"
//
export function DisclaimerSection(): CardSection {
  const data = {
    header: "Acknowledgments",
  }
  return _CardSection(data)
    .addWidget(_Paragraph({
      text: render("userNotices", {
        license: dictionary.BRAND.URLS.LICENSE,
        nws: dictionary.BRAND.URLS.NWS,
        privacy: dictionary.BRAND.URLS.PRIVACY,
      }),
    }))
    .setCollapsible(true)
    .build()
}
