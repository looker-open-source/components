"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeBlock = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TextBase = require("./TextBase");

var _templateObject;

var _excluded = ["children", "className"];

var CodeBlockLayout = function CodeBlockLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_TextBase.TextBase, (0, _extends2["default"])({
    className: className,
    as: "pre",
    fontFamily: "code"
  }, props), _react["default"].createElement("code", null, children));
};

var CodeBlock = (0, _styledComponents["default"])(CodeBlockLayout).attrs(function (_ref2) {
  var _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? 'ui2' : _ref2$border,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? 'small' : _ref2$fontSize,
      _ref2$p = _ref2.p,
      p = _ref2$p === void 0 ? 'medium' : _ref2$p;
  return {
    border: border,
    fontSize: fontSize,
    p: p
  };
}).withConfig({
  displayName: "CodeBlock",
  componentId: "sc-yes8xf-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  color: ", ";\n  overflow-y: auto;\n\n  code {\n    font-family: inherit;\n  }\n"])), _designTokens.border, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
});
exports.CodeBlock = CodeBlock;
//# sourceMappingURL=CodeBlock.js.map