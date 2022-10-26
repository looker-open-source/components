"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useValidationMessage = void 0;

var _utils = require("../../utils");

var _constants = require("../../constants");

var useValidationMessage = function useValidationMessage(filterExpression, isRequired) {
  var _useTranslation = (0, _utils.useTranslation)('use_validation_message'),
      t = _useTranslation.t;

  return isRequired && !filterExpression ? {
    type: _constants.ERROR_TYPE,
    message: t('Value required')
  } : {};
};

exports.useValidationMessage = useValidationMessage;
//# sourceMappingURL=use_validation_message.js.map