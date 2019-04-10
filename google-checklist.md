
pre-publication checklist [link](https://developers.google.com/gmail/add-ons/how-tos/publish)
- [ ] choose visibility (public or private)


Requirements, before submitting for review
- [ ] Must be fully functional.
- [ ] Tested as an unpublished addon with multiple active users [link](https://developers.google.com/gmail/add-ons/how-tos/install-unpublished)
- [ ] Script name is same as the name intended for publication (the script name appears in the authorization dialog)
- [ ] adhere to style guidelines [link](https://developers.google.com/gmail/add-ons/guides/style-guide)


Technical requirements
- [x] Manifest must be well defined [link](https://developers.google.com/gmail/add-ons/concepts/manifests)
- [ ] the add-on script has error-handling and shows relevant error messages to the user.
- [ ] All users of the add-on can access any hosted image used in your add-on
- [ ] Use versioned deployment [deployment](https://developers.google.com/apps-script/concepts/deployments#creating_a_versioned_deployment) [version](https://developers.google.com/apps-script/guides/versions)

Data protection requirements
- [x] set explicit scopes in manifest
- [x] ensure urlfetch whitelist only uses legitimate 3rd party APIs, sets of endpoints you control
- [x] the OpenLink action url should be whitelisted as well under `gmail.openLinkUrlPrefixes`


Marketplace listing asset requirements [link](https://developers.google.com/gsuite/marketplace/sdk#assets_needed_for_marketplace_listings)
- [ ] application banner image sized to 220 x 140 pixels
- [ ] Screenshots >1 or <=5, full bleed, 128 x 800 pixels
- [ ] Icon images sized 128 x 128 and 32 x 32
- [ ] "Application name" which should match the "product name" shown to users in the authorization consent screen. No longer than 15 characters. Do not use the word "Google" or other product names
- [ ] Short application description (200 characters max)
- [ ] Detailed description. Less than 16,000c
- [ ] list of required scopes
- [ ] optional: developer name
- [ ] optional: developer email

Market place URLs
- [ ] privacy policy
- [ ] Terms of Service URL
- [ ] Developer website
- [ ] application website url
- [ ] support url
- [ ] product logo url


Configure Marketplace SDK
- [ ] Select "Publish" tab and follow directions
- [ ] Enable individual install on Configuration panel
- [ ] set visibility
- [ ] Set the "reach" in the Publish panel


https://developers.google.com/gmail/add-ons/how-tos/publish
https://developers.google.com/gmail/add-ons/how-tos/publish#step_3_request_review_for_public_add-ons
https://developers.google.com/terms/api-services-user-data-policy
https://developers.google.com/gmail/add-ons/how-tos/publish#step_4_enable_the_marketplace_sdk
