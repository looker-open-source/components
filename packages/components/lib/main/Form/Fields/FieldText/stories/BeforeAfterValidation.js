"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BeforeAfterValidation;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _react = _interopRequireDefault(require("react"));
var _Button = require("../../../../Button");
var _Icon = require("../../../../Icon");
var _Layout = require("../../../../Layout");
var _Text = require("../../../../Text");
var _Tooltip = require("../../../../Tooltip");
var _utils = require("../../../../utils");
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function BeforeAfterValidation() {
  var _useToggle = (0, _utils.useToggle)(true),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  var validation = value ? {
    validationMessage: {
      message: 'Oops!',
      type: 'error'
    }
  } : {};
  return _react["default"].createElement(_Layout.SpaceVertical, {
    align: "start"
  }, _react["default"].createElement(_Button.Button, {
    onClick: toggle
  }, "Toggle error state"), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_.FieldText, (0, _extends2["default"])({
    label: "iconBefore",
    iconBefore: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, validation)), _react["default"].createElement(_.FieldText, (0, _extends2["default"])({
    label: "iconAfter",
    iconAfter: _react["default"].createElement(MaterialIcons.AccountCircle, null)
  }, validation)), _react["default"].createElement(_.FieldText, (0, _extends2["default"])({
    label: "before string",
    before: "$"
  }, validation)), _react["default"].createElement(_.FieldText, (0, _extends2["default"])({
    label: "after string",
    after: "%"
  }, validation)), _react["default"].createElement(_.FieldText, (0, _extends2["default"])({
    label: "before & after",
    before: _react["default"].createElement(_Tooltip.Tooltip, {
      content: "Some very important info"
    }, _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(MaterialIcons.AddAlert, null),
      size: "small",
      style: {
        cursor: 'default'
      }
    })),
    after: _react["default"].createElement(_Text.Text, {
      fontSize: "small",
      color: value ? 'critical' : 'info'
    }, "Helper text")
  }, validation))));
}
//# sourceMappingURL=BeforeAfterValidation.js.map