//     Copyright (C) 2018 Christopher David Ramos
function doGet(templateFileName, data) {
    const html = HtmlService.createTemplateFromFile(templateFileName)
    html.data = data
    return html.evaluate().getContent()
}
