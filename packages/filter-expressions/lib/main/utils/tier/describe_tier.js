"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeTier = void 0;
var _defaultTo = _interopRequireDefault(require("lodash/defaultTo"));
var _keyBy = _interopRequireDefault(require("lodash/keyBy"));
var _add_quotes = require("../string/add_quotes");
var _describe_is_item = require("../summary/describe_is_item");
var _describe_is_any_value = require("../summary/describe_is_any_value");
var _join_or = require("../summary/join_or");
var _describe_user_attribute = require("../user_attribute/describe_user_attribute");
var _escape_parameter_value = require("./escape_parameter_value");

var describeMultiValue = function describeMultiValue(values, field) {
  if (values) {
    if (field !== null && field !== void 0 && field.parameter && field !== null && field !== void 0 && field.has_allowed_values) {
      var valueMap = (0, _keyBy["default"])(field.enumerations, 'value');
      return (0, _join_or.joinOr)(values.map(function (value) {
        var _valueMap$escapedValu;
        var escapedValue = (0, _escape_parameter_value.escapeParameterValue)(value);
        return ((_valueMap$escapedValu = valueMap[escapedValue]) === null || _valueMap$escapedValu === void 0 ? void 0 : _valueMap$escapedValu.label) || value;
      }));
    }
    return (0, _join_or.joinOr)(values.map(_add_quotes.addQuotes));
  }
  return '';
};
var match = function match(_ref, _, field) {
  var is = _ref.is,
    value = _ref.value;
  return value && value.length ? (0, _describe_is_item.describeIsItem)(is, describeMultiValue(value, field)) : (0, _describe_is_any_value.describeIsAnyValue)();
};
var filterToStringMap = {
  match: match,
  user_attribute: _describe_user_attribute.describeUserAttribute,
  anyvalue: _describe_is_any_value.describeIsAnyValue
};

var describeTier = function describeTier(item, filterType, field) {
  return (0, _defaultTo["default"])(filterToStringMap[item.type], function () {
    return '';
  })(item, filterType, field);
};
exports.describeTier = describeTier;
//# sourceMappingURL=describe_tier.js.map