"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividerVertical = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _Divider = require("./Divider");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var DividerVertical = (0, _styledComponents["default"])(_Divider.DividerBase).attrs(function (props) {
  if (props.height && props.stretch) {
    console.warn('When using DividerVertical, the props height and stretch are incompatible. The stretch value will be discarded');
  }

  var _props$height = props.height,
      height = _props$height === void 0 ? '1rem' : _props$height,
      _props$mx = props.mx,
      mx = _props$mx === void 0 ? 'xsmall' : _props$mx,
      _props$my = props.my,
      my = _props$my === void 0 ? 'xsmall' : _props$my;
  return _objectSpread(_objectSpread({}, props), {}, {
    'aria-orientation': 'vertical',
    height: height,
    mx: mx,
    my: my
  });
}).withConfig({
  displayName: "DividerVertical",
  componentId: "sc-10179s7-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  display: inline-block;\n  width: ", ";\n  ", "\n"])), _designTokens.space, function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var height = _ref2.height,
      stretch = _ref2.stretch;
  return stretch ? "align-self: stretch; height: inherit;" : "height: ".concat(height, ";");
});
exports.DividerVertical = DividerVertical;
//# sourceMappingURL=DividerVertical.js.map