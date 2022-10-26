import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export const densityPositive1 = {
  fontSize: 'medium',
  indicatorGap: 'u1',
  indicatorSize: 'medium'
};
export const density0 = _objectSpread(_objectSpread({}, densityPositive1), {}, {
  fontSize: 'small',
  indicatorSize: 'small'
});
export const densityNegative1 = _objectSpread({}, density0);
export const densityNegative2 = _objectSpread({}, densityNegative1);
export const densityNegative3 = _objectSpread(_objectSpread({}, densityNegative2), {}, {
  fontSize: 'xsmall',
  indicatorSize: 'xxsmall'
});
export const densities = {
  '-1': densityNegative1,
  '-2': densityNegative2,
  '-3': densityNegative3,
  '0': density0,
  '1': densityPositive1
};
export const accordionDimensions = (density = 0) => densities[density];
//# sourceMappingURL=accordionDimensions.js.map