"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatErrorMessage = void 0;

var ERROR_MAP = {
  'Invalid time value': 'You have invalid values in your date or time dimension. One common fix is to filter out all null values and invalid date or time strings from your dimension.'
};

var formatErrorMessage = function formatErrorMessage(errorMessage) {
  if (errorMessage.message === 'Invalid time value') {
    return ERROR_MAP['Invalid time value'];
  }
  return errorMessage.toString();
};
exports.formatErrorMessage = formatErrorMessage;
//# sourceMappingURL=formatErrorMessage.js.map