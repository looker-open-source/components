"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indicatorDefaults = void 0;

var _react = _interopRequireDefault(require("react"));

var _ArrowDropDown = require("@styled-icons/material/ArrowDropDown");

var _ArrowRight = require("@styled-icons/material/ArrowRight");

var indicatorDefaults = {
  indicatorIcons: {
    close: _react["default"].createElement(_ArrowRight.ArrowRight, null),
    open: _react["default"].createElement(_ArrowDropDown.ArrowDropDown, null)
  },
  indicatorPosition: 'left'
};
exports.indicatorDefaults = indicatorDefaults;
//# sourceMappingURL=indicatorDefaults.js.map