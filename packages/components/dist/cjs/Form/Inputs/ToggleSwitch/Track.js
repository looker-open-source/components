"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _excluded = ["theme"];
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: ", ";\n  height: 14px;\n  transition: ", "ms;\n  width: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme,
    props = _objectWithoutProperties(_ref3, _excluded);
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