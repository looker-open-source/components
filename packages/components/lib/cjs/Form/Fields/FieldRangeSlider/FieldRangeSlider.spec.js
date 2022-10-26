"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldRangeSlider = require("./FieldRangeSlider");

describe('FieldRangeSlider', function () {
  test('should accept detail and description attributes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRangeSlider.FieldRangeSlider, {
      detail: "5/50",
      description: "this is the description",
      label: "\uD83D\uDC4D",
      id: "thumbs-up"
    }));
    expect(_react2.screen.getByText('5/50')).toBeInTheDocument();
    expect(_react2.screen.getByLabelText('👍')).toHaveDescription('this is the description');
  });
  test('should accept a disabled prop', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRangeSlider.FieldRangeSlider, {
      disabled: true,
      id: "test",
      label: "Test Label"
    }));
    expect(_react2.screen.getAllByRole('slider')[0]).toHaveAttribute('aria-disabled', 'true');
  });
  test('should accept required attributes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldRangeSlider.FieldRangeSlider, {
      label: "\uD83D\uDC4D",
      id: "thumbs-up",
      required: true
    }));
    expect(_react2.screen.getByText('required')).toBeVisible();
  });
});
//# sourceMappingURL=FieldRangeSlider.spec.js.map