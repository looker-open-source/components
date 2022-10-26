"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invertSurface = exports.TooltipSurface = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _OverlaySurface = require("../Overlay/OverlaySurface");

var _Link = require("../Link");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var invertSurface = function invertSurface(props) {
  return props.invert !== false && (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    ", " {\n      background: ", ";\n      border-color: ", ";\n      color: ", ";\n    }\n\n    ", " {\n      color: ", ";\n\n      &:focus,\n      &:hover,\n      &:active,\n      &.active,\n      &:visited {\n        color: ", ";\n      }\n    }\n  "])), _OverlaySurface.OverlaySurfaceContentArea, function (_ref) {
    var theme = _ref.theme;
    return theme.colors.inverse;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.colors.inverse;
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.inverseOn;
  }, _Link.Link, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.keyAccent;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.keySubtle;
  });
};

exports.invertSurface = invertSurface;
var TooltipSurface = (0, _styledComponents["default"])(_OverlaySurface.OverlaySurface).withConfig({
  displayName: "TooltipSurface",
  componentId: "sc-ym8ur1-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  &.exited,\n  &.exiting,\n  &.entering {\n    animation: none;\n    opacity: 0;\n    /* Prevents showing the tooltip if the the mouse happens to move over it\n    when still opacity: 0 (during the delay) */\n    pointer-events: none;\n  }\n"])), invertSurface);
exports.TooltipSurface = TooltipSurface;
//# sourceMappingURL=TooltipSurface.js.map