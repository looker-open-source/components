"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Density;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../");
var _2 = require("../../");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Density() {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    currentDensity = _useState2[0],
    setCurrentDensity = _useState2[1];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.ButtonToggle, {
    value: String(currentDensity),
    onChange: function onChange(draftValue) {
      return setCurrentDensity(parseInt(draftValue));
    }
  }, _react["default"].createElement(_2.ButtonItem, null, "-3"), _react["default"].createElement(_2.ButtonItem, null, "-2"), _react["default"].createElement(_2.ButtonItem, null, "-1"), _react["default"].createElement(_2.ButtonItem, null, "0"), _react["default"].createElement(_2.ButtonItem, null, "1")), _react["default"].createElement(_.List, {
    density: currentDensity
  }, _react["default"].createElement(_2.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.DateRange, null)
  }, "Item 1"), _react["default"].createElement(_2.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.DateRange, null)
  }, "Item 2"), _react["default"].createElement(_2.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.DateRange, null)
  }, "Item 3")));
}
//# sourceMappingURL=Density.js.map