"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrandedTint = void 0;

var _polished = require("polished");

var getBrandedTint = function getBrandedTint(type, color) {
  var hue = (0, _polished.parseToHsl)(color).hue;

  switch (type) {
    case 'selected':
      return "hsla(".concat(hue, ", 100%, 98%, 100%)");

    case 'hover':
      return "hsla(".concat(hue, ", 25%, 97%, 70%)");

    case 'pressed':
      return "hsla(".concat(hue, ", 50%, 96%, 90%)");

    case 'border':
      return "hsla(".concat(hue, ", 25%, 90%, 100%)");

    default:
      return "hsla(".concat(hue, ", 100%, 98%, 100%)");
  }
};

exports.getBrandedTint = getBrandedTint;
//# sourceMappingURL=branded_tint.js.map