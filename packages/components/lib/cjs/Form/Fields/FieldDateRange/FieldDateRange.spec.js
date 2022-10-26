"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldDateRange = require("./FieldDateRange");

var realDateNow = Date.now.bind(global.Date);
beforeEach(function () {
  global.Date.now = jest.fn(function () {
    return 1580567580000;
  });
});
afterEach(function () {
  global.Date.now = realDateNow;
  jest.clearAllMocks();
});
var mockProps = {
  id: 'FieldDateRangeID',
  onChange: jest.fn(),
  onValidationFail: jest.fn(),
  value: {
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  }
};
describe('FieldDateRange ', function () {
  test('renders and displays label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDateRange.FieldDateRange, (0, _extends2["default"])({}, mockProps, {
      label: "Test Label"
    })));
    expect(_react2.screen.getAllByLabelText('Test Label').length).toEqual(2);
  });
  test('should accept a disabled prop', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDateRange.FieldDateRange, (0, _extends2["default"])({}, mockProps, {
      disabled: true,
      label: "Disabled Label"
    })));

    var input = _react2.screen.getAllByRole('textbox');

    expect(input[0]).toBeDisabled();
    expect(input[1]).toBeDisabled();
  });
  test('should accept required attributes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDateRange.FieldDateRange, (0, _extends2["default"])({}, mockProps, {
      label: "Required Label",
      required: true
    })));
    expect(_react2.screen.getByText('required')).toBeVisible();
  });
  test('should display error message', function () {
    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDateRange.FieldDateRange, (0, _extends2["default"])({}, mockProps, {
      label: "Validation Label",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    })));
    expect(_react2.screen.getByText('This is an error')).toBeVisible();
  });
});
//# sourceMappingURL=FieldDateRange.spec.js.map