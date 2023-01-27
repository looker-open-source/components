import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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