"use strict";

var _escape_with_caret = require("./escape_with_caret");

describe('Escape With Caret', function () {
  describe('when the string contains any special characters', function () {
    it('returns the same string with special characters escaped with a caret', function () {
      expect((0, _escape_with_caret.escapeWithCaret)('something^')).toBe('something^^');
      expect((0, _escape_with_caret.escapeWithCaret)('something_')).toBe('something^_');
      expect((0, _escape_with_caret.escapeWithCaret)('something%')).toBe('something^%');
      expect((0, _escape_with_caret.escapeWithCaret)('something,')).toBe('something^,');
    });
  });
  describe('when the string does not contain any special characters', function () {
    it('returns the same string', function () {
      expect((0, _escape_with_caret.escapeWithCaret)('some-thing;.')).toBe('some-thing;.');
    });
  });
});
//# sourceMappingURL=escape_with_caret.spec.js.map