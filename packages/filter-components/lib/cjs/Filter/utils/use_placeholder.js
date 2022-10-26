"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlaceholder = void 0;

var _utils = require("../../utils");

var usePlaceholder = function usePlaceholder(value, validationMessage) {
  var _useTranslation = (0, _utils.useTranslation)('use_placeholder'),
      t = _useTranslation.t;

  var anyValue = t('any value');
  var placeholder = !value || value.length === 0 ? (validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.message) || anyValue : '';
  return {
    'aria-label': anyValue,
    placeholder: placeholder
  };
};

exports.usePlaceholder = usePlaceholder;
//# sourceMappingURL=use_placeholder.js.map