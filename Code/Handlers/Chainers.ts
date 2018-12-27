//     Copyright (C) 2018 Christopher David Ramos
function ChainSections(card, sections) {
    sections.forEach((section) => {
        card.addSection(section)
    })
    return card
}

function ChainWidgets(section, widgets) {
    widgets.forEach((w) => {
        if (w === false) {
            return false
        }
        section.addWidget(w)
    })
    return section
}
