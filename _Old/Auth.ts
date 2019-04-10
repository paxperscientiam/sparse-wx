//     Copyright (C) 2018 Christopher David Ramos
function getServices() {
    Logger.log("cal serve auth")
    // Create a new service with the given name. The name will be used when
    // persisting the authorized token, so ensure it is unique within the
    // scope of the property store.
    return OAuth2.createService("Sparsewx")

    // Set the endpoint URLs, which are the same for all Google services.
        .setAuthorizationBaseUrl("https://accounts.google.com/o/oauth2/auth")
        .setTokenUrl("https://accounts.google.com/o/oauth2/token")

    // Set the client ID and secret, from the Google Developers Console.
        .setClientId("276882532372-j2pc54nmr68aom9njbm3dqh84si54p6n.apps.googleusercontent.com")
        .setClientSecret("MzR8dOb1AotYudKiGDRDXR8t")

    // Set the name of the callback function in the script referenced
    // above that should be invoked to complete the OAuth flow.
        .setCallbackFunction("authCallback")
        .setCache(CacheService.getUserCache())
    // Set the property store where authorized tokens should be persisted.
        .setPropertyStore(PropertiesService.getUserProperties())

        .setLock(LockService.getUserLock())

    // Set the scopes to request (space-separated for Google services).
    // tslint:disable-next-line:max-line-length
        .setScope("https://www.googleapis.com/auth/calendar.readonly" "https://www.googleapis.com/auth/gmail.addons.execute" "https://www.googleapis.com/auth/script.external_request" "https://www.googleapis.com/auth/script.locale")

    // Below are Google-specific OAuth2 parameters.

    // Sets the login hint, which will prevent the account chooser screen
    // from being shown to users logged in with multiple accounts.
        .setParam("login_hint", Session.getActiveUser().getEmail())

    // Requests offline access.
    //   .setParam("access_type", "offline")

    // Forces the approval prompt every time. This is useful for testing,
    // but not desirable in a production application.
        .setParam("approval_prompt", "force")
}

function authCallback(request) {
    Logger.log("auth callback")
    const template = HtmlService.createTemplateFromFile("Templates/callback")
    template.email = Session.getEffectiveUser().getEmail()
    template.isSignedIn = false
    template.error = null
    let title
    try {
        const service = getGitHubService()
        const authorized = service.handleCallback(request)
        template.isSignedIn = authorized
        title = authorized ? "Access Granted" : "Access Denied"
    } catch (e) {
        template.error = e
        title = "Access Error"
    }
    template.title = title
    return template.evaluate()
        .setTitle(title)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
}

/**
 * Logs the redict URI to register in the Google Developers Console.
 */
// function logRedirectUri() {
//     var service = getGitHubService()
//     Logger.log(service.getRedirectUri())
// }

/**
 * Includes the given project HTML file in the current HTML project file.
 * Also used to include JavaScript.
 * @param {String} filename Project file name.
 */
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent()
}
