"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _ = require("../../..");

var _FieldCheckbox = require("./FieldCheckbox");

describe('FieldCheckbox', function () {
  test('required', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
      id: "FieldCheckboxID",
      label: "I agree",
      name: "thumbsUp",
      required: true
    }));
    expect(_react2.screen.getByTestId('requiredStar')).toBeVisible();
  });
  test('disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
      disabled: true,
      id: "FieldCheckboxID",
      label: "I agree",
      name: "thumbsUp"
    }));
    expect(_react2.screen.getByLabelText('I agree')).toBeDisabled();
  });
  test('Accessibility', function () {
    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
      description: "describe something here.",
      detail: "4/20",
      id: "test",
      label: "Example Field",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    expect(_react2.screen.getByRole('checkbox')).toHaveAttribute('aria-describedby', 'describedby-test');

    var description = _react2.screen.getByText('describe something here.');

    var ariaDescribed = description.parentElement;
    expect(ariaDescribed).toHaveAttribute('id', 'describedby-test');
    expect(ariaDescribed).toHaveTextContent(errorMessage);
  });
  test('label can be a ReactNode', function () {
    var paragraphSampleText = 'Sample paragraph text';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
      id: "FieldCheckboxID",
      label: _react["default"].createElement(_.Paragraph, null, paragraphSampleText),
      name: "thumbsUp"
    }));

    var paragraph = _react2.screen.getByText(paragraphSampleText);

    expect(paragraph).toHaveTextContent(paragraphSampleText);
  });
});
//# sourceMappingURL=FieldCheckbox.spec.js.map