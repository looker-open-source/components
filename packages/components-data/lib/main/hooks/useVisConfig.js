"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVisConfig = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _useColorPalette2 = require("./useColorPalette");
var _ = require(".");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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