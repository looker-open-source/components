"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerSurface = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _SurfaceBase = require("../Dialog/SurfaceBase");
var _dialogWidth = require("../Dialog/dialogWidth");
var _asideWidth = require("../Layout/Semantics/Aside/asideWidth");
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var placement = (0, _designTokens.variant)({
  prop: 'placement',
  variants: {
    left: {
      boxShadow: '-18px 0 18px -18px rgba(0, 0, 0, 0.12)',
      left: 0
    },
    right: {
      boxShadow: '-18px 0 18px -18px rgba(0, 0, 0, 0.12)',
      right: 0
    }
  }
});
var drawerWidth = function drawerWidth() {
  var drawerSizes = _objectSpread(_objectSpread({}, _asideWidth.asideSizes), _dialogWidth.dialogSizes);
  return (0, _designTokens.system)({
    width: {
      defaultScale: drawerSizes,
      property: 'width',
      scale: 'drawerSizes'
    }
  });
};
var slideIn = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nfrom {\n  opacity: 0.01;\n  transform: translate(var(--direction-translate, 0), 0);\n}\nto {\n  opacity: 1;\n  transform: translate(0);\n}\n"])));
var slideOut = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from {\n    opacity: 1;\n    transform: translate(0);\n  }\n  to {\n    opacity: 0.01;\n    transform: translate(var(--direction-translate, 0), 0);\n  }\n"])));
var DrawerSurface = (0, _styledComponents["default"])(_SurfaceBase.SurfaceBase).attrs(function (_ref) {
  var _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'right' : _ref$placement,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 'small' : _ref$width;
  return {
    placement: placement,
    width: width
  };
}).withConfig({
  displayName: "DrawerSurface",
  componentId: "sc-1vwnqjh-0"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  --direction-translate: ", ";\n\n  /* Shadow designed to match theme.elevations.plus3 but with a single left-side shadow */\n  height: 100%;\n  position: absolute;\n\n  ", "\n  ", "\n\n  &.entering {\n    animation: ", " ", ";\n  }\n  &.exiting {\n    animation: ", " ", ";\n  }\n"])), function (_ref2) {
  var placement = _ref2.placement;
  return placement === 'left' ? '-100%' : '100%';
}, placement, drawerWidth, slideIn, _SurfaceBase.surfaceTransition, slideOut, _SurfaceBase.surfaceTransition);
exports.DrawerSurface = DrawerSurface;
//# sourceMappingURL=DrawerSurface.js.map