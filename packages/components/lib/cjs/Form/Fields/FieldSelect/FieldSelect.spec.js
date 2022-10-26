"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _componentsTestUtils = require("@looker/components-test-utils");

var _designTokens = require("@looker/design-tokens");

var _react2 = require("@testing-library/react");

var _FieldSelect = require("./FieldSelect");

var _FieldSelect2 = require("./FieldSelect.stories");

describe('FieldSelect', function () {
  test('autoResize', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelect.FieldSelect, {
      label: "Auto resize",
      autoResize: true
    }));

    var label = _react2.screen.getByLabelText('Auto resize');

    expect(label).toHaveStyleRule('width: auto');
  });
  test('Accepts a value', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelect.FieldSelect, {
      label: "\uD83D\uDC4D",
      value: "foobar",
      options: [{
        label: 'Foobar',
        value: 'foobar'
      }]
    }));
    expect(_react2.screen.getByRole('textbox')).toHaveValue('Foobar');
  });
  test('Should trigger onChange handler', function () {
    var onChange = jest.fn();
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelect.FieldSelect, {
      label: "\uD83D\uDC4D",
      value: "foobar",
      onChange: onChange,
      options: [{
        label: 'Foobar',
        value: 'foobar'
      }]
    }));

    var input = _react2.screen.getByLabelText('👍');

    _react2.fireEvent.mouseDown(input);

    var foobar = _react2.screen.getByText('Foobar');

    _react2.fireEvent.click(foobar);

    expect(onChange).toHaveBeenCalledTimes(1);

    _react2.fireEvent.click(document);
  });
  test('With an validation message displayed', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelect.FieldSelect, {
      label: "thumbs up",
      name: "thumbsUp",
      id: "thumbs-up",
      validationMessage: {
        message: 'This is an error',
        type: 'error'
      }
    }));
    expect(_react2.screen.getAllByLabelText('thumbs up')[0]).toBeVisible();
    expect(_react2.screen.getByText('This is an error')).toBeVisible();
  });
  test('With description has proper aria setup', function () {
    var _descriptionDom$paren;

    var description = 'This is a description';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelect.FieldSelect, {
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
  test('With error has proper aria setup', function () {
    var _errorMessageDom$pare;

    var errorMessage = 'This is an error';
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelect.FieldSelect, {
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
  test('Floating label focus color', function () {
    (0, _componentsTestUtils.renderWithTheme)(_react["default"].createElement(_FieldSelect2.LabelFocusColorTest, null));

    var input1 = _react2.screen.getByLabelText('Label Initial');

    var label1 = _react2.screen.getByText('Label Initial');

    expect(label1).not.toHaveStyle("color: ".concat(_designTokens.theme.colors.key));

    _react2.fireEvent.focus(input1);

    _react2.fireEvent.click(input1);

    expect(label1).toHaveStyle("color: ".concat(_designTokens.theme.colors.key));

    _react2.fireEvent.click(_react2.screen.getByText('Kiwis'));

    expect(label1).toHaveStyle("color: ".concat(_designTokens.theme.colors.key));

    var openDialog = _react2.screen.getByText('Open Dialog');

    _react2.fireEvent.blur(input1, {
      relatedTarget: openDialog
    });

    _react2.fireEvent.click(openDialog);

    expect(label1).not.toHaveStyle("color: ".concat(_designTokens.theme.colors.key));

    var input2 = _react2.screen.getByLabelText('Label Dialog');

    var label2 = _react2.screen.getByText('Label Dialog');

    _react2.fireEvent.focus(input2);

    _react2.fireEvent.click(input2);

    _react2.fireEvent.click(_react2.screen.getByText('Kiwis'));

    expect(label2).toHaveStyle("color: ".concat(_designTokens.theme.colors.key));

    var buttonDialog = _react2.screen.getByText('Button Dialog');

    _react2.fireEvent.blur(input2, {
      relatedTarget: buttonDialog
    });

    _react2.fireEvent.click(buttonDialog);

    expect(label2).not.toHaveStyle("color: ".concat(_designTokens.theme.colors.key));
  });
});
//# sourceMappingURL=FieldSelect.spec.js.map