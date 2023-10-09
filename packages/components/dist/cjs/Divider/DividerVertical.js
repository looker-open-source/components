"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividerVertical = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _Divider = require("./Divider");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  display: inline-block;\n  width: ", ";\n  ", "\n"])), _designTokens.space, function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var height = _ref2.height,
    stretch = _ref2.stretch;
  return stretch ? "align-self: stretch; height: inherit;" : "height: ".concat(height, ";");
});
exports.DividerVertical = DividerVertical;
//# sourceMappingURL=DividerVertical.js.map