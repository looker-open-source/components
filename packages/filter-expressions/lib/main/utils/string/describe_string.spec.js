"use strict";

var _i18n = require("../i18n");
var _describe_string = require("./describe_string");

describe('String summary', function () {
  beforeEach(function () {
    return (0, _i18n.i18nInit)();
  });
  it('returns empty string for an invalid item type', function () {
    var item = {
      id: '1',
      type: 'what',
      is: false
    };
    expect((0, _describe_string.describeString)(item)).toBe('');
  });
  describe('when type of filter is `match`', function () {
    describe('and is including', function () {
      describe('and values do not contain special characters', function () {
        it('returns a string containing all values, unquoted, and separated by `or`', function () {
          var item = {
            is: true,
            id: '1',
            type: 'match',
            value: ['value1', 'value2']
          };
          expect((0, _describe_string.describeString)(item)).toBe('is value1 or value2');
        });
      });
      describe('and values contain special characters', function () {
        it('returns a string containing all values, unquoted, and separated by `or`', function () {
          var item = {
            is: true,
            id: '1',
            type: 'match',
            value: ['value1"', 'value2,']
          };
          expect((0, _describe_string.describeString)(item)).toBe('is "value1"" or "value2,"');
        });
      });
    });
    describe('and is excluding', function () {
      describe('and values do not contain special characters', function () {
        it('returns a string containing all values, unquoted, and separated by `or`', function () {
          var item = {
            is: false,
            id: '1',
            type: 'match',
            value: ['value1', 'value2']
          };
          expect((0, _describe_string.describeString)(item)).toBe('is not value1 or value2');
        });
      });
      describe('and values contain special characters', function () {
        it('returns a string containing all values, unquoted, and separated by `or`', function () {
          var item = {
            is: false,
            id: '1',
            type: 'match',
            value: ['value1"', 'value2,']
          };
          expect((0, _describe_string.describeString)(item)).toBe('is not "value1"" or "value2,"');
        });
      });
    });
  });
});
//# sourceMappingURL=describe_string.spec.js.map