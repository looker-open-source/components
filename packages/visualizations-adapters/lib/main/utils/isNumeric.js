"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = void 0;

var isNumeric = function isNumeric(str) {
  return typeof str === 'number' || typeof str === 'string' && str !== '' && !isNaN(Number(str.replace(/\.|,/g, '')));
};
exports.isNumeric = isNumeric;
//# sourceMappingURL=isNumeric.js.map