"use strict";

var _can_render_filter = require("./can_render_filter");

var renderFilterTests = [{
  expression: '25',
  expressionType: 'number',
  config: {
    type: 'slider',
    display: 'inline'
  },
  result: true
}, {
  expression: '20,30,40',
  expressionType: 'number',
  config: {
    type: 'slider',
    display: 'inline'
  },
  result: false
}, {
  expression: '[25,75]',
  expressionType: 'number',
  config: {
    type: 'range_slider',
    display: 'inline'
  },
  result: true
}, {
  expression: '25',
  expressionType: 'number',
  config: {
    type: 'range_slider',
    display: 'inline'
  },
  result: false
}];

var testFilterConfig = function testFilterConfig(testItem) {
  test("".concat(testItem.expression, " ").concat(testItem.config.type, " ").concat(testItem.result), function () {
    var result = testItem.result,
        expression = testItem.expression,
        expressionType = testItem.expressionType,
        config = testItem.config;
    expect((0, _can_render_filter.canRenderFilter)({
      expression: expression,
      expressionType: expressionType,
      config: config
    })).toBe(result);
  });
};

describe('Test that filter can be rendered', function () {
  renderFilterTests.forEach(testFilterConfig);
});
//# sourceMappingURL=can_render_filter.spec.js.map