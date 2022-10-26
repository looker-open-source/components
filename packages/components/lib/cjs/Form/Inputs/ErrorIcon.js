"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorIcon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _Error = require("@styled-icons/material/Error");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = require("../../Icon");

var _templateObject;

var ErrorIcon = (0, _styledComponents["default"])(_Icon.Icon).attrs(function () {
  return {
    color: 'critical',
    icon: _react["default"].createElement(_Error.Error, null),
    size: 'xsmall'
  };
}).withConfig({
  displayName: "ErrorIcon",
  componentId: "sc-1vqq5ut-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.ErrorIcon = ErrorIcon;
//# sourceMappingURL=ErrorIcon.js.map