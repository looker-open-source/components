"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accordionLeftDefaults = exports.accordionDefaults = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ArrowDropDown = require("@styled-icons/material/ArrowDropDown");

var _ArrowRight = require("@styled-icons/material/ArrowRight");

var _ExpandLess = require("@styled-icons/material-rounded/ExpandLess");

var _ExpandMore = require("@styled-icons/material-rounded/ExpandMore");

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var accordionDefaults = {
  density: 0,
  indicatorIcons: {
    close: _react["default"].createElement(_ExpandMore.ExpandMore, null),
    open: _react["default"].createElement(_ExpandLess.ExpandLess, null)
  },
  indicatorPosition: 'right'
};
exports.accordionDefaults = accordionDefaults;

var accordionLeftDefaults = _objectSpread(_objectSpread({}, accordionDefaults), {}, {
  indicatorIcons: {
    close: _react["default"].createElement(_ArrowRight.ArrowRight, null),
    open: _react["default"].createElement(_ArrowDropDown.ArrowDropDown, null)
  },
  indicatorPosition: 'left'
});

exports.accordionLeftDefaults = accordionLeftDefaults;
//# sourceMappingURL=accordionDefaults.js.map