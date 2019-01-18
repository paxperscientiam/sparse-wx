function WeatherErrorWidget(noWXcomment: string) {
    const UI = dictionary.UI
    //
    return CardService.newKeyValue()
        .setIconUrl(UI.WX.ERROR)
        .setContent(noWXcomment)
        .setMultiline(true)
}
