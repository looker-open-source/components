"use strict";

var _paddingDefaultsHelper = require("./paddingDefaultsHelper");

describe('paddingDefaultsHelper', function () {
  test('p', function () {
    expect((0, _paddingDefaultsHelper.paddingDefaultsHelper)({
      p: 'small'
    }, {
      p: 'medium'
    })).toMatchInlineSnapshot({}, "\n      Object {\n        \"p\": \"small\",\n      }\n    ");
  });
  test('pl', function () {
    expect((0, _paddingDefaultsHelper.paddingDefaultsHelper)({
      pl: 'small'
    }, {
      p: 'medium'
    })).toMatchInlineSnapshot({}, "\n      Object {\n        \"pl\": \"small\",\n        \"pr\": \"medium\",\n        \"py\": \"medium\",\n      }\n    ");
  });
  test('py', function () {
    expect((0, _paddingDefaultsHelper.paddingDefaultsHelper)({
      py: 'small'
    }, {
      px: 'medium'
    })).toMatchInlineSnapshot({}, "\n      Object {\n        \"px\": \"medium\",\n        \"py\": \"small\",\n      }\n    ");
  });
  test('pl vs px', function () {
    expect((0, _paddingDefaultsHelper.paddingDefaultsHelper)({
      pl: 'small'
    }, {
      px: 'medium'
    })).toMatchInlineSnapshot({}, "\n      Object {\n        \"pl\": \"small\",\n        \"pr\": \"medium\",\n      }\n    ");
  });
  test('none', function () {
    expect((0, _paddingDefaultsHelper.paddingDefaultsHelper)({}, {
      p: 'medium'
    })).toMatchInlineSnapshot({}, "\n      Object {\n        \"p\": \"medium\",\n      }\n    ");
  });
  test('no defaults', function () {
    expect((0, _paddingDefaultsHelper.paddingDefaultsHelper)({
      pl: 'medium',
      px: 'small'
    }, {})).toMatchInlineSnapshot({}, "\n      Object {\n        \"pl\": \"medium\",\n        \"pr\": \"small\",\n      }\n    ");
  });
  test('compass points', function () {
    expect((0, _paddingDefaultsHelper.paddingDefaultsHelper)({
      pb: 'xsmall',
      pl: 'small',
      pr: 'medium',
      pt: 'large',
      px: 'xlarge'
    }, {
      p: 'xxlarge'
    })).toMatchInlineSnapshot({}, "\n      Object {\n        \"pb\": \"xsmall\",\n        \"pl\": \"small\",\n        \"pr\": \"medium\",\n        \"pt\": \"large\",\n      }\n    ");
  });
});
//# sourceMappingURL=paddingDefaultsHelper.spec.js.map