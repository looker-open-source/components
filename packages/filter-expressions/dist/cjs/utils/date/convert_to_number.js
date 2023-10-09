"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToNumber = void 0;
var validateValue = function validateValue(value) {
  return !value ? '0' : value;
};
var convertToNumber = function convertToNumber(value) {
  return parseInt(validateValue(value), 10);
};
exports.convertToNumber = convertToNumber;
//# sourceMappingURL=convert_to_number.js.map