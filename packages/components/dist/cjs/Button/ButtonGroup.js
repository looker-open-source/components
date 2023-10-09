"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;
var _xor = _interopRequireDefault(require("lodash/xor"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ButtonItem = require("./ButtonItem");
var _ButtonSet = require("./ButtonSet");
var _templateObject;
var _excluded = ["onChange", "value"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ButtonGroupLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var onChange = _ref.onChange,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    props = _objectWithoutProperties(_ref, _excluded);
  function handleItemClick(e) {
    var newValue = (0, _xor["default"])(value, [e.currentTarget.value]);
    if (onChange) {
      onChange(newValue);
    }
  }
  return _react["default"].createElement(_ButtonSet.ButtonSet, _extends({}, props, {
    ref: ref,
    value: value,
    onItemClick: handleItemClick
  }));
});
var ButtonGroup = (0, _styledComponents["default"])(ButtonGroupLayout).withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-13avdmz-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", " {\n    border: 1px solid ", ";\n    border-radius: ", ";\n    margin-right: ", ";\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &[aria-pressed='false']:not(:hover) {\n      background: ", ";\n    }\n  }\n  &.wrapping {\n    margin: -", ";\n    ", " {\n      margin: ", ";\n    }\n  }\n"])), _ButtonItem.ButtonItem, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui3;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radii.medium;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.background;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.u05;
}, _ButtonItem.ButtonItem, function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.u05;
});
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map