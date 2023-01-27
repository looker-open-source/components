"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _componentsTestUtils = require("@looker/components-test-utils");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _react2 = require("@testing-library/react");
var _SingleValue = require("./SingleValue");

describe('SingleValue', function () {
  it('renders a single value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_SingleValue.SingleValue, {
      config: {
        series: [{
          color: '#f13136',
          label: 'orders',
          value_format: '0,0.[00]'
        }],
        type: 'single_value'
      },
      data: _visualizationsAdapters.mockData,
      fields: _visualizationsAdapters.mockFields
    }));
    expect(_react2.screen.getByText('87')).toBeVisible();
    expect(_react2.screen.getByText('orders')).toBeVisible();
  });
});
//# sourceMappingURL=SingleValue.spec.js.map