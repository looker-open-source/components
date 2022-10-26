"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Handle = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Ripple = require("../../../Ripple");

var _excluded = ["theme"];

var _templateObject;

var getColor = function getColor(_ref) {
  var on = _ref.on,
      validationType = _ref.validationType;

  if (on) {
    if (validationType === 'error') return 'critical';
    return 'key';
  }

  return 'field';
};

var Handle = (0, _styledComponents["default"])(function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style;
  return _react["default"].createElement("div", {
    className: className,
    style: style,
    "data-testid": "handle"
  }, _react["default"].createElement("div", null));
}).withConfig({
  displayName: "Handle",
  componentId: "sc-1qvjj89-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  height: ", ";\n  left: 0;\n  padding: ", ";\n  position: absolute;\n  top: 0;\n  transform: ", ";\n  transition: ", "ms;\n  width: ", ";\n  div {\n    background: ", ";\n    border-radius: 50%;\n    box-shadow: ", ";\n    height: 100%;\n    /* This nested relative position div allows the handle\n    to appear on top of the ripple bg */\n    position: relative;\n    width: 100%;\n  }\n"])), _Ripple.rippleStyle, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u6;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u05;
}, function (_ref5) {
  var on = _ref5.on,
      theme = _ref5.theme;
  return on ? "translateX(".concat(theme.space.u4, ")") : undefined;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.transitions.rapid;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.u6;
}, function (_ref8) {
  var theme = _ref8.theme,
      props = (0, _objectWithoutProperties2["default"])(_ref8, _excluded);
  return theme.colors[getColor(props)];
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.elevations.plus1;
});
exports.Handle = Handle;
//# sourceMappingURL=Handle.js.map