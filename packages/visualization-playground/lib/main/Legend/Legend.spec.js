"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _Legend = require("./Legend");

afterEach(function () {
  jest.resetAllMocks();
});
describe('Legend', function () {
  var handleConfigChange = jest.fn();
  it('hidden when legend is unsupported', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Legend.Legend, {
        config: {
          type: 'unsupported'
        },
        onConfigChange: handleConfigChange
      })),
      container = _renderWithTheme.container;
    expect(container).toBeEmptyDOMElement();
  });
  it('hide legend (position="none")', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Legend.Legend, {
      config: _visualizationsAdapters.mockPieConfig,
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Legend'));
    _react2.fireEvent.click(_react2.screen.getByText('none'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'pie',
      legend: false
    }));
  });
  it('change position', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Legend.Legend, {
      config: _visualizationsAdapters.mockLineConfig,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.click(_react2.screen.getByLabelText('Legend'));
    _react2.fireEvent.click(_react2.screen.getByText('top'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'line',
      legend: {
        position: 'top'
      }
    }));

    _react2.fireEvent.click(document);
  });
  it('edits legend type for Pie charts', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Legend.Legend, {
      config: _visualizationsAdapters.mockPieConfig,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.click(_react2.screen.getByLabelText('Legend Type'));
    _react2.fireEvent.click(_react2.screen.getByText('labels'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'pie',
      legend: {
        position: 'bottom',
        type: 'labels',
        value: 'label'
      }
    }));

    _react2.fireEvent.click(document);
  });
  it('edits legend values for Pie charts', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Legend.Legend, {
      config: _visualizationsAdapters.mockPieConfig,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.click(_react2.screen.getByLabelText('Legend Values'));
    _react2.fireEvent.click(_react2.screen.getByText('label_percent'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'pie',
      legend: {
        position: 'bottom',
        type: 'legend',
        value: 'label_percent'
      }
    }));

    _react2.fireEvent.click(document);
  });
  it('does not edit legend type or values for Line charts', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Legend.Legend, {
      config: _visualizationsAdapters.mockLineConfig,
      onConfigChange: handleConfigChange
    }));
    expect(_react2.screen.queryByLabelText('Legend Type')).not.toBeInTheDocument();
    expect(_react2.screen.queryByLabelText('Legend Values')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=Legend.spec.js.map