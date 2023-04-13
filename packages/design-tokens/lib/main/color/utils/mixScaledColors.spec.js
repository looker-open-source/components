"use strict";

var _blendPoints = require("../blendPoints");
var _colors = require("../colors");
var _mixScaledColors = require("./mixScaledColors");

var background = _colors.colors.background,
  text = _colors.colors.text;
describe('mixScaledColors', function () {
  test('default', function () {
    expect((0, _mixScaledColors.mixScaledColors)(_blendPoints.uiBlends[3], text, background)).toEqual('#b5b7b9');
  });
  test('dark mode', function () {
    expect((0, _mixScaledColors.mixScaledColors)(_blendPoints.uiBlends[3], background, text)).toEqual('#a3a6a8');
  });
  test('low but not super low luminance', function () {
    expect((0, _mixScaledColors.mixScaledColors)(_blendPoints.uiBlends[0], '#fff', '#555')).toEqual('#5d5d5d');
  });
});
//# sourceMappingURL=mixScaledColors.spec.js.map