"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _YAxis = require("./YAxis");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

afterEach(function () {
  jest.resetAllMocks();
});
describe('YAxis', function () {
  var handleConfigChange = jest.fn();
  it('renders y-axis toggle when there are multiple config objects', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        y_axis: [{
          range: [0, 100]
        }, {
          range: ['auto', 'auto']
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    expect(_react2.screen.getByText('1')).toBeInTheDocument();
    expect(_react2.screen.getByText('2')).toBeInTheDocument();
  });
  it('hidden when Y-Axis is unsupported', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    })),
        container = _renderWithTheme.container;

    expect(container).toBeEmptyDOMElement();
  });
  it('toggles YAxis gridlines', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        y_axis: [{
          gridlines: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Render Gridlines'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        gridlines: true
      }]
    }));
  });
  it('updates YAxis label value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        y_axis: [{
          label: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.change(_react2.screen.getByLabelText('Label'), {
      target: {
        value: 'New Label'
      }
    });

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        label: 'New Label'
      }]
    }));
  });
  it('sets YAxis label to false when text input is empty', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        y_axis: [{
          label: 'Default Label'
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.change(_react2.screen.getByLabelText('Label'), {
      target: {
        value: ''
      }
    });

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        label: false
      }]
    }));
  });
  it('toggles YAxis values', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        y_axis: [{
          values: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Show Values'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        values: true
      }]
    }));
  });
  it('updates range: min', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        y_axis: [{
          range: ['auto', 'auto']
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.change(_react2.screen.getByLabelText('Y-min'), {
      target: {
        value: 20
      }
    });

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        range: [20, 'auto']
      }]
    }));
  });
  it('updates range: max', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_YAxis.YAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        y_axis: [{
          range: ['auto', 'auto']
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.change(_react2.screen.getByLabelText('Y-max'), {
      target: {
        value: 50
      }
    });

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      y_axis: [{
        range: ['auto', 50]
      }]
    }));
  });
});
//# sourceMappingURL=YAxis.spec.js.map