"use strict";

var _calculate_suggest_options = require("./calculate_suggest_options");

describe('Calculate Suggest Options', function () {
  var test_options = [{
    value: 'a',
    label: 'a'
  }, {
    value: 'b',
    label: 'b'
  }, {
    value: 'c',
    label: 'c'
  }, {
    value: 'd',
    label: 'd'
  }, {
    value: 'e',
    label: 'e'
  }, {
    value: 'f',
    label: 'f'
  }, {
    value: 'g',
    label: 'g'
  }, {
    value: 'h',
    label: 'h'
  }, {
    value: 'i',
    label: 'i'
  }, {
    value: 'j',
    label: 'j'
  }, {
    value: 'k',
    label: 'k'
  }, {
    value: 'l',
    label: 'l'
  }, {
    value: 'm',
    label: 'm'
  }, {
    value: 'n',
    label: 'n'
  }, {
    value: 'o',
    label: 'o'
  }, {
    value: 'p',
    label: 'p'
  }, {
    value: 'q',
    label: 'q'
  }, {
    value: 'r',
    label: 'r'
  }, {
    value: 's',
    label: 's'
  }, {
    value: 't',
    label: 't'
  }, {
    value: 'u',
    label: 'u'
  }, {
    value: 'v',
    label: 'v'
  }, {
    value: 'w',
    label: 'w'
  }, {
    value: 'x',
    label: 'x'
  }, {
    value: 'y',
    label: 'y'
  }, {
    value: 'z',
    label: 'z'
  }];
  it('Return existing values along with current options', function () {
    expect((0, _calculate_suggest_options.calculateSuggestOptions)({
      value: ['a', 'z'],
      options: test_options,
      max: 5
    })).toMatchSnapshot();
  });
  it('Return existing values along with current options 2', function () {
    expect((0, _calculate_suggest_options.calculateSuggestOptions)({
      value: ['a', 'z', 'zz', 'zba'],
      options: test_options,
      max: 5
    })).toMatchSnapshot();
  });
  it('Return limited existing values if over limit', function () {
    expect((0, _calculate_suggest_options.calculateSuggestOptions)({
      value: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      options: ['x', 'y', 'z'],
      max: 5
    })).toMatchSnapshot();
  });
  it('Return only existing values if at limit', function () {
    expect((0, _calculate_suggest_options.calculateSuggestOptions)({
      value: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      options: ['x', 'y', 'z'],
      max: 7
    })).toMatchSnapshot();
  });
  it('Return only options if no value', function () {
    expect((0, _calculate_suggest_options.calculateSuggestOptions)({
      value: [],
      options: test_options,
      max: 7
    })).toMatchSnapshot();
  });
  it('Return everything if no max', function () {
    expect((0, _calculate_suggest_options.calculateSuggestOptions)({
      value: ['aa', 'z', 'b', 'gg'],
      options: test_options,
      max: null
    })).toMatchSnapshot();
  });
  it('Return normally if no string', function () {
    expect((0, _calculate_suggest_options.calculateSuggestOptions)({
      value: [100, 200],
      options: [1, 2, 3, 4, 5],
      max: 3
    })).toMatchSnapshot();
  });
});
//# sourceMappingURL=calculate_suggest_options.spec.js.map