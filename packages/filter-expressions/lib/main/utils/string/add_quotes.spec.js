"use strict";

var _add_quotes = require("./add_quotes");

describe('Add quotes', function () {
  describe('when the string contains any special characters', function () {
    it('returns the same string enclosed in quotation marks', function () {
      expect((0, _add_quotes.addQuotes)('something,')).toBe('"something,"');
      expect((0, _add_quotes.addQuotes)("something'")).toBe('"something\'"');
      expect((0, _add_quotes.addQuotes)('something"')).toBe('"something""');
    });
  });
  describe('when the string starts with a `-`', function () {
    it('returns the same string enclosed in quotation marks', function () {
      expect((0, _add_quotes.addQuotes)('-something')).toBe('"-something"');
    });
  });
  describe('when the string contains a `-`, but not at the start', function () {
    it('returns the same string not enclosed in quotation marks', function () {
      expect((0, _add_quotes.addQuotes)('some-thing')).toBe('some-thing');
    });
  });
});
//# sourceMappingURL=add_quotes.spec.js.map