"use strict";

var _blendPoints = require("../blendPoints");

var _colors = require("../colors");

var _mixColors = require("./mixColors");

var background = _colors.colors.background,
    text = _colors.colors.text;
describe('mixColors', function () {
  describe('light (stock theme)', function () {
    test('text1', function () {
      return expect((0, _mixColors.mixColors)(_blendPoints.textBlends[0], text, background)).toEqual('#9da0a3');
    });
    test('text5', function () {
      return expect((0, _mixColors.mixColors)(_blendPoints.textBlends[4], text, background)).toEqual(_colors.colors.text);
    });
  });
  describe('dark-mode', function () {
    test('text1', function () {
      return expect((0, _mixColors.mixColors)(_blendPoints.textBlends[0], background, text)).toEqual('#878b8e');
    });
    test('text5', function () {
      return expect((0, _mixColors.mixColors)(_blendPoints.textBlends[4], background, text)).toEqual(_colors.colors.background);
    });
  });
});
//# sourceMappingURL=mixColors.spec.js.map