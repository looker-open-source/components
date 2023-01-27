

import { stringFilterToString } from './string_filter_to_string';
describe('String filter to string', () => {
  it('returns empty string for a match item with empty value', () => {
    const item = {
      is: true,
      id: '1',
      type: 'match',
      value: null
    };
    const result = stringFilterToString(item);
    expect(result).toBe('');
  });
  it('returns empty string for a user attribute item with no value', () => {
    const item = {
      is: true,
      id: '1',
      type: 'user_attribute',
      value: []
    };
    const result = stringFilterToString(item);
    expect(result).toBe('');
  });
  it('returns user attribute item with value', () => {
    const item = {
      is: true,
      id: '1',
      type: 'user_attribute',
      value: [],
      attributeName: 'test',
      attributeValue: 'testytest'
    };
    const result = stringFilterToString(item);
    expect(result).toBe(`{{ _user_attributes['test'] }}`);
  });
  it('returns quoted empty when set as value for an is (match) node', () => {
    const item = {
      is: true,
      id: '1',
      type: 'match',
      value: ['empty']
    };
    const result = stringFilterToString(item);
    expect(result).toBe('"empty"');
  });
  it('returns quoted null when set as value for an is (match) node', () => {
    const item = {
      is: true,
      id: '1',
      type: 'match',
      value: ['null']
    };
    const result = stringFilterToString(item);
    expect(result).toBe('"null"');
  });
  describe('when type of filter is `other`', () => {
    describe('and is including', () => {
      it('returns values separated by a comma', () => {
        const item = {
          is: true,
          id: '1',
          type: 'other',
          value: ['value1', 'value2']
        };
        const result = stringFilterToString(item);
        expect(result).toBe('value1,value2');
      });
    });
    describe('and is excluding', () => {
      it('returns values separated by a comma and negated', () => {
        const item = {
          is: false,
          id: '1',
          type: 'other',
          value: ['value1', 'value2']
        };
        const result = stringFilterToString(item);
        expect(result).toBe('-value1,-value2');
      });
    });
  });
});
//# sourceMappingURL=string_filter_to_string.spec.js.map