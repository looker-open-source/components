function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import merge from 'lodash/merge';
import { buildChartConfig, buildTrackingTag, CHART_TYPE_MAP } from '@looker/visualizations-adapters';
import { useColorPalette } from './useColorPalette';
import { useQueryData, useQueryMetadata } from '.';
export const useVisConfig = (id, configOverrides) => {
  const {
    metadata: {
      vis_config
    },
    isOK: isMetadataOK,
    error,
    isPending
  } = useQueryMetadata(id);
  const {
    type = CHART_TYPE_MAP.default
  } = _objectSpread(_objectSpread({}, vis_config), configOverrides);
  const {
    data,
    fields
  } = useQueryData(id, buildTrackingTag(CHART_TYPE_MAP[type] || type));
  const {
    colorPalette,
    isPending: isColorPalettePending,
    isOK: isColorPaletteOK
  } = useColorPalette(vis_config === null || vis_config === void 0 ? void 0 : vis_config.color_application);
  const configWithOverrides = merge({}, vis_config, {
    default_series_colors: colorPalette
  }, configOverrides);
  const transformedConfig = buildChartConfig({
    config: configWithOverrides,
    data,
    fields
  });
  return _objectSpread({
    isOK: isMetadataOK && isColorPaletteOK,
    isPending: isPending || isColorPalettePending,
    visConfig: transformedConfig
  }, error ? {
    error
  } : {});
};
//# sourceMappingURL=useVisConfig.js.map