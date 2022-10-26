"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldSlider = require("./FieldSlider");

test('FieldSlider should accept detail and description attributes', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSlider.FieldSlider, {
    detail: "5/50",
    description: "this is the description",
    label: "Label",
    name: "FieldSlider",
    id: "field-slider"
  }));
  expect(_react2.screen.getByText('5/50')).toBeInTheDocument();
  expect(_react2.screen.getByLabelText('Label')).toHaveDescription('this is the description');
});
test('FieldSlider should accept a disabled prop', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSlider.FieldSlider, {
    disabled: true,
    id: "test",
    label: "Test Label",
    name: "test"
  }));

  var input = _react2.screen.getByLabelText('Test Label');

  expect(input).toBeDisabled();
});
test('FieldSlider should accept required attributes', function () {
  (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSlider.FieldSlider, {
    label: "Label",
    name: "fieldSlider",
    id: "field-slider",
    required: true
  }));
  expect(_react2.screen.getByText('required')).toBeVisible();
});
//# sourceMappingURL=FieldSlider.spec.js.map