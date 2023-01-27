"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _componentsTestUtils = require("@looker/components-test-utils");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _Series = require("./Series");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
afterEach(function () {
  jest.resetAllMocks();
});
describe('Series', function () {
  var handleConfigChange = jest.fn();
  it('hidden when Series is unsupported', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
        fields: _visualizationsAdapters.mockFields,
        config: {
          type: 'unsupported'
        },
        onConfigChange: handleConfigChange
      })),
      container = _renderWithTheme.container;
    expect(container).toBeEmptyDOMElement();
  });
  it('renders a Series editor block for every element in the series', function () {
    var _mockLineConfig$serie;
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      fields: _visualizationsAdapters.mockFields,
      config: {
        type: _visualizationsAdapters.mockLineConfig.type,
        series: _visualizationsAdapters.mockLineConfig.series
      },
      onConfigChange: handleConfigChange
    }));
    expect(_react2.screen.getAllByRole('group')).toHaveLength(Array.isArray(_visualizationsAdapters.mockLineConfig.series) && (_visualizationsAdapters.mockLineConfig === null || _visualizationsAdapters.mockLineConfig === void 0 ? void 0 : (_mockLineConfig$serie = _visualizationsAdapters.mockLineConfig.series) === null || _mockLineConfig$serie === void 0 ? void 0 : _mockLineConfig$serie.length) || 0);
  });

  it('updates Series Color', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        series: {
          'orders.count': {
            color: '#ffffff'
          }
        }
      }),
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.change(_react2.screen.getByDisplayValue('#ffffff'), {
      target: {
        value: '#000000'
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          color: '#000000'
        }
      }
    }));
    var calls = handleConfigChange.mock.calls;
    var draftConfig = calls[calls.length - 1][0];
    expect(draftConfig.series['orders.count'].color).toBe('#000000');

    _react2.fireEvent.click(document);
  });
  it('updates Series Label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        series: {
          'orders.count': {
            label: 'Order Count'
          }
        }
      }),
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.change(_react2.screen.getByDisplayValue('Order Count'), {
      target: {
        value: '0RD3R C0UN7'
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          label: '0RD3R C0UN7'
        }
      }
    }));
  });
  it('updates Series Line Width', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        series: {
          'orders.count': {
            line_width: 5
          }
        }
      }),
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.change(_react2.screen.getByDisplayValue('5'), {
      target: {
        value: 15
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          line_width: 15
        }
      }
    }));
  });
  it('updates Series Point Shape', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        series: {
          'orders.count': {
            shape: 'circle'
          }
        }
      }),
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.click(_react2.screen.getByLabelText('Point Shape'));
    _react2.fireEvent.click(_react2.screen.getByText('square'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          shape: 'square'
        }
      }
    }));
  });
  it('updates Series Point Style', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        series: {
          'orders.count': {
            style: 'none'
          }
        }
      }),
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.click(_react2.screen.getByLabelText('Point Style'));
    _react2.fireEvent.click(_react2.screen.getByText('outline'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          style: 'outline'
        }
      }
    }));
  });
  it('updates Series Visibility', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        series: {
          'orders.count': {
            visible: false
          }
        }
      }),
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.click(_react2.screen.getByLabelText('Visible'));
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          visible: true
        }
      }
    }));
  });
  it('updates Series Size By', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: {
        type: 'scatter',
        series: {
          'orders.count': {
            size_by: 'none'
          }
        }
      },
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Size By'));

    _react2.fireEvent.click(_react2.screen.getAllByRole('option')[1]);
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          size_by: _visualizationsAdapters.mockFields.measures[0].name
        }
      }
    }));
  });
  it('updates Series Value Format', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_Series.Series, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        series: {
          'orders.count': {
            value_format: '#,##0.00'
          }
        }
      }),
      fields: _visualizationsAdapters.mockFields,
      onConfigChange: handleConfigChange
    }));
    _react2.fireEvent.change(_react2.screen.getByLabelText('Value Format'), {
      target: {
        value: '0'
      }
    });
    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      series: {
        'orders.count': {
          value_format: '0'
        }
      }
    }));
  });
});
//# sourceMappingURL=Series.spec.js.map