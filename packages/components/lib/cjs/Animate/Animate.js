"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animateCSS = exports.FadeIn = exports.Animate = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _simple = require("../Layout/utils/simple");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var animateCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  animation-delay: ", ";\n  animation-duration: ", ";\n"])), function (_ref) {
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
  return _react["default"].createElement("div", (0, _omit["default"])(props, ['delay', 'duration']));
}).withConfig({
  displayName: "Animate",
  componentId: "sc-1rb4lia-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"])), _simple.simpleLayoutCSS, animateCSS);
exports.Animate = Animate;
var FadeIn = (0, _styledComponents["default"])(Animate).withConfig({
  displayName: "Animate__FadeIn",
  componentId: "sc-1rb4lia-1"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  animation-fill-mode: both;\n  animation-name: ", ";\n"])), _designTokens.fadeIn);
exports.FadeIn = FadeIn;
//# sourceMappingURL=Animate.js.map