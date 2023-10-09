"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayArrow = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var arrowColor = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n"])), function (_ref) {
  var theme = _ref.theme,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'background' : _ref$color;
  return theme.colors[color] || color;
});
var OverlayArrow = _styledComponents["default"].div.attrs(function () {
  return {
    'data-popper-arrow': true,
    'data-testid': 'overlay-arrow'
  };
}).withConfig({
  displayName: "OverlayArrow",
  componentId: "sc-r1gti2-0"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n\n  &::after,\n  &::before {\n    content: '';\n    display: block;\n    height: 0.54rem;\n    width: 0.54rem;\n    border: 0.38rem solid transparent;\n    border-right: 0;\n  }\n  &::after {\n    border-left-color: ", ";\n  }\n  &::before {\n    position: absolute;\n    border-left-color: rgba(0, 0, 0, 0.15);\n    filter: blur(1px);\n  }\n\n  &[data-placement*='top'] {\n    bottom: -0.125rem;\n    &::after,\n    &::before {\n      transform: rotate(90deg);\n    }\n    &::before {\n      border-left-color: rgba(0, 0, 0, 0.3);\n      bottom: -3px;\n      filter: blur(2px);\n    }\n  }\n\n  &[data-placement*='right'] {\n    left: 0;\n    &::after,\n    &::before {\n      transform: rotate(180deg);\n    }\n    &::before {\n      left: -2px;\n    }\n  }\n\n  &[data-placement*='bottom'] {\n    top: -0.125rem;\n    &::after,\n    &::before {\n      transform: rotate(270deg);\n    }\n    &::before {\n      border-left-color: rgba(0, 0, 0, 0.1);\n      top: -1px;\n      filter: none;\n    }\n  }\n\n  &[data-placement*='left'] {\n    right: 0;\n    &::after,\n    &::before {\n      transform: rotate(0deg);\n    }\n    &::before {\n      right: -2px;\n    }\n  }\n"])), arrowColor);
exports.OverlayArrow = OverlayArrow;
//# sourceMappingURL=OverlayArrow.js.map