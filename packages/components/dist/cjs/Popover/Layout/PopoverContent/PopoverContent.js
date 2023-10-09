"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _ModalContent = require("../../../Modal/ModalContent");
var _excluded = ["children", "p", "py", "px"];
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var popoverContentDefaults = {
  px: 'u5',
  py: 'u4'
};
var PopoverContent = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
    p = _ref.p,
    py = _ref.py,
    px = _ref.px,
    props = _objectWithoutProperties(_ref, _excluded);
  py = py || p || popoverContentDefaults.py;
  px = px || p || popoverContentDefaults.px;
  return _react["default"].createElement(_ModalContent.ModalContent, _extends({
    overflowVerticalPadding: "u1",
    py: py,
    px: px
  }, props), children);
}).withConfig({
  displayName: "PopoverContent",
  componentId: "sc-pgzun4-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _designTokens.layout);
exports.PopoverContent = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map