"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterOptions = exports.createOptions = exports.createEnumeration = void 0;

var _components = require("@looker/components");

var createOption = function createOption(value) {
  return {
    value: value,
    label: value
  };
};

var createOptions = function createOptions(values) {
  if (!values) return [];
  var valuesArray = !Array.isArray(values) ? [values] : values;
  return valuesArray.map(function (value) {
    return createOption(value);
  });
};

exports.createOptions = createOptions;

var createEnumeration = function createEnumeration() {
  var isParameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (e) {
    return {
      label: e.label,
      value: isParameter ? unescapeParameterValue(e.value) : String(e.value)
    };
  };
};

exports.createEnumeration = createEnumeration;

var unescapeParameterValue = function unescapeParameterValue(value) {
  return String(value).replace(/^\^([-])/, '$1').replace(/\^([_%,"'])/g, '$1');
};

var filterOptions = function filterOptions(options, filterTerm, excludedValues) {
  if (!excludedValues && (!filterTerm || filterTerm === '')) return options;
  return options.filter(function (option) {
    return filterOption(option, filterTerm || '', excludedValues);
  });
};

exports.filterOptions = filterOptions;

var filterOption = function filterOption(option, filterTerm, excludedValues) {
  var matchesFilter = true;

  if (filterTerm !== '') {
    var filterText = filterTerm.trim().toLowerCase();
    var optionText = (0, _components.getComboboxText)(option).trim().toLowerCase();
    matchesFilter = optionText.indexOf(filterText) > -1;
  }

  return excludedValues ? matchesFilter && !excludedValues.includes(option.value) : matchesFilter;
};
//# sourceMappingURL=option_utils.js.map