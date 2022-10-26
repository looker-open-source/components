"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldDate = require("./FieldDate");

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
test('FieldDate renders and displays label', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDate.FieldDate, {
    defaultValue: new Date(Date.now()),
    id: "FieldDateID",
    label: "Test Label"
  }));
  expect(_react2.screen.getByLabelText('Test Label')).toBeInTheDocument();
});
test('FieldDate should accept detail and description attributes', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDate.FieldDate, {
    defaultValue: new Date(Date.now()),
    description: "this is the description",
    detail: "5/50",
    id: "FieldDateID",
    label: "Label"
  }));
  expect(_react2.screen.getByText('5/50')).toBeInTheDocument();
  expect(_react2.screen.getByLabelText('Label')).toHaveDescription('this is the description');
});
test('FieldDate should accept a disabled prop', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDate.FieldDate, {
    defaultValue: new Date(Date.now()),
    disabled: true,
    id: "FieldDateID",
    label: "Disabled Label"
  }));

  var input = _react2.screen.getByLabelText('Disabled Label');

  expect(input).toBeDisabled();
});
test('FieldDate should accept required attributes', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDate.FieldDate, {
    defaultValue: new Date(Date.now()),
    id: "FieldDateID",
    label: "Required Label",
    required: true
  }));
  expect(_react2.screen.getByText('required')).toBeVisible();
});
test('FieldDate should display error message', function () {
  var errorMessage = 'This is an error';
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldDate.FieldDate, {
    defaultValue: new Date(Date.now()),
    id: "FieldDateID",
    label: "Validation Label",
    validationMessage: {
      message: errorMessage,
      type: 'error'
    }
  }));
  expect(_react2.screen.getByText('This is an error')).toBeVisible();
});
//# sourceMappingURL=FeildDate.spec.js.map