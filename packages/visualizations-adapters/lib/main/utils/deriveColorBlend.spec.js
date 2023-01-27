"use strict";

var _deriveColorBlend = require("./deriveColorBlend");

it('blends white to black, defaulting to 5 steps', function () {
  var palette = (0, _deriveColorBlend.deriveColorBlend)('#ffffff', '#000000');
  expect(palette).toMatchInlineSnapshot("\n     Array [\n       \"#ffffff\",\n       \"#bfbfbf\",\n       \"#808080\",\n       \"#404040\",\n       \"#000000\",\n     ]\n   ");
});

it('fades a single color to black in a provided number of steps', function () {
  var palette = (0, _deriveColorBlend.deriveColorBlend)('#ff0000', '#000000', 10);
  expect(palette).toMatchInlineSnapshot("\n     Array [\n       \"#ff0000\",\n       \"#e30000\",\n       \"#c60000\",\n       \"#aa0000\",\n       \"#8e0000\",\n       \"#710000\",\n       \"#550000\",\n       \"#390000\",\n       \"#1c0000\",\n       \"#000000\",\n     ]\n   ");
});

it('fades from white to any color in a provided number of steps', function () {
  var palette = (0, _deriveColorBlend.deriveColorBlend)('#ffffff', '#ff0000', 10);
  expect(palette).toMatchInlineSnapshot("\n    Array [\n      \"#ffffff\",\n      \"#ffe3e3\",\n      \"#ffc6c6\",\n      \"#ffaaaa\",\n      \"#ff8e8e\",\n      \"#ff7171\",\n      \"#ff5555\",\n      \"#ff3939\",\n      \"#ff1c1c\",\n      \"#ff0000\",\n    ]\n  ");
});
it('blends two colors with different hues with one step in between', function () {
  var palette = (0, _deriveColorBlend.deriveColorBlend)('#5A2FC2', '#4285F4', 3);
  expect(palette).toMatchInlineSnapshot("\n    Array [\n      \"#5a2fc2\",\n      \"#383fdb\",\n      \"#4285f4\",\n    ]\n  ");
});
it('returns the unmodified colors when steps argument is set to 2', function () {
  var palette = (0, _deriveColorBlend.deriveColorBlend)('#5A2FC2', '#4285F4', 3);
  expect(palette).toMatchInlineSnapshot("\n    Array [\n      \"#5a2fc2\",\n      \"#383fdb\",\n      \"#4285f4\",\n    ]\n  ");
});
it('returns only the base color when color stops is set to 1', function () {
  var palette = (0, _deriveColorBlend.deriveColorBlend)('#5A2FC2', '#4285F4', 1);
  expect(palette).toMatchInlineSnapshot("\n    Array [\n      \"#5a2fc2\",\n    ]\n  ");
});
it('returns a blank array when color stops is set to 0', function () {
  var palette = (0, _deriveColorBlend.deriveColorBlend)('#5A2FC2', '#4285F4', 0);
  expect(palette).toMatchInlineSnapshot("Array []");
});
//# sourceMappingURL=deriveColorBlend.spec.js.map