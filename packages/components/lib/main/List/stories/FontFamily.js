"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FontFamily;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../../");
var _2 = require("../");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FontFamily() {
  var _useState = (0, _react.useState)('code'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    family = _useState2[0],
    setFamily = _useState2[1];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.ButtonToggle, {
    value: family,
    onChange: function onChange(val) {
      return setFamily(val);
    }
  }, _react["default"].createElement(_.ButtonItem, null, "body"), _react["default"].createElement(_.ButtonItem, null, "brand"), _react["default"].createElement(_.ButtonItem, null, "code")), _react["default"].createElement(_2.List, {
    fontFamily: family
  }, _react["default"].createElement(_.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.SportsSoccer, null),
    description: "Orange-y",
    detail: "England"
  }, "Cheddar"), _react["default"].createElement(_.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.DirectionsBoat, null),
    detail: "Netherlands"
  }, "Gouda"), _react["default"].createElement(_.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.LocalPizza, null),
    detail: "Italy"
  }, "Mozzarella"), _react["default"].createElement(_.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.BubbleChart, null),
    detail: "Switzerland"
  }, "Swiss")));
}
//# sourceMappingURL=FontFamily.js.map