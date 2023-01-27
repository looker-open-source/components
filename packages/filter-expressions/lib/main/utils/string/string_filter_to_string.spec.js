"use strict";

var _string_filter_to_string = require("./string_filter_to_string");

describe('String filter to string', function () {
  it('returns empty string for a match item with empty value', function () {
    var item = {
      is: true,
      id: '1',
      type: 'match',
      value: null
    };
    var result = (0, _string_filter_to_string.stringFilterToString)(item);
    expect(result).toBe('');
  });
  it('returns empty string for a user attribute item with no value', function () {
    var item = {
      is: true,
      id: '1',
      type: 'user_attribute',
      value: []
    };
    var result = (0, _string_filter_to_string.stringFilterToString)(item);
    expect(result).toBe('');
  });
  it('returns user attribute item with value', function () {
    var item = {
      is: true,
      id: '1',
      type: 'user_attribute',
      value: [],
      attributeName: 'test',
      attributeValue: 'testytest'
    };
    var result = (0, _string_filter_to_string.stringFilterToString)(item);
    expect(result).toBe("{{ _user_attributes['test'] }}");
  });
  it('returns quoted empty when set as value for an is (match) node', function () {
    var item = {
      is: true,
      id: '1',
      type: 'match',
      value: ['empty']
    };
    var result = (0, _string_filter_to_string.stringFilterToString)(item);
    expect(result).toBe('"empty"');
  });
  it('returns quoted null when set as value for an is (match) node', function () {
    var item = {
      is: true,
      id: '1',
      type: 'match',
      value: ['null']
    };
    var result = (0, _string_filter_to_string.stringFilterToString)(item);
    expect(result).toBe('"null"');
  });
  describe('when type of filter is `other`', function () {
    describe('and is including', function () {
      it('returns values separated by a comma', function () {
        var item = {
          is: true,
          id: '1',
          type: 'other',
          value: ['value1', 'value2']
        };
        var result = (0, _string_filter_to_string.stringFilterToString)(item);
        expect(result).toBe('value1,value2');
      });
    });
    describe('and is excluding', function () {
      it('returns values separated by a comma and negated', function () {
        var item = {
          is: false,
          id: '1',
          type: 'other',
          value: ['value1', 'value2']
        };
        var result = (0, _string_filter_to_string.stringFilterToString)(item);
        expect(result).toBe('-value1,-value2');
      });
    });
  });
});
//# sourceMappingURL=string_filter_to_string.spec.js.map