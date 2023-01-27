"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQuotes = void 0;

var addQuotes = function addQuotes(value) {
  return /^-|['",]/.test(value) ? "\"".concat(value, "\"") : value;
};
exports.addQuotes = addQuotes;
//# sourceMappingURL=add_quotes.js.map