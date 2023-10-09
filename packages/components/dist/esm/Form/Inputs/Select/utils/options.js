function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { getComboboxText } from '../../Combobox';
export function getMatchingOption(value, options) {
  return options === null || options === void 0 ? void 0 : options.find(option => option.value === value);
}
export function getOption(value, options) {
  const matchingOption = getMatchingOption(value, options);
  const label = matchingOption === null || matchingOption === void 0 ? void 0 : matchingOption.label;
  const labelProps = label ? {
    label
  } : {};
  return value !== undefined ? _objectSpread(_objectSpread({}, labelProps), {}, {
    value
  }) : undefined;
}
export function getOptions(values, options) {
  if (!values) return undefined;
  return values.map(value => ({
    label: getComboboxText(value, options),
    value
  }));
}
export function compareOption(option, value) {
  return getComboboxText(option).toLowerCase() === value.toLowerCase();
}
export function getFirstOption(options) {
  const optionAsGroup = options[0];
  if (optionAsGroup && optionAsGroup.options) return optionAsGroup.options[0];
  return options[0];
}
export function notInOptions(currentOptions, options, inputValue) {
  if (!inputValue) return false;
  if (currentOptions.find(option => compareOption(option, inputValue))) {
    return false;
  }
  if (!options) return true;
  return options.find(option => compareOption(option, inputValue)) === undefined;
}
const checkForIcon = option => option.icon !== undefined;
export const optionsHaveIcons = options => {
  if (!options || options.length === 0) return false;
  return options.some(option => checkForIcon(option));
};
//# sourceMappingURL=options.js.map