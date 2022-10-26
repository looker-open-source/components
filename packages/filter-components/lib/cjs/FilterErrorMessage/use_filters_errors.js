"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFiltersErrors = void 0;

var _some = _interopRequireDefault(require("lodash/some"));

var _filterExpressions = require("@looker/filter-expressions");

var _utils = require("../utils");

var _constants = require("../constants");

var useFiltersErrors = function useFiltersErrors(filters) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    userAttributes: [],
    useLongMessageForm: false
  };

  var _useTranslation = (0, _utils.useTranslation)('use_filters_errors'),
      t = _useTranslation.t;

  var result = {};
  (0, _some["default"])(filters, function (filter) {
    if (filter.isRequired && !filter.expression) {
      result = {
        type: _constants.ERROR_TYPE,
        message: t('Selection required')
      };
      return true;
    }

    if (hasAtLeastOneMissingUserAttributeValue(filter, options === null || options === void 0 ? void 0 : options.userAttributes)) {
      var message = options !== null && options !== void 0 && options.useLongMessageForm ? t('No value is set for your user attribute') : t('Invalid value');
      result = {
        type: _constants.ERROR_TYPE,
        message: message
      };
      return true;
    }

    return false;
  });
  return result;
};

exports.useFiltersErrors = useFiltersErrors;

var hasAtLeastOneMissingUserAttributeValue = function hasAtLeastOneMissingUserAttributeValue(filter, userAttributes) {
  var expressionType = filter.expressionType || (0, _filterExpressions.getExpressionType)({
    type: filter.type,
    field: filter.field || undefined
  });
  var attribute = (0, _filterExpressions.getUserAttributeMatchingTypeAndExpression)(expressionType, filter.expression, userAttributes);
  return !!attribute && !attribute.value;
};
//# sourceMappingURL=use_filters_errors.js.map