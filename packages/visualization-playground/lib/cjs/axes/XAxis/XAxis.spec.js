"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _XAxis = require("./XAxis");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

afterEach(function () {
  jest.resetAllMocks();
});
describe('XAxis', function () {
  var handleConfigChange = jest.fn();
  it('renders x-axis toggle when there are multiple config objects', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_XAxis.XAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        x_axis: [{
          reversed: false
        }, {
          reversed: true
        }]
      }),
      onConfigChange: handleConfigChange
    }));
    expect(_react2.screen.getByText('1')).toBeInTheDocument();
    expect(_react2.screen.getByText('2')).toBeInTheDocument();
  });
  it('hidden when x-axis is unsupported', function () {
    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_XAxis.XAxis, {
      config: {
        type: 'unsupported'
      },
      onConfigChange: handleConfigChange
    })),
        container = _renderWithTheme.container;

    expect(container).toBeEmptyDOMElement();
  });
  it('toggles XAxis reversed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_XAxis.XAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        x_axis: [{
          reversed: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Reverse'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      x_axis: [{
        reversed: true
      }]
    }));
  });
  it('toggles XAxis gridlines', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_XAxis.XAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        x_axis: [{
          gridlines: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Render Gridlines'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      x_axis: [{
        gridlines: true
      }]
    }));
  });
  it('updates XAxis label value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_XAxis.XAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        x_axis: [{
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
      x_axis: [{
        label: 'New Label'
      }]
    }));
  });
  it('sets XAxis label to false when text input is empty', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_XAxis.XAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        x_axis: [{
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
      x_axis: [{
        label: false
      }]
    }));
  });
  it('toggles XAxis values', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_XAxis.XAxis, {
      config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
        x_axis: [{
          values: false
        }]
      }),
      onConfigChange: handleConfigChange
    }));

    _react2.fireEvent.click(_react2.screen.getByLabelText('Show Values'));

    expect(handleConfigChange).toHaveBeenLastCalledWith(expect.objectContaining({
      x_axis: [{
        values: true
      }]
    }));
  });
});
//# sourceMappingURL=XAxis.spec.js.map