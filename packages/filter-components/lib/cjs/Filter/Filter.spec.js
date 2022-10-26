"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _components = require("@looker/components");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireWildcard(require("react"));

var _Filter = require("./Filter");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Filter', function () {
  it('reflects changes to the expression prop', function () {
    var onChangeMock = jest.fn();

    var _renderWithTheme = (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: "",
      expressionType: "date",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    })),
        rerender = _renderWithTheme.rerender;

    expect(_react.screen.getByText('is any time')).toBeVisible();
    rerender(_react2["default"].createElement(_components.ComponentsProvider, null, _react2["default"].createElement(_Filter.Filter, {
      expression: "1999",
      expressionType: "date",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    })));
    expect(_react.screen.getByDisplayValue('is in the year')).toBeVisible();
    expect(_react.screen.getByDisplayValue('1999')).toBeVisible();
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  it('reflects changes to the filter type prop', function () {
    var onChangeMock = jest.fn();

    var _renderWithTheme2 = (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: "1999",
      expressionType: "date",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    })),
        rerender = _renderWithTheme2.rerender;

    expect(_react.screen.getByDisplayValue('is in the year')).toBeVisible();
    expect(_react.screen.getByDisplayValue('1999')).toBeVisible();
    rerender(_react2["default"].createElement(_components.ComponentsProvider, null, _react2["default"].createElement(_Filter.Filter, {
      expression: "1999",
      expressionType: "string",
      onChange: onChangeMock,
      name: "Test Filter",
      allowMultipleValues: true
    })));
    expect(_react.screen.getByDisplayValue('is')).toBeVisible();
    expect(_react.screen.getByText('1999')).toBeVisible();
  });
  it('handles multi-step interactive changes', function () {
    var onChangeMock = jest.fn();

    var TestComponent = function TestComponent() {
      var _useState = (0, _react2.useState)(''),
          _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
          expression = _useState2[0],
          setExpression = _useState2[1];

      var handleChange = function handleChange(value) {
        onChangeMock(value);
        setExpression(value.expression);
      };

      return _react2["default"].createElement(_Filter.Filter, {
        expression: expression,
        expressionType: "number",
        onChange: handleChange,
        name: "Test Filter",
        allowMultipleValues: true
      });
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));

    var select = _react.screen.getByDisplayValue('is');

    _react.fireEvent.click(select);

    _react.fireEvent.click(_react.screen.getByText('is between'));

    _react.fireEvent.change(_react.screen.getByTestId('low'), {
      target: {
        value: '5'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '[5,]'
    });
    expect(_react.screen.getByDisplayValue('is between')).toBeVisible();

    _react.fireEvent.change(_react.screen.getByTestId('high'), {
      target: {
        value: '10'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '[5,]'
    });
  });
  it('handles multi-step interactive changes with proper on change', function () {
    var onChangeMock = jest.fn();

    var TestComponent = function TestComponent() {
      var _useState3 = (0, _react2.useState)('[5,]'),
          _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
          expression = _useState4[0],
          setExpression = _useState4[1];

      var handleChange = function handleChange(value) {
        onChangeMock(value);
        setExpression(value.expression);
      };

      return _react2["default"].createElement(_Filter.Filter, {
        expression: expression,
        expressionType: "number",
        onChange: handleChange,
        name: "Test Filter",
        allowMultipleValues: true
      });
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));
    expect(onChangeMock).not.toHaveBeenCalled();

    _react.fireEvent.change(_react.screen.getByTestId('single-number'), {
      target: {
        value: '5'
      }
    });

    expect(onChangeMock).not.toHaveBeenCalled();

    _react.fireEvent.change(_react.screen.getByTestId('single-number'), {
      target: {
        value: '6'
      }
    });

    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '>=6'
    });
  });
  it('use dispatchConfigTypeChange to call onChange in EditMode', function () {
    var onChangeMock = jest.fn();

    var TestComponent = function TestComponent() {
      return _react2["default"].createElement(_Filter.Filter, {
        expression: '1',
        expressionType: "number",
        onChange: onChangeMock,
        name: "Test Filter",
        config: {
          display: 'inline',
          type: 'slider'
        },
        dispatchConfigTypeChange: true,
        allowMultipleValues: true
      });
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));
    expect(onChangeMock).toHaveBeenCalledWith({
      expression: '1'
    });
  });
  it('does not call onChange when dispatchConfigTypeChange is false', function () {
    var onChangeMock = jest.fn();

    var TestComponent = function TestComponent() {
      return _react2["default"].createElement(_Filter.Filter, {
        expression: '1,2,3',
        expressionType: "number",
        onChange: onChangeMock,
        name: "Test Filter",
        config: {
          display: 'inline',
          type: 'slider'
        },
        dispatchConfigTypeChange: false,
        allowMultipleValues: true
      });
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  it('does not switch component types while typing (Matches Advanced)', function () {
    var expression = '5 mont';

    var onChange = function onChange(newValue) {
      expression = newValue.expression;
    };

    var TestComponent = function TestComponent() {
      var _useState5 = (0, _react2.useState)(false),
          _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
          setUpdate = _useState6[1];

      return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("button", {
        onClick: function onClick() {
          return setUpdate(true);
        }
      }, "rerender"), _react2["default"].createElement(_Filter.Filter, {
        expression: expression,
        expressionType: "date",
        onChange: onChange,
        name: "Test Filter",
        allowMultipleValues: true
      }));
    };

    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(TestComponent, null));

    var inputs = _react.screen.getAllByRole('textbox');

    expect(inputs[0]).toHaveValue('matches (advanced)');
    expect(inputs[1]).toHaveValue('5 mont');

    _react.fireEvent.change(inputs[1], {
      target: {
        value: '5 month'
      }
    });

    _react.fireEvent.click(_react.screen.getByText('rerender'));

    var updatedInputs = _react.screen.getAllByRole('textbox');

    expect(updatedInputs[0]).toHaveValue('matches (advanced)');
    expect(updatedInputs[1]).toHaveValue('5 month');
  });
  it('requires at least one of: expressionType, field, type', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: "",
      name: "test"
    }));
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: "",
      name: "test",
      expressionType: "string"
    }));
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: "",
      name: "test",
      field: {}
    }));
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: "",
      name: "test",
      type: "date_filter"
    }));
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_Filter.Filter, {
      expression: "",
      name: "test",
      expressionType: "string",
      field: {},
      type: "field_filter"
    }));
  });
});
//# sourceMappingURL=Filter.spec.js.map