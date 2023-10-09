function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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