//     Copyright (C) 2018 Christopher David Ramos
import { render } from "~Handlers/Templates"

import { _CardSection, _Paragraph } from "~Cards/Aux"
//
export function DisclaimerSection(args = {}): CardSection {
    const data = {
        header: "Acknowledgments",
    }
    const cardSection = _CardSection(data)
        .addWidget(_Paragraph({
            text: render("userNotices", {
                license: dictionary.BRAND.URLS.LICENSE,
                nws: dictionary.BRAND.URLS.NWS,
                privacy: dictionary.BRAND.URLS.PRIVACY,
            }),
        }))

    // @ts-ignore
    if (args.widget) {
        cardSection.addWidget(CardService.newImage().setAltText("A nice image").setImageUrl("https://raw.githubusercontent.com/paxperscientiam/sparse-wx/test-flag/Img/out/us-flag-large.png"))
    }

    return cardSection
        .setCollapsible(true)
        .build()
}
