"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _componentsTestUtils = require("@looker/components-test-utils");

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _LocationExact = require("./LocationExact");

describe('LocationExact filter tests', function () {
  var item = {
    id: '1',
    type: 'anywhere',
    is: true,
    lat: 1,
    lon: 2
  };
  it('should render a LocationExact', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationExact.LocationExact, {
      item: item,
      onChange: jest.fn()
    }));
    expect(_react.screen.getByText('LATITUDE')).toBeVisible();
    expect(_react.screen.getByText('LONGITUDE')).toBeVisible();
    expect(_react.screen.getByDisplayValue('1')).toBeVisible();
    expect(_react.screen.getByDisplayValue('2')).toBeVisible();
  });
  it('should call onChange with the correct lat when lat is changed', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationExact.LocationExact, {
      item: item,
      onChange: onChange
    }));

    _react.fireEvent.change(_react.screen.getByDisplayValue('1'), {
      target: {
        value: '3'
      }
    });

    expect(onChange).toHaveBeenCalledWith('1', {
      lat: '3'
    });
  });
  it('should call onChange with the correct lon when lon is changed', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react2["default"].createElement(_LocationExact.LocationExact, {
      item: item,
      onChange: onChange
    }));

    _react.fireEvent.change(_react.screen.getByDisplayValue('2'), {
      target: {
        value: '4'
      }
    });

    expect(onChange).toHaveBeenCalledWith('1', {
      lon: '4'
    });
  });
});
//# sourceMappingURL=LocationExact.spec.js.map