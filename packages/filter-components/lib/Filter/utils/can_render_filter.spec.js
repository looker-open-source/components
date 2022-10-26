import { canRenderFilter } from './can_render_filter';
const renderFilterTests = [{
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

const testFilterConfig = testItem => {
  test(`${testItem.expression} ${testItem.config.type} ${testItem.result}`, () => {
    const {
      result,
      expression,
      expressionType,
      config
    } = testItem;
    expect(canRenderFilter({
      expression,
      expressionType,
      config
    })).toBe(result);
  });
};

describe('Test that filter can be rendered', () => {
  renderFilterTests.forEach(testFilterConfig);
});
//# sourceMappingURL=can_render_filter.spec.js.map