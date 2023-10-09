"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeBlock = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _TextBase = require("../Text/TextBase");
var _templateObject;
var _excluded = ["children", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CodeBlockLayout = function CodeBlockLayout(_ref) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_TextBase.TextBase, _extends({
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
  componentId: "sc-1gaybrn-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n  overflow-y: auto;\n  background-color: ", ";\n\n  code {\n    font-family: inherit;\n  }\n"])), _designTokens.border, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.background;
});
exports.CodeBlock = CodeBlock;
//# sourceMappingURL=CodeBlock.js.map