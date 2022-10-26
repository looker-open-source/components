import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import toPairs from 'lodash/toPairs';
import startCase from 'lodash/startCase';
import { convertRemToPx, BreakpointRamp, breakpoints } from '@looker/design-tokens';
export const VIEWPORT_MAP = toPairs(BreakpointRamp).reduce((map, [name, size]) => {
  const sizePx = convertRemToPx(parseInt(size || '', 10));
  const width = `${sizePx}px`;
  const height = sizePx < convertRemToPx(parseInt(breakpoints[2])) ? `${Math.round(sizePx * 2.16)}px` : `${Math.round(sizePx * 0.55)}px`;
  return _objectSpread(_objectSpread({}, map), {}, {
    [name]: {
      name: startCase(name),
      styles: {
        height,
        width
      },
      type: name
    }
  });
}, {});
//# sourceMappingURL=viewportMap.js.map