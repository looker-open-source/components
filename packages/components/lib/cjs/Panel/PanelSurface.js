"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelSurface = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var slideIn = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  0% {transform: translate(var(--direction-translate, 0), 0);}\n  100% {transform: translate(0);}\n"])));
var slideOut = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  0% {transform: translate(0);}\n  100% {transform: translate(var(--direction-translate, 0), 0);}\n"])));

var PanelSurface = _styledComponents["default"].div.attrs(function (_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'left' : _ref$direction;
  return {
    'data-panel': true,
    direction: direction
  };
}).withConfig({
  displayName: "PanelSurface",
  componentId: "sc-1ptnzaf-0"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  --direction-translate: ", ";\n\n  animation-duration: ", "ms;\n  background: ", ";\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  left: 0;\n  outline: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n\n  &.entering {\n    animation-name: ", ";\n  }\n  &.exiting {\n    animation-name: ", ";\n  }\n"])), function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'left' ? '-100%' : '100%';
}, function (_ref3) {
  var transitions = _ref3.theme.transitions;
  return transitions.moderate;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.background;
}, slideIn, slideOut);

exports.PanelSurface = PanelSurface;
//# sourceMappingURL=PanelSurface.js.map