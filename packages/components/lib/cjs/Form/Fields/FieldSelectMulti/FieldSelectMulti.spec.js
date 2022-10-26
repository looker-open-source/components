"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _FieldSelectMulti = require("./FieldSelectMulti");

var fieldSelectMultiOptions = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}];
describe('FieldSelectMulti', function () {
  test('should accept detail and description attributes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
      detail: "5/50",
      description: "this is the description",
      label: "\uD83D\uDC4D",
      name: "thumbsUp",
      id: "thumbs-up",
      options: fieldSelectMultiOptions
    }));
    expect(_react2.screen.getByText('5/50')).toBeInTheDocument();
    expect(_react2.screen.getByLabelText('👍')).toHaveDescription('this is the description');
  });
  test('should accept a disabled prop', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
      disabled: true,
      id: "test",
      label: "Test Label",
      name: "test",
      options: fieldSelectMultiOptions
    }));

    var input = _react2.screen.getByLabelText('Test Label');

    expect(input).toBeDisabled();
  });
  test('should accept required attributes', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
      label: "\uD83D\uDC4D",
      name: "thumbsUp",
      id: "thumbs-up",
      options: fieldSelectMultiOptions,
      required: true
    }));
    expect(_react2.screen.getByText('required')).toBeVisible();
  });
  test('should display error message', function () {
    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
      id: "testFieldSelectMulti",
      label: "Label",
      name: "test",
      options: fieldSelectMultiOptions,
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    expect(_react2.screen.getByText('This is an error')).toBeVisible();
  });
  test('Should trigger onChange handler', function () {
    var handleChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
      label: "\uD83D\uDC4D",
      name: "thumbsUp",
      id: "thumbs-up",
      onChange: handleChange,
      options: fieldSelectMultiOptions
    }));

    var input = _react2.screen.getByLabelText('👍');

    _react2.fireEvent.click(input);

    var apples = _react2.screen.getByText('Apples');

    _react2.fireEvent.click(apples);

    expect(handleChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(document);
  });
});
//# sourceMappingURL=FieldSelectMulti.spec.js.map