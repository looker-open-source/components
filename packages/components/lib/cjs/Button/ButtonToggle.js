"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonToggle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _height = require("../Form/Inputs/height");

var _ButtonItem = require("./ButtonItem");

var _ButtonSet = require("./ButtonSet");

var _templateObject;

var _excluded = ["nullable", "onChange", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtSetAsToggle = _ButtonSet.ButtonSet;
var ButtonToggleLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var nullable = _ref.nullable,
      onChange = _ref.onChange,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  function handleItemClick(e) {
    var newValue = e.currentTarget.value;
    var deselecting = newValue === value;

    if (!deselecting || nullable) {
      if (onChange) {
        onChange(deselecting ? '' : newValue);
      }
    }
  }

  return _react["default"].createElement(ButtSetAsToggle, (0, _extends2["default"])({}, props, {
    value: value,
    onItemClick: handleItemClick,
    ref: ref
  }));
});
var ButtonToggle = (0, _styledComponents["default"])(ButtonToggleLayout).withConfig({
  displayName: "ButtonToggle",
  componentId: "sc-8vwxgq-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border: solid 1px ", ";\n  border-left-width: 0;\n  border-radius: ", ";\n\n  ", " {\n    border-left: solid 1px ", ";\n    height: calc(", " - 2px);\n\n    &:last-child {\n      border-bottom-right-radius: ", ";\n      border-top-right-radius: ", ";\n    }\n    &:first-child {\n      border-bottom-left-radius: ", ";\n      border-top-left-radius: ", ";\n    }\n  }\n\n  &.wrapping {\n    /* Creates horizontal rules between rows\n  (and hide the last one that's flush with the bottom border) */\n\n    background-image: linear-gradient(\n        0deg,\n        ", " 0,\n        ", " 1px,\n        transparent 1px,\n        transparent 100%\n      ),\n      repeating-linear-gradient(\n        180deg,\n        transparent,\n        transparent calc(", " - 3px),\n        ", " calc(", " - 3px),\n        ", " calc(", " - 2px)\n      );\n\n    /* prevents items in the last row from growing */\n    &::after {\n      border-left: 1px solid ", ";\n      content: '';\n      flex-grow: 100;\n      height: calc(", " - 2px);\n    }\n\n    ", " {\n      /* Items in complete rows need to fill the full width evenly */\n      flex-grow: 1;\n      /* Removes some item-level rounded corners */\n      &:first-child {\n        border-bottom-left-radius: 0;\n      }\n      &:last-child {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n      }\n      /* Fixes bottom \"border\" when the item background obscures the parent's horizontal rows */\n      &[aria-pressed='false']:hover:not(:focus),\n      &[aria-pressed='true']:not(:focus) {\n        box-shadow: inset 0 -1px 0 0 ", ";\n      }\n    }\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.ui3;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.radii.medium;
}, _ButtonItem.ButtonItem, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.ui3;
}, _height.inputHeight, function (_ref6) {
  var theme = _ref6.theme;
  return theme.radii.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.radii.medium;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.radii.medium;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.radii.medium;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.background;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.background;
}, _height.inputHeight, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.ui3;
}, _height.inputHeight, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.ui3;
}, _height.inputHeight, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.ui3;
}, _height.inputHeight, _ButtonItem.ButtonItem, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.ui3;
});
exports.ButtonToggle = ButtonToggle;
//# sourceMappingURL=ButtonToggle.js.map