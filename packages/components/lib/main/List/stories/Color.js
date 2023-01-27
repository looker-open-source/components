"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Color;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../");
var _2 = require("../../");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Color() {
  var _useState = (0, _react.useState)('calculation'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    colorVal = _useState2[0],
    setColorVal = _useState2[1];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.ButtonToggle, {
    value: colorVal,
    onChange: function onChange(draftValue) {
      return setColorVal(draftValue);
    }
  }, _react["default"].createElement(_2.ButtonItem, null, "calculation"), _react["default"].createElement(_2.ButtonItem, null, "dimension"), _react["default"].createElement(_2.ButtonItem, null, "key"), _react["default"].createElement(_2.ButtonItem, null, "measure")), _react["default"].createElement(_.List, {
    color: colorVal
  }, _react["default"].createElement(_2.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.SportsSoccer, null),
    description: "Orange-y",
    detail: "England"
  }, "Cheddar"), _react["default"].createElement(_2.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.DirectionsBoat, null),
    detail: "Netherlands"
  }, "Gouda"), _react["default"].createElement(_2.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.LocalPizza, null),
    detail: "Italy"
  }, "Mozzarella"), _react["default"].createElement(_2.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.BubbleChart, null),
    detail: "Switzerland"
  }, "Swiss")));
}
//# sourceMappingURL=Color.js.map