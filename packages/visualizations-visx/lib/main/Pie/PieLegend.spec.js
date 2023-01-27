"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _PieLegend = require("./PieLegend");
var _scale = require("@visx/scale");

var globalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
beforeEach(function () {
  Element.prototype.getBoundingClientRect = jest.fn(function () {
    return {
      bottom: 0,
      height: 300,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 0,
      x: 0,
      y: 0
    };
  });
});
afterEach(function () {
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect;
});
describe('PieLegend', function () {
  var mockData = {
    'New York': 32,
    'Los Angeles': 20,
    Chicago: 17,
    Houston: 15,
    Philadelphia: 8,
    'San Diego': 4,
    'San Antonio': 4
  };
  var mockScale = (0, _scale.scaleOrdinal)({
    domain: Object.keys(mockData),
    range: Object.values(mockData).map(function () {
      return '#fa8072';
    })
  });
  it('paginates legend when height is smaller than content', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_PieLegend.PieLegend, {
      legendConfig: {
        type: 'legend',
        position: 'right',
        value: 'label_percent'
      },
      scale: mockScale,
      data: mockData,
      measureTotal: 100,
      width: 150,
      height: 150
    }));

    expect(_react2.screen.getByText('New York – 32.00%')).toBeInTheDocument();
    expect(_react2.screen.getByLabelText('Legend page 1 of 3')).toBeInTheDocument();
    expect(_react2.screen.getByText('Previous page').closest('button')).toBeDisabled();

    _react2.fireEvent.click(_react2.screen.getByText('Next page'));
    expect(_react2.screen.getByLabelText('Legend page 2 of 3')).toBeInTheDocument();

    _react2.fireEvent.click(_react2.screen.getByText('Next page'));
    expect(_react2.screen.getByLabelText('Legend page 3 of 3')).toBeInTheDocument();
    expect(_react2.screen.getByText('Next page').closest('button')).toBeDisabled();
  });
});
//# sourceMappingURL=PieLegend.spec.js.map