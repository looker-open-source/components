"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _xor = _interopRequireDefault(require("lodash/xor"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonItem = require("./ButtonItem");

var _ButtonSet = require("./ButtonSet");

var _templateObject;

var _excluded = ["onChange", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtonGroupLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var onChange = _ref.onChange,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  function handleItemClick(e) {
    var newValue = (0, _xor["default"])(value, [e.currentTarget.value]);

    if (onChange) {
      onChange(newValue);
    }
  }

  return _react["default"].createElement(_ButtonSet.ButtonSet, (0, _extends2["default"])({}, props, {
    ref: ref,
    value: value,
    onItemClick: handleItemClick
  }));
});
var ButtonGroup = (0, _styledComponents["default"])(ButtonGroupLayout).withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-13avdmz-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    border: 1px solid ", ";\n    border-radius: ", ";\n    margin-right: ", ";\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &[aria-pressed='false']:not(:hover) {\n      background: ", ";\n    }\n  }\n  &.wrapping {\n    margin: -", ";\n    ", " {\n      margin: ", ";\n    }\n  }\n"])), _ButtonItem.ButtonItem, function (_ref2) {
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