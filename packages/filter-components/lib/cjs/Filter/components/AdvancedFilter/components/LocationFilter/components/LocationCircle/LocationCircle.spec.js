"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _LocationCircle = require("./LocationCircle");

describe('LocationCircle filter tests', function () {
  var item = {
    id: '1',
    type: 'anywhere',
    is: true,
    lat: 1,
    lon: 1,
    distance: 5,
    unit: 'feet'
  };
  it('should render a LocationCircle', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationCircle.LocationCircle, {
      item: item,
      onChange: jest.fn()
    }));
    expect(_react.screen.getByRole('textbox')).toHaveValue('feet');
    expect(_react.screen.getByDisplayValue('5')).toBeVisible();
  });
  it('should call onChange with the correct distance when distance is changed', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationCircle.LocationCircle, {
      item: item,
      onChange: onChange
    }));

    _react.fireEvent.change(_react.screen.getByDisplayValue('5'), {
      target: {
        value: '6'
      }
    });

    expect(onChange).toHaveBeenCalledWith('1', {
      distance: '6',
      unit: 'feet'
    });
  });
  it('should call onChange with the correct unit when unit is changed', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationCircle.LocationCircle, {
      item: item,
      onChange: onChange
    }));

    var selectInput = _react.screen.getByDisplayValue('feet');

    _react.fireEvent.click(selectInput);

    var kilometers = _react.screen.getByText('kilometers');

    _react.fireEvent.click(kilometers);

    expect(onChange).toHaveBeenCalledWith('1', {
      unit: 'kilometers'
    });
  });
});
//# sourceMappingURL=LocationCircle.spec.js.map