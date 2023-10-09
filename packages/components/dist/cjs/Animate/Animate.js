"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateCSS = exports.FadeIn = exports.Animate = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _simple = require("../Layout/utils/simple");
var _excluded = ["delay", "duration"];
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var animateCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  animation-delay: ", ";\n  animation-duration: ", ";\n"])), function (_ref) {
  var _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 'none' : _ref$delay,
    theme = _ref.theme;
  return "".concat(theme.transitions[delay], "ms");
}, function (_ref2) {
  var _ref2$duration = _ref2.duration,
    duration = _ref2$duration === void 0 ? 'quick' : _ref2$duration,
    theme = _ref2.theme;
  return "".concat(theme.transitions[duration], "ms");
});
exports.animateCSS = animateCSS;
var Animate = (0, _styledComponents["default"])(function (props) {
  var _delay = props.delay,
    _duration = props.duration,
    rest = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement("div", rest);
}).withConfig({
  displayName: "Animate",
  componentId: "sc-1rb4lia-0"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), _simple.simpleLayoutCSS, animateCSS);
exports.Animate = Animate;
var FadeIn = (0, _styledComponents["default"])(Animate).withConfig({
  displayName: "Animate__FadeIn",
  componentId: "sc-1rb4lia-1"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  animation-fill-mode: both;\n  animation-name: ", ";\n"])), _designTokens.fadeIn);
exports.FadeIn = FadeIn;
//# sourceMappingURL=Animate.js.map