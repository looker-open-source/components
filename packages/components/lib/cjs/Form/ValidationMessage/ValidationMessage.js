"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationMessage = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var ValidationMessageLayout = function ValidationMessageLayout(_ref) {
  var className = _ref.className,
      message = _ref.message;
  return _react["default"].createElement("div", {
    className: className
  }, message);
};

var ValidationMessage = (0, _styledComponents["default"])(ValidationMessageLayout).withConfig({
  displayName: "ValidationMessage",
  componentId: "sc-13fefl2-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  font-size: ", ";\n\n  ", "\n"])), _designTokens.reset, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.xsmall;
}, function (_ref3) {
  var theme = _ref3.theme,
      type = _ref3.type;
  return type === 'error' && "color: ".concat(theme.colors.critical, ";");
});
exports.ValidationMessage = ValidationMessage;
ValidationMessage.displayName = 'ValidationMessage';
//# sourceMappingURL=ValidationMessage.js.map