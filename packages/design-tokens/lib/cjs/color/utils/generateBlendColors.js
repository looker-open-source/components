"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateBlendColors = void 0;

var _blendPoints = require("../blendPoints");

var _mixColors = require("./mixColors");

var _tintOrShadeUiColor = require("./tintOrShadeUiColor");

var generateBlendColors = function generateBlendColors(_ref) {
  var background = _ref.background,
      text = _ref.text;
  return {
    ui1: (0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[0], background),
    ui2: (0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[1], background),
    ui3: (0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[2], background),
    ui4: (0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[3], background),
    ui5: (0, _tintOrShadeUiColor.tintOrShadeUiColor)(_blendPoints.uiBlends[4], background),
    text1: (0, _mixColors.mixColors)(_blendPoints.textBlends[0], text, background),
    text2: (0, _mixColors.mixColors)(_blendPoints.textBlends[1], text, background),
    text3: (0, _mixColors.mixColors)(_blendPoints.textBlends[2], text, background),
    text4: (0, _mixColors.mixColors)(_blendPoints.textBlends[3], text, background),
    text5: (0, _mixColors.mixColors)(_blendPoints.textBlends[4], text, background)
  };
};

exports.generateBlendColors = generateBlendColors;
//# sourceMappingURL=generateBlendColors.js.map