"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dialogPlacements = exports.DialogSurface = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _SurfaceBase = require("../Dialog/SurfaceBase");
var _dialogWidth = require("./dialogWidth");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var dialogPlacements = ['center', 'cover', 'top'];
exports.dialogPlacements = dialogPlacements;
var space = _designTokens.theme.space,
  breakpoints = _designTokens.theme.breakpoints;
var gapSpace = 'xxlarge';
var coverDimension = "calc(100% - ".concat(space[gapSpace], " * 2)");
var placements = {
  center: (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    align-self: flex-start;\n\n    @media screen and (min-width: ", ") and (min-height: 400px) {\n      align-self: center;\n      max-height: ", ";\n    }\n  "])), breakpoints[0], coverDimension),
  cover: (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    height: 100%;\n\n    @media screen and (min-width: ", ") and (min-height: 400px) {\n      height: ", ";\n      width: ", ";\n    }\n\n    @media screen and (min-width: ", ") and (min-height: 400px) {\n      height: ", ";\n      width: ", ";\n    }\n  "])), breakpoints[0], coverDimension, coverDimension, breakpoints[1], coverDimension, coverDimension),
  top: (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    align-self: flex-start;\n    margin-top: 0;\n\n    @media screen and (min-width: ", ") and (min-height: 400px) {\n      margin-top: ", ";\n      max-height: ", ";\n    }\n  "])), breakpoints[0], function (_ref) {
    var theme = _ref.theme;
    return theme.space[gapSpace];
  }, coverDimension)
};
var defaultDialogSurfacePlacement = 'center';
var dialogIn = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\nfrom {\n  opacity: 0.01;\n  transform: translateY(100%);\n}\nto {\n  opacity: 1;\n  transform: translate(0);\n}\n"])));
var dialogOut = (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\nfrom {\n  opacity: 1;\n  transform: translate(0);\n}\nto {\n  opacity: 0.01;\n  transform: translateY(100%);\n}\n"])));
var DialogSurface = (0, _styledComponents["default"])(_SurfaceBase.SurfaceBase).attrs(function (_ref2) {
  var _ref2$placement = _ref2.placement,
    placement = _ref2$placement === void 0 ? defaultDialogSurfacePlacement : _ref2$placement,
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? 'medium' : _ref2$width,
    _ref2$top = _ref2.top,
    top = _ref2$top === void 0 ? '0' : _ref2$top;
  return {
    placement: placement,
    top: top,
    width: width
  };
}).withConfig({
  displayName: "DialogSurface",
  componentId: "sc-sg86rj-0"
})(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  box-shadow: ", ";\n  max-height: 100%;\n  position: relative;\n  top: ", ";\n\n  ", "\n  ", "\n  ", "\n\n  @media screen and (min-width: ", ") {\n    border-radius: ", ";\n  }\n\n  &.entering {\n    animation: ", " ", " forwards;\n  }\n  &.exiting {\n    animation: ", " ", " forwards;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.elevations.plus3;
}, function (_ref4) {
  var top = _ref4.top;
  return top;
}, _dialogWidth.dialogWidth, function (_ref5) {
  var placement = _ref5.placement;
  return placements[placement || defaultDialogSurfacePlacement];
}, _designTokens.height, breakpoints[0], function (_ref6) {
  var theme = _ref6.theme;
  return theme.radii.medium;
}, dialogIn, _SurfaceBase.surfaceTransition, dialogOut, _SurfaceBase.surfaceTransition);
exports.DialogSurface = DialogSurface;
//# sourceMappingURL=DialogSurface.js.map