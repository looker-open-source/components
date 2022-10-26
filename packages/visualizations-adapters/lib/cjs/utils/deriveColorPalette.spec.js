"use strict";

var _deriveColorPalette = require("./deriveColorPalette");

describe('deriveColorPalette', function () {
  test('it creates an color alternates from a base set', function () {
    var colorPalette = (0, _deriveColorPalette.deriveColorPalette)(['#fa8072']);
    expect(colorPalette).toMatchInlineSnapshot("\n      Array [\n        \"#fa8072\",\n        \"#fae87f\",\n        \"#a8fa72\",\n        \"#fa72ec\",\n        \"#c472fa\",\n        \"#72ecfa\",\n        \"#ff604e\",\n        \"#ba4639\",\n        \"#ba8983\",\n        \"#83b5ba\",\n      ]\n    ");
  });
});
//# sourceMappingURL=deriveColorPalette.spec.js.map