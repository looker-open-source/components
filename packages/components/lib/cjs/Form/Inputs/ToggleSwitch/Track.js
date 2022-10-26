"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["theme"];

var _templateObject;

var getColor = function getColor(_ref) {
  var on = _ref.on,
      validationType = _ref.validationType;
  if (validationType === 'error') return 'criticalAccent';
  if (on) return 'keyAccent';
  return 'ui3';
};

var Track = (0, _styledComponents["default"])(function (_ref2) {
  var className = _ref2.className;
  return _react["default"].createElement("div", {
    className: className
  });
}).withConfig({
  displayName: "Track",
  componentId: "sc-1sf45zk-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: ", ";\n  height: 14px;\n  transition: ", "ms;\n  width: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme,
      props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded);
  return theme.colors[getColor(props)];
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.radii.large;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.transitions.rapid;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.u9;
});
exports.Track = Track;
//# sourceMappingURL=Track.js.map