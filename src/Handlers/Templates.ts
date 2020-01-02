//     Copyright (C) 2018 Christopher David Ramos
export function render(templateFileName: string, data: object): string {
  const templateBaseDir = "Templates/"
  const template = HtmlService.createTemplateFromFile(
    `${templateBaseDir}${templateFileName}`)
  // make sure not to pass undefined, null, or empty string to template engine
  Object.keys(data).forEach((key) => {
    if (data[key] == null) {
      data[key] = " "
    }
  })
  // @ts-ignore
  template.data = data
  return template.evaluate().getContent()
}
