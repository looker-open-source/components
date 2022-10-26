"use strict";

var _convertRemToPx = require("./convertRemToPx");

test('convertRemToPx', function () {
  expect((0, _convertRemToPx.convertRemToPx)(1)).toEqual(16);
  expect((0, _convertRemToPx.convertRemToPx)(1.5)).toEqual(24);
  expect((0, _convertRemToPx.convertRemToPx)(0.5)).toEqual(8);
});
//# sourceMappingURL=convertRemToPx.spec.js.map