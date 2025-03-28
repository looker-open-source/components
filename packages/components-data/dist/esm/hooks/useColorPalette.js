function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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