"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Backdrop = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var fadeIn = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nfrom {\n  opacity: 0.01;\n}\nto {\n  opacity: 0.6;\n}\n"])));
var fadeOut = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\nfrom {\n  opacity: 0.6;\n}\nto {\n  opacity: 0.01;\n}\n"])));
var Backdrop = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Backdrop",
  componentId: "sc-195exav-0"
}).attrs(function () {
  return {
    'data-testid': 'backdrop'
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  animation-duration: ", "ms;\n  animation-fill-mode: forwards;\n  background: ", ";\n  bottom: 0;\n  cursor: default;\n  left: 0;\n  opacity: 0.6;\n  position: fixed;\n  right: 0;\n  top: 0;\n\n  &.entering {\n    animation-name: ", ";\n  }\n  &.exiting {\n    animation-name: ", ";\n  }\n"])), _designTokens.reset, _designTokens.color, function (_ref) {
  var theme = _ref.theme;
  return theme.transitions.simple;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui5;
}, fadeIn, fadeOut);
exports.Backdrop = Backdrop;
//# sourceMappingURL=Backdrop.js.map