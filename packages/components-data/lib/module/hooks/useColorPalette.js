import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import find from 'lodash/find';
import useSWR from 'swr';
import { DEFAULT_SERIES_COLORS } from '@looker/visualizations-adapters';
import { getErrorResponse, isErrorResponse } from '../utils';
import { useSDK } from './useSDK';
const isDiscretePalette = palette => {
  return 'colors' in palette;
};
const isContinuousPalette = palette => {
  return 'stops' in palette;
};

const normalizePalette = (palette = {}) => {
  if (isDiscretePalette(palette)) {
    return palette;
  } else if (isContinuousPalette(palette)) {
    var _palette$stops;
    return {
      colors: (_palette$stops = palette.stops) === null || _palette$stops === void 0 ? void 0 : _palette$stops.map((stop, i) => stop.color ? stop.color : DEFAULT_SERIES_COLORS[i % DEFAULT_SERIES_COLORS.length])
    };
  } else {
    return {
      colors: DEFAULT_SERIES_COLORS
    };
  }
};

export const useColorPalette = colorApplication => {
  const {
    collection_id,
    palette_id,
    custom
  } = colorApplication || {};
  const sdk = useSDK();

  const fetcher = async () => {
    if (collection_id) {
      return await sdk.color_collection(collection_id);
    }
    return undefined;
  };
  const {
    data,
    isValidating
  } = useSWR(collection_id, fetcher, {
    revalidateOnFocus: false
  });
  const {
    value: {
      categoricalPalettes = [],
      divergingPalettes = [],
      sequentialPalettes = []
    }
  } = (data === null || data === void 0 ? void 0 : data.ok) === true ? data : {
    value: {}
  };
  const allPalettes = [...categoricalPalettes, ...divergingPalettes, ...sequentialPalettes, custom];
  const paletteConfig = find(allPalettes, {
    id: palette_id !== null && palette_id !== void 0 ? palette_id : custom === null || custom === void 0 ? void 0 : custom.id
  });
  const colorPalette = normalizePalette(paletteConfig).colors;
  return _objectSpread({
    colorPalette,
    isOK: !(colorApplication && isErrorResponse(data)) || !!colorPalette,
    isPending: isValidating
  }, getErrorResponse(data));
};
//# sourceMappingURL=useColorPalette.js.map