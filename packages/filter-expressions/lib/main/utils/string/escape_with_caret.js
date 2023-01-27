"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeWithCaret = void 0;

var escapeWithCaret = function escapeWithCaret(value) {
  return value.replace(/[%^_,]/g, function (c) {
    return "^".concat(c);
  });
};
exports.escapeWithCaret = escapeWithCaret;
//# sourceMappingURL=escape_with_caret.js.map