"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tierFilterTypeToFilter = void 0;

var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));

var _MatchesAdvanced = require("../../MatchesAdvanced");

var _MultiStringInput = require("../../StringFilter/components/MultiStringInput");

var _StringInput = require("../../StringFilter/components/StringInput");

var _UserAttributes = require("../../UserAttributes");

var _ParamFilter = require("../components/ParamFilter");

var typeMap = {
  anyvalue: function anyvalue() {
    return '';
  },
  match: _MultiStringInput.MultiStringInput,
  user_attribute: _UserAttributes.UserAttributes
};
var typeMapSingleInput = {
  match: _StringInput.StringInput
};

var tierFilterTypeToFilter = function tierFilterTypeToFilter(type, isParamFilter, allowMultipleValues) {
  if (isParamFilter && type !== 'user_attribute') {
    return _ParamFilter.ParamFilter;
  } else if (!allowMultipleValues && typeMapSingleInput[type]) {
    return typeMapSingleInput[type];
  }

  return (0, _defaultTo["default"])(typeMap[type], _MatchesAdvanced.MatchesAdvanced);
};

exports.tierFilterTypeToFilter = tierFilterTypeToFilter;
//# sourceMappingURL=tier_filter_type_to_filter.js.map