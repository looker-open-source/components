import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export { LegacySpaceRamp, SpaceRamp, SpacingSizes, UnitSizes, UnitRamp } from './types';
const legacySpacing = {
  none: '0rem',
  xxxsmall: '0.125rem',
  xxsmall: '0.25rem',
  xsmall: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '2rem',
  xxlarge: '2.5rem',
  xxxlarge: '3.75rem',
  xxxxlarge: '5rem'
};
export const units = {
  none: '0rem',
  u05: '0.125rem',
  u1: '0.25rem',
  u2: '0.5rem',
  u3: '0.75rem',
  u4: '1rem',
  u5: '1.25rem',
  u6: '1.5rem',
  u7: '1.75rem',
  u8: '2rem',
  u9: '2.25rem',
  u10: '2.5rem',
  u11: '2.75rem',
  u12: '3rem',
  u13: '3.25rem',
  u14: '3.5rem',
  u15: '3.75rem',
  u16: '4em'
};
export const space = _objectSpread(_objectSpread({}, legacySpacing), units);
//# sourceMappingURL=index.js.map