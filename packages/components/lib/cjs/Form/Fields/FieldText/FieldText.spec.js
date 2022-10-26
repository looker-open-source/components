"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _FieldText = require("./FieldText");

describe('FieldText', function () {
  test('default label', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      id: "FieldTextID",
      label: "\uD83D\uDC4D"
    }));
    expect(_react2.screen.getByLabelText('👍')).toBeInTheDocument();
  });
  test('label inline', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      id: "FieldTextID",
      inline: true,
      label: "\uD83D\uDC4D"
    }));
    expect(_react2.screen.getByLabelText('👍')).toBeInTheDocument();
  });
  test('A FieldText required', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      id: "FieldTextID",
      label: "\uD83D\uDC4D",
      required: true
    }));
    expect(_react2.screen.getByLabelText('👍 required')).toBeRequired();
  });
  test('A FieldText disabled', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      disabled: true,
      id: "FieldTextID",
      label: "\uD83D\uDC4D"
    }));
    expect(_react2.screen.getByLabelText('👍')).toBeDisabled();
  });
  test('description', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      description: "no vegetables allowed",
      id: "FieldTextID",
      label: "Text Input",
      placeholder: "placeholder"
    }));
    expect(_react2.screen.getByText('no vegetables allowed')).toBeInTheDocument();
  });
  test('detail', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      detail: "5/50",
      id: "FieldTextID",
      label: "hello",
      placeholder: "placeholder"
    }));
    expect(_react2.screen.getByText('5/50')).toBeInTheDocument();
  });
  test('description has proper aria setup', function () {
    var _descriptionDom$paren;

    var description = 'This is a description';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      id: "test",
      defaultValue: "example",
      description: description
    }));

    var input = _react2.screen.getByDisplayValue('example');

    var id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();

    var descriptionDom = _react2.screen.getByText(description);

    expect(descriptionDom.parentElement).toBeInTheDocument();
    expect((_descriptionDom$paren = descriptionDom.parentElement) === null || _descriptionDom$paren === void 0 ? void 0 : _descriptionDom$paren.id).toEqual(id);
  });
  test('error has proper aria setup', function () {
    var _errorMessageDom$pare;

    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      id: "test",
      defaultValue: "example",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));

    var input = _react2.screen.getByDisplayValue('example');

    var id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();

    var errorMessageDom = _react2.screen.getByText(errorMessage);

    expect(errorMessageDom.parentElement).toBeInTheDocument();
    expect((_errorMessageDom$pare = errorMessageDom.parentElement) === null || _errorMessageDom$pare === void 0 ? void 0 : _errorMessageDom$pare.id).toEqual(id);
  });
  test('onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldText.FieldText, {
      id: "FieldTextID",
      onChange: onChange
    }));

    _userEvent["default"].type(_react2.screen.getByRole('textbox'), 'Hello world');

    expect(onChange).toHaveBeenCalledTimes(11);
  });
});
//# sourceMappingURL=FieldText.spec.js.map