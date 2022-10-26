"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _designTokens = require("@looker/design-tokens");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _range = _interopRequireDefault(require("lodash/range"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SpinnerMarker = require("./SpinnerMarker");

var _templateObject, _templateObject2;

var SpinnerFactory = function SpinnerFactory(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'text5' : _props$color,
      _props$markers = props.markers,
      markers = _props$markers === void 0 ? 13 : _props$markers,
      markerRadius = props.markerRadius,
      _props$speed = props.speed,
      speed = _props$speed === void 0 ? 1000 : _props$speed;
  return _react["default"].createElement(Style, (0, _extends2["default"])({
    "data-testid": "loading-spinner"
  }, (0, _omit["default"])(props, 'color', 'markers', 'markersRadius', 'speed')), (0, _range["default"])(markers).map(function (i) {
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n\n  height: ", "px;\n  position: relative;\n  width: ", "px;\n"])), _designTokens.reset, _designTokens.space, _designTokens.position, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
});

var Spinner = (0, _styledComponents["default"])(SpinnerFactory).withConfig({
  displayName: "Spinner",
  componentId: "sc-dvoyit-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""])));
exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map