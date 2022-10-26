"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringFilterTypeToFilter = void 0;

var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));

var _MatchesAdvanced = require("../../MatchesAdvanced");

var _UserAttributes = require("../../UserAttributes");

var _MultiStringInput = require("../components/MultiStringInput");

var _StringInput = require("../components/StringInput");

var Blank = function Blank() {
  return '';
};

var filterTypeToStringMap = {
  "null": Blank,
  contains: _MultiStringInput.MultiStringInput,
  match: _MultiStringInput.MultiStringInput,
  startsWith: _MultiStringInput.MultiStringInput,
  endsWith: _MultiStringInput.MultiStringInput,
  blank: Blank,
  user_attribute: _UserAttributes.UserAttributes
};
var filterTypeToStringMapSingleValue = {
  contains: _StringInput.StringInput,
  match: _StringInput.StringInput,
  startsWith: _StringInput.StringInput,
  endsWith: _StringInput.StringInput
};

var stringFilterTypeToFilter = function stringFilterTypeToFilter(type, isParameterField, allowMultipleValues) {
  if ((!allowMultipleValues || isParameterField) && filterTypeToStringMapSingleValue[type]) {
    return filterTypeToStringMapSingleValue[type];
  }

  return (0, _defaultTo["default"])(filterTypeToStringMap[type], _MatchesAdvanced.MatchesAdvanced);
};

exports.stringFilterTypeToFilter = stringFilterTypeToFilter;
//# sourceMappingURL=string_filter_type_to_filter.js.map