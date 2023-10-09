"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareOption = compareOption;
exports.getFirstOption = getFirstOption;
exports.getMatchingOption = getMatchingOption;
exports.getOption = getOption;
exports.getOptions = getOptions;
exports.notInOptions = notInOptions;
exports.optionsHaveIcons = void 0;
var _Combobox = require("../../Combobox");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function getMatchingOption(value, options) {
  return options === null || options === void 0 ? void 0 : options.find(function (option) {
    return option.value === value;
  });
}
function getOption(value, options) {
  var matchingOption = getMatchingOption(value, options);
  var label = matchingOption === null || matchingOption === void 0 ? void 0 : matchingOption.label;
  var labelProps = label ? {
    label: label
  } : {};
  return value !== undefined ? _objectSpread(_objectSpread({}, labelProps), {}, {
    value: value
  }) : undefined;
}
function getOptions(values, options) {
  if (!values) return undefined;
  return values.map(function (value) {
    return {
      label: (0, _Combobox.getComboboxText)(value, options),
      value: value
    };
  });
}
function compareOption(option, value) {
  return (0, _Combobox.getComboboxText)(option).toLowerCase() === value.toLowerCase();
}
function getFirstOption(options) {
  var optionAsGroup = options[0];
  if (optionAsGroup && optionAsGroup.options) return optionAsGroup.options[0];
  return options[0];
}
function notInOptions(currentOptions, options, inputValue) {
  if (!inputValue) return false;
  if (currentOptions.find(function (option) {
    return compareOption(option, inputValue);
  })) {
    return false;
  }
  if (!options) return true;
  return options.find(function (option) {
    return compareOption(option, inputValue);
  }) === undefined;
}
var checkForIcon = function checkForIcon(option) {
  return option.icon !== undefined;
};
var optionsHaveIcons = function optionsHaveIcons(options) {
  if (!options || options.length === 0) return false;
  return options.some(function (option) {
    return checkForIcon(option);
  });
};
exports.optionsHaveIcons = optionsHaveIcons;
//# sourceMappingURL=options.js.map