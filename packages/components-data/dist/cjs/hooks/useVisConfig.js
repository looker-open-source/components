"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVisConfig = void 0;
var _merge = _interopRequireDefault(require("lodash/merge"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _useColorPalette2 = require("./useColorPalette");
var _ = require(".");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var useVisConfig = function useVisConfig(id, configOverrides) {
  var _useQueryMetadata = (0, _.useQueryMetadata)(id),
    vis_config = _useQueryMetadata.metadata.vis_config,
    isMetadataOK = _useQueryMetadata.isOK,
    error = _useQueryMetadata.error,
    isPending = _useQueryMetadata.isPending;
  var _vis_config$configOve = _objectSpread(_objectSpread({}, vis_config), configOverrides),
    _vis_config$configOve2 = _vis_config$configOve.type,
    type = _vis_config$configOve2 === void 0 ? _visualizationsAdapters.CHART_TYPE_MAP["default"] : _vis_config$configOve2;
  var _useQueryData = (0, _.useQueryData)(id, (0, _visualizationsAdapters.buildTrackingTag)(_visualizationsAdapters.CHART_TYPE_MAP[type] || type)),
    data = _useQueryData.data,
    fields = _useQueryData.fields;
  var _useColorPalette = (0, _useColorPalette2.useColorPalette)(vis_config === null || vis_config === void 0 ? void 0 : vis_config.color_application),
    colorPalette = _useColorPalette.colorPalette,
    isColorPalettePending = _useColorPalette.isPending,
    isColorPaletteOK = _useColorPalette.isOK;
  var configWithOverrides = (0, _merge["default"])({}, vis_config, {
    default_series_colors: colorPalette
  }, configOverrides);
  var transformedConfig = (0, _visualizationsAdapters.buildChartConfig)({
    config: configWithOverrides,
    data: data,
    fields: fields
  });
  return _objectSpread({
    isOK: isMetadataOK && isColorPaletteOK,
    isPending: isPending || isColorPalettePending,
    visConfig: transformedConfig
  }, error ? {
    error: error
  } : {});
};
exports.useVisConfig = useVisConfig;
//# sourceMappingURL=useVisConfig.js.map