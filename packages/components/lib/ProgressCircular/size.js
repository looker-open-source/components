import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { variant } from '@looker/design-tokens';

const calculateValues = half => {
  return {
    dashArray: half * 4.7,
    dashOffset: half * 2.3,
    half,
    radius: half / 1.34
  };
};

export const progressCircularSVG = variant({
  prop: 'size',
  variants: {
    xsmall: _objectSpread({
      stroke: 2
    }, calculateValues(10)),
    small: _objectSpread({
      stroke: 2.5
    }, calculateValues(12)),
    medium: _objectSpread({
      stroke: 3
    }, calculateValues(18)),
    large: _objectSpread({
      stroke: 4
    }, calculateValues(24))
  }
});
export const progressCircularSize = variant({
  prop: 'size',
  variants: {
    xsmall: {
      height: '20px',
      width: '20px'
    },
    small: {
      height: '24px',
      width: '24px'
    },
    medium: {
      height: '36px',
      width: '36px'
    },
    large: {
      height: '48px',
      width: '48px'
    }
  }
});
//# sourceMappingURL=size.js.map