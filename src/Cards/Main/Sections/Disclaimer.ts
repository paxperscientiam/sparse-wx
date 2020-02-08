//     Copyright (C) 2018 Christopher David Ramos
import { render } from "@/Handlers/Templates"

import { CardSectionFactory, WidgetFactory } from "@/Cards/Aux"
const widgetFactory = new WidgetFactory()

import {BRAND} from "@/Data/Dictionary"
//
export function DisclaimerSection(args = {}): CardSection {
    const data = {
        header: "Acknowledgments",
    }
    const cardSection = new CardSectionFactory(data)
        .addWidget(widgetFactory._Paragraph({
            text: render("userNotices", {
                license: BRAND.URLS.LICENSE,
                nws: BRAND.URLS.NWS,
                privacy: BRAND.URLS.PRIVACY,
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
