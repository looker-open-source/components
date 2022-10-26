"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rippleStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var rippleRadiusIn = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\nfrom {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate(var(--ripple-translate, 0)) scale(var(--ripple-scale-start, 1));\n}\nto {\n  transform: translate(var(--ripple-translate, 0))\n    scale(var(--ripple-scale-end, 1));\n}\n"])));
var rippleOpacityIn = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\nfrom {\n  animation-timing-function: linear;\n  opacity: 0;\n}\nto {\n  opacity: .12;\n}\n"])));
var rippleOpacityOut = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\nfrom {\n  animation-timing-function: linear;\n  opacity: .12;\n}\nto {\n  opacity: 0;\n}\n"])));
var rippleStyle = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  outline: none;\n  overflow: var(--ripple-overflow);\n  position: relative;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  &::before,\n  &::after {\n    background-color: var(--ripple-color, #000000);\n    border-radius: 50%;\n    content: '';\n    height: var(--ripple-size, 100%);\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    transform-origin: center center;\n    width: var(--ripple-size, 100%);\n  }\n\n  &::before {\n    transform: translate(var(--ripple-translate, 0))\n      scale(var(--ripple-scale-end, 1));\n    transition: opacity 15ms linear;\n  }\n\n  &::after {\n    transform: scale(0);\n  }\n\n  &.bg-on::before {\n    opacity: 0.12;\n  }\n\n  &.fg-in::after {\n    animation-duration: ", ";\n    animation-fill-mode: forwards, forwards;\n    animation-name: ", ", ", ";\n  }\n  &.fg-out::after {\n    animation: ", ";\n    animation-duration: ", "ms;\n    transform: translate(var(--ripple-translate, 0))\n      scale(var(--ripple-scale-end, 1));\n  }\n"])), function (_ref) {
  var _ref$theme = _ref.theme,
      brandAnimation = _ref$theme.defaults.brandAnimation,
      _ref$theme$transition = _ref$theme.transitions,
      rapid = _ref$theme$transition.rapid,
      simple = _ref$theme$transition.simple;
  return "".concat(simple, "ms, ").concat(brandAnimation ? rapid : '15', "ms");
}, rippleRadiusIn, rippleOpacityIn, rippleOpacityOut, function (_ref2) {
  var transitions = _ref2.theme.transitions;
  return transitions.quick;
});
exports.rippleStyle = rippleStyle;
//# sourceMappingURL=rippleStyle.js.map