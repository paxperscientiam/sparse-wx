// Copyright (C) 2018 Christopher David Ramos
export class View {
  static render(route: string, data: InputObject): string {
    const templateBaseDir = "src/Views/"
    const template = HtmlService.createTemplateFromFile(
      `${templateBaseDir}${route}`)
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
}
