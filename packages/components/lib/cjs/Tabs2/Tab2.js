"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab2 = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _Ripple = require("../Ripple");

var _utils = require("../utils");

var _TabIndicator = require("./TabIndicator");

var _TabLabel = require("./TabLabel");

var _excluded = ["children", "className", "disabled", "id", "onClick", "onSelect", "selected", "style"],
    _excluded2 = ["callbacks"];

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Tab2 = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, forwardedRef) {
  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      id = props.id,
      onClick = props.onClick,
      onSelect = props.onSelect,
      selected = props.selected,
      style = props.style,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
    className: className,
    color: selected ? 'key' : 'neutral',
    ref: forwardedRef,
    style: style
  }),
      callbacks = _useBoundedRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useBoundedRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(restProps, _Ripple.rippleHandlerKeys), disabled);
  var handleClick = (0, _utils.useWrapEvent)(function () {
    if (!disabled && onSelect) {
      onSelect();
    }
  }, onClick);
  return _react["default"].createElement("button", (0, _extends2["default"])({
    "aria-controls": "panel-".concat(id),
    "aria-orientation": "horizontal",
    "aria-selected": selected,
    id: "tab-".concat(id),
    onClick: handleClick,
    role: "tab",
    tabIndex: -1,
    type: "button"
  }, restProps, rippleProps, rippleHandlers), _react["default"].createElement(_TabLabel.TabLabel, null, children), _react["default"].createElement(_TabIndicator.TabIndicator, {
    selected: selected
  }));
})).attrs(function (_ref) {
  var _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'brand' : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 'small' : _ref$fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 'medium' : _ref$fontWeight;
  return {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight
  };
}).withConfig({
  displayName: "Tab2",
  componentId: "sc-qok8xr-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  align-items: center;\n  background: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  height: ", ";\n  /* this is here to remove default margin button in Safari */\n  margin: 0;\n  min-width: fit-content;\n  position: relative;\n\n  ", "\n"])), _designTokens.reset, _designTokens.layout, _designTokens.padding, _Ripple.rippleStyle, _designTokens.typography, function (_ref2) {
  var selected = _ref2.selected,
      theme = _ref2.theme;
  return selected ? theme.colors.key : theme.colors.text5;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u12;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      border-bottom-color: transparent;\n      color: ", ";\n      cursor: default;\n    "])), function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.text1;
  });
});
exports.Tab2 = Tab2;
//# sourceMappingURL=Tab2.js.map