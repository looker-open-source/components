"use strict";

var _blendPoints = require("../blendPoints");

var _colors = require("../colors");

var _tintOrShadeUiColor = require("./tintOrShadeUiColor");

var background = _colors.colors.background,
    text = _colors.colors.text;
describe('tintOrShadeUiColor', function () {
  describe('light (stock theme)', function () {
    test('ui1', function () {
      return expect((0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[0], background)).toEqual('#f4f4f4');
    });
    test('ui5', function () {
      return expect((0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[4], background)).toEqual('#262626');
    });
  });
  describe('dark-mode', function () {
    test('ui1', function () {
      return expect((0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[0], text)).toEqual('#33393f');
    });
    test('ui5', function () {
      return expect((0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[4], text)).toEqual('#fff');
    });
  });
});
//# sourceMappingURL=tintOrShadeUiColor.spec.js.map