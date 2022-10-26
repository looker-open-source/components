"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemLabelColor = exports.listItemIconColor = void 0;

var _types = require("../types");

var listItemColor = function listItemColor(color, disabled, defaultColor) {
  if (disabled) {
    return 'text1';
  } else if (color) {
    if (_types.listItemColorAppliesToLabel.includes(color)) {
      return color;
    } else if (!_types.listItemColorOptions.includes(color)) {
      return color;
    }
  }

  return defaultColor;
};

var listItemIconColor = function listItemIconColor(color, disabled) {
  return listItemColor(color, disabled, 'text2');
};

exports.listItemIconColor = listItemIconColor;

var listItemLabelColor = function listItemLabelColor(color, disabled) {
  return listItemColor(color, disabled, 'text5');
};

exports.listItemLabelColor = listItemLabelColor;
//# sourceMappingURL=listItemColor.js.map