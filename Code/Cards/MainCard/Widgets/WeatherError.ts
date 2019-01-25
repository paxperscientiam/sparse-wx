function WeatherErrorWidget(noWXcomment: string) {
    const UI = dictionary.UI.ICONS
    //
    Logger.log(UI)
    return CardService.newKeyValue()
        .setIconUrl(UI.WX.ERROR)
        .setContent(noWXcomment)
        .setMultiline(true)
}
