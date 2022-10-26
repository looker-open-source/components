"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _componentsTestUtils = require("@looker/components-test-utils");

var _FieldTime = require("./FieldTime");

test('FieldTime renders and displays label', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTime.FieldTime, {
    defaultValue: "14:34",
    id: "FieldTimeID",
    label: "Test Label"
  }));
  expect(_react2.screen.getByText('Test Label')).toBeInTheDocument();
});
test('FieldTime should accept detail and description attributes', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTime.FieldTime, {
    defaultValue: "14:34",
    description: "this is the description",
    detail: "5/50",
    id: "FieldTimeID",
    label: "Label"
  }));
  expect(_react2.screen.getByText('5/50')).toBeInTheDocument();
  expect(_react2.screen.getAllByLabelText('Label')[0]).toHaveDescription('this is the description');
});
test('FieldTime should accept a disabled prop', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTime.FieldTime, {
    defaultValue: "14:34",
    disabled: true,
    id: "FieldTimeID",
    label: "Disabled Label"
  }));
  expect(_react2.screen.getAllByLabelText('Disabled Label')[0]).toHaveAttribute('aria-disabled', 'true');
});
test('FieldTime should accept required attributes', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTime.FieldTime, {
    defaultValue: "14:34",
    id: "FieldTimeID",
    label: "Required Label",
    required: true
  }));
  expect(_react2.screen.getByText('required')).toBeVisible();
});
test('FieldTime should display error message', function () {
  var errorMessage = 'This is an error';
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldTime.FieldTime, {
    defaultValue: "14:34",
    id: "FieldTimeID",
    label: "Validation Label",
    validationMessage: {
      message: errorMessage,
      type: 'error'
    }
  }));
  expect(_react2.screen.getByText(errorMessage)).toBeVisible();
});
//# sourceMappingURL=FieldTime.spec.js.map