var __fuse = (function() {
  var f = {};
  var modules = f.modules = f.modules || {}; f.dt = function (x) { return x && x.__esModule ? x : { "default": x }; };

f.modules = modules;
  f.bundle = function(collection, fn) {
    for (var num in collection) {
      modules[num] = collection[num];
    }
    fn ? fn() : void 0;
  };
  f.c = {};
  f.r = function(id) {
    var cached = f.c[id];
    if (cached) return cached.m.exports;
    var module = modules[id];
    if (!module) {
      
      throw new Error('Module ' + id + ' was not found');
    }
    cached = f.c[id] = {};
    cached.exports = {};
    cached.m = { exports: cached.exports };
    module(f.r, cached.exports, cached.m);
    return cached.m.exports;
  }; 
	return f;
})();
__fuse.bundle({

// src/index.ts @1
1: function(__fusereq, exports, module){
const userProperties = PropertiesService.getUserProperties();
globalThis.userProperties = userProperties;
globalThis.buildAddOn = () => {
  var card = CardService.newCardBuilder().setName("Card name").setHeader(CardService.newCardHeader().setTitle("Card title")).build();
  return card;
};
globalThis.buildHomePage = () => {
  var cardSection = CardService.newCardSection().addWidget(CardService.newKeyValue().setIconUrl("https://icon.png").setContent("KeyValue widget with an image on the left and text on the right"));
  var card = CardService.newCardBuilder().setName("Card name").setHeader(CardService.newCardHeader().setTitle("Homepage")).addSection(cardSection).build();
  return card;
};

}
}, function(){
__fuse.r(1)
})
//# sourceMappingURL=app.js.map