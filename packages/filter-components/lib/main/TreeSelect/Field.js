"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Section = require("./Section");
var _templateObject, _templateObject2;
var _excluded = ["payload", "label", "onClick", "isSecondary", "detail", "disabled", "displayLabel"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var InternalField = function InternalField(_ref) {
  var payload = _ref.payload,
    label = _ref.label,
    onClick = _ref.onClick,
    isSecondary = _ref.isSecondary,
    detail = _ref.detail,
    disabled = _ref.disabled,
    displayLabel = _ref.displayLabel,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var handleClick = function handleClick() {
    return !disabled && onClick(label, payload);
  };
  return _react["default"].createElement(_components.Flex, (0, _extends2["default"])({
    onClick: handleClick,
    ml: "small",
    role: "button"
  }, props), disabled ? _react["default"].createElement(_components.Tooltip, {
    content: disabled,
    placement: "right"
  }, _react["default"].createElement(_components.Box, {
    display: "block",
    fontSize: "small"
  }, displayLabel)) : _react["default"].createElement(_components.Flex, {
    fontSize: "small",
    alignItems: "center",
    width: "100%"
  }, displayLabel, detail && _react["default"].createElement(_Section.SectionLabelDetail, {
    ml: "auto",
    fontSize: "xsmall"
  }, detail)));
};
var Field = (0, _styledComponents["default"])(InternalField).withConfig({
  displayName: "Field",
  componentId: "sc-d48zha-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-left: 1px solid\n    ", ";\n  color: ", ";\n  cursor: ", ";\n  height: 30px;\n  white-space: pre-wrap;\n\n  &:hover {\n    background: ", ";\n    text-shadow: 0.45px 0 0 currentColor;\n  }\n\n  /* highlighting for search results */\n  ", "\n"])), function (_ref2) {
  var isSecondary = _ref2.isSecondary,
    colors = _ref2.theme.colors;
  return isSecondary ? colors.warn : colors.inform;
}, function (_ref3) {
  var disabled = _ref3.disabled,
    colors = _ref3.theme.colors;
  return disabled ? colors.text1 : colors.text3;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref5) {
  var isSecondary = _ref5.isSecondary,
    colors = _ref5.theme.colors;
  return isSecondary ? colors.warnAccent : colors.informAccent;
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return !disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      b {\n        color: ", ";\n        text-decoration: underline;\n        font-weight: ", ";\n      }\n    "])), function (_ref7) {
    var theme = _ref7.theme;
    return theme.colors.text5;
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.fontWeights.semiBold;
  });
});
exports.Field = Field;
//# sourceMappingURL=Field.js.map