"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _Sparkline = require("./Sparkline");

describe('Sparkline Chart', function () {
  it('renders an svg based derived from two dimensional response', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Sparkline.Sparkline, {
      config: {
        type: 'sparkline'
      },
      data: _visualizationsAdapters.mockData,
      fields: _visualizationsAdapters.mockFields
    }));
    expect(_react2.screen.getByTestId('sparkline-chart')).toMatchInlineSnapshot("\n      <svg\n        data-testid=\"sparkline-chart\"\n        height=\"500\"\n      >\n        <path\n          class=\"visx-linepath\"\n          d=\"M1.5,498.5L0,1.5L-1.5,96.26133333333331\"\n          fill=\"transparent\"\n          stroke=\"#6C43E0\"\n          stroke-linecap=\"round\"\n          stroke-width=\"3\"\n        />\n      </svg>\n    ");
  });
  it('accepts line width overrides', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Sparkline.Sparkline, {
      config: {
        series: [{
          line_width: 5
        }],
        type: 'sparkline'
      },
      data: _visualizationsAdapters.mockData,
      fields: _visualizationsAdapters.mockFields
    }));
    var linePath = _react2.screen.getByTestId('sparkline-chart').firstChild;
    expect(linePath).toHaveAttribute('stroke-width', '5');
  });
  it('renders multiple svg paths when encountering a null data point', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Sparkline.Sparkline, {
      config: {
        type: 'sparkline'
      },
      data: _visualizationsAdapters.mockDataWithNull,
      fields: _visualizationsAdapters.mockFields
    }));
    expect(_react2.screen.getByTestId('sparkline-chart')).toMatchInlineSnapshot("\n      <svg\n        data-testid=\"sparkline-chart\"\n        height=\"500\"\n      >\n        <path\n          class=\"visx-linepath\"\n          d=\"M1.5,1.5L0.75,498.5\"\n          fill=\"transparent\"\n          stroke=\"#6C43E0\"\n          stroke-linecap=\"round\"\n          stroke-width=\"3\"\n        />\n        <path\n          class=\"visx-linepath\"\n          d=\"M-0.75,1.5L-1.5,285.784\"\n          fill=\"transparent\"\n          stroke=\"#6C43E0\"\n          stroke-linecap=\"round\"\n          stroke-width=\"3\"\n        />\n      </svg>\n    ");
  });
});
//# sourceMappingURL=Sparkline.spec.js.map