// Log the title and labels for the first page of blog posts on the G Suite Developers blog.
function parseXml(xml) {
    var document = XmlService.parse(xml);

    var root = document.getRootElement();

    var atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');
    var entries = document.getRootElement().getChildren('entry', atom);
    for (var i = 0; i < entries.length; i++) {
        var title = entries[i].getChild('title', atom).getText();
        var categoryElements = entries[i].getChildren('category', atom);
        var labels = [];
        for (var j = 0; j < categoryElements.length; j++) {
            labels.push(categoryElements[j].getAttribute('term').getValue());
        }
//        Logger.log('%s (%s)', title, labels.join(', '));
    }
    return root;
}

// Create and log an XML representation of the threads in your Gmail inbox.
function createXml(request) {
    let child;
    let temp;
    const dictionary = new Dictionary()

    traverse(request).forEach(function (x) {
        for (let prop in x) {
            if (!x.hasOwnProperty(prop)) {
                continue;
            }

            if (x[prop] === undefined) {
                continue;
            }
            if (this.isRoot) {
                root = XmlService.createElement((this.keys)[0])
                    .setAttribute("USERID", dictionary.secrets.API.USPS.USERID);
                temp = root;
                continue;
                //child = XmlService.createElement(prop);
                //root.addContent(child);
            }
            child = XmlService.createElement(prop);

            if(isString(x[prop])) {
                child.setText(x[prop])
            }
            temp.addContent(child)

            temp = child;
        }
    })

    const document = XmlService.createDocument(root);
    const xml = XmlService.getRawFormat().setEncoding('UTF-8').format(document);
    return xml;
}
