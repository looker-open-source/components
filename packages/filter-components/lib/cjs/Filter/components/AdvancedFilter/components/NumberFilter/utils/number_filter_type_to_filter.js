"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberFilterTypeToFilter = void 0;

var _MatchesAdvanced = require("../../MatchesAdvanced");

var _UserAttributes = require("../../UserAttributes");

var _Between = require("../components/Between");

var _MultiInput = require("../components/MultiInput");

var _SingleNumberInput = require("../components/SingleNumberInput");

var Blank = function Blank() {
  return '';
};

var filterTypeToNumberMap = {
  '=': _MultiInput.MultiInput,
  '>': _SingleNumberInput.SingleNumberInput,
  '<': _SingleNumberInput.SingleNumberInput,
  '>=': _SingleNumberInput.SingleNumberInput,
  '<=': _SingleNumberInput.SingleNumberInput,
  between: _Between.Between,
  "null": Blank,
  user_attribute: _UserAttributes.UserAttributes
};
var filterTypeToNumberMapSingleInput = {
  '=': _SingleNumberInput.SingleNumberInput
};

var numberFilterTypeToFilter = function numberFilterTypeToFilter(type, allowMultipleOptions, isParameterField) {
  if ((!allowMultipleOptions || isParameterField) && filterTypeToNumberMapSingleInput[type]) {
    return filterTypeToNumberMapSingleInput[type];
  }

  return filterTypeToNumberMap[type] || _MatchesAdvanced.MatchesAdvanced;
};

exports.numberFilterTypeToFilter = numberFilterTypeToFilter;
//# sourceMappingURL=number_filter_type_to_filter.js.map