"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;
var _designTokens = require("@looker/design-tokens");
var _range = _interopRequireDefault(require("lodash/range"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _SpinnerMarker = require("./SpinnerMarker");
var _templateObject, _templateObject2;
var _excluded = ["color", "markers", "markerRadius", "speed"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SpinnerFactory = function SpinnerFactory(props) {
  var _props$color = props.color,
    color = _props$color === void 0 ? 'text5' : _props$color,
    _props$markers = props.markers,
    markers = _props$markers === void 0 ? 13 : _props$markers,
    markerRadius = props.markerRadius,
    _props$speed = props.speed,
    speed = _props$speed === void 0 ? 1000 : _props$speed,
    rest = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(Style, _extends({
    "data-testid": "loading-spinner"
  }, rest), (0, _range["default"])(markers).map(function (i) {
    return _react["default"].createElement(_SpinnerMarker.SpinnerMarker, {
      backgroundColor: color,
      key: i,
      speed: speed,
      markers: markers,
      markerIndex: i,
      markerRadius: markerRadius
    });
  }));
};
var Style = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Spinner__Style",
  componentId: "sc-dvoyit-0"
}).attrs(function (_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? '30' : _ref$size;
  return {
    size: size
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n\n  height: ", "px;\n  position: relative;\n  width: ", "px;\n"])), _designTokens.reset, _designTokens.space, _designTokens.position, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
});
var Spinner = (0, _styledComponents["default"])(SpinnerFactory).withConfig({
  displayName: "Spinner",
  componentId: "sc-dvoyit-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map