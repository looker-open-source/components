"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumberFromString = void 0;

var isUnsafeIntegerString = function isUnsafeIntegerString(text) {
  return text.length > 15 && text.indexOf('.') === -1;
};

var getNumberFromString = function getNumberFromString(text) {
  if (isUnsafeIntegerString(text)) {
    return BigInt(text);
  }
  return Number(text);
};
exports.getNumberFromString = getNumberFromString;
//# sourceMappingURL=get_number_from_string.js.map