"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BeforeAfterValidation;
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _react = _interopRequireDefault(require("react"));
var _Button = require("../../../../Button");
var _Icon = require("../../../../Icon");
var _Layout = require("../../../../Layout");
var _Text = require("../../../../Text");
var _Tooltip = require("../../../../Tooltip");
var _utils = require("../../../../utils");
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
  }, "Toggle error state"), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_.FieldText, _extends({
    label: "iconBefore",
    iconBefore: _react["default"].createElement(MaterialIcons.Favorite, null)
  }, validation)), _react["default"].createElement(_.FieldText, _extends({
    label: "iconAfter",
    iconAfter: _react["default"].createElement(MaterialIcons.AccountCircle, null)
  }, validation)), _react["default"].createElement(_.FieldText, _extends({
    label: "before string",
    before: "$"
  }, validation)), _react["default"].createElement(_.FieldText, _extends({
    label: "after string",
    after: "%"
  }, validation)), _react["default"].createElement(_.FieldText, _extends({
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