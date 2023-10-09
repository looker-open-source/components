"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _Error = require("@styled-icons/material/Error");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = require("../../Icon");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ErrorIcon = (0, _styledComponents["default"])(_Icon.Icon).attrs(function () {
  return {
    color: 'critical',
    icon: _react["default"].createElement(_Error.Error, null),
    size: 'xsmall'
  };
}).withConfig({
  displayName: "ErrorIcon",
  componentId: "sc-1vqq5ut-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.ErrorIcon = ErrorIcon;
//# sourceMappingURL=ErrorIcon.js.map