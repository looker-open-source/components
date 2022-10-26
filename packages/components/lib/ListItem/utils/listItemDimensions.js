import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

export const density0 = {
  descriptionFontSize: 'xsmall',
  descriptionLineHeight: 'xsmall',
  gap: 'u3',
  height: 36,
  iconSize: 'small',
  labelFontSize: 'small',
  labelLineHeight: 'small',
  px: 'u4',
  py: 'u2'
};
export const densityPositive1 = _objectSpread(_objectSpread({}, density0), {}, {
  descriptionFontSize: 'small',
  descriptionLineHeight: 'small',
  gap: 'u4',
  height: 48,
  iconSize: 'medium',
  labelFontSize: 'medium',
  labelLineHeight: 'medium',
  py: 'u3'
});
export const densityNegative1 = _objectSpread(_objectSpread({}, density0), {}, {
  height: 32,
  py: '0.375rem'
});
export const densityNegative2 = _objectSpread(_objectSpread({}, densityNegative1), {}, {
  height: 28,
  py: 'u1'
});
export const densityNegative3 = _objectSpread(_objectSpread({}, densityNegative2), {}, {
  gap: 'u2',
  height: 24,
  iconSize: 'xxsmall',
  labelFontSize: 'xsmall',
  labelLineHeight: 'xsmall'
});
export const densities = {
  '-1': densityNegative1,
  '-2': densityNegative2,
  '-3': densityNegative3,
  '0': density0,
  '1': densityPositive1
};
export const listItemDimensions = density => densities[density];
//# sourceMappingURL=listItemDimensions.js.map