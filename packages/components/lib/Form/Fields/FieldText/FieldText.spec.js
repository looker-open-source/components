import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldText } from './FieldText';
describe('FieldText', () => {
  test('default label', () => {
    renderWithTheme(React.createElement(FieldText, {
      id: "FieldTextID",
      label: "\uD83D\uDC4D"
    }));
    expect(screen.getByLabelText('👍')).toBeInTheDocument();
  });
  test('label inline', () => {
    renderWithTheme(React.createElement(FieldText, {
      id: "FieldTextID",
      inline: true,
      label: "\uD83D\uDC4D"
    }));
    expect(screen.getByLabelText('👍')).toBeInTheDocument();
  });
  test('A FieldText required', () => {
    renderWithTheme(React.createElement(FieldText, {
      id: "FieldTextID",
      label: "\uD83D\uDC4D",
      required: true
    }));
    expect(screen.getByLabelText('👍 required')).toBeRequired();
  });
  test('A FieldText disabled', () => {
    renderWithTheme(React.createElement(FieldText, {
      disabled: true,
      id: "FieldTextID",
      label: "\uD83D\uDC4D"
    }));
    expect(screen.getByLabelText('👍')).toBeDisabled();
  });
  test('description', () => {
    renderWithTheme(React.createElement(FieldText, {
      description: "no vegetables allowed",
      id: "FieldTextID",
      label: "Text Input",
      placeholder: "placeholder"
    }));
    expect(screen.getByText('no vegetables allowed')).toBeInTheDocument();
  });
  test('detail', () => {
    renderWithTheme(React.createElement(FieldText, {
      detail: "5/50",
      id: "FieldTextID",
      label: "hello",
      placeholder: "placeholder"
    }));
    expect(screen.getByText('5/50')).toBeInTheDocument();
  });
  test('description has proper aria setup', () => {
    var _descriptionDom$paren;

    const description = 'This is a description';
    renderWithTheme(React.createElement(FieldText, {
      id: "test",
      defaultValue: "example",
      description: description
    }));
    const input = screen.getByDisplayValue('example');
    const id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();
    const descriptionDom = screen.getByText(description);
    expect(descriptionDom.parentElement).toBeInTheDocument();
    expect((_descriptionDom$paren = descriptionDom.parentElement) === null || _descriptionDom$paren === void 0 ? void 0 : _descriptionDom$paren.id).toEqual(id);
  });
  test('error has proper aria setup', () => {
    var _errorMessageDom$pare;

    const errorMessage = 'This is an error';
    renderWithTheme(React.createElement(FieldText, {
      id: "test",
      defaultValue: "example",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    const input = screen.getByDisplayValue('example');
    const id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();
    const errorMessageDom = screen.getByText(errorMessage);
    expect(errorMessageDom.parentElement).toBeInTheDocument();
    expect((_errorMessageDom$pare = errorMessageDom.parentElement) === null || _errorMessageDom$pare === void 0 ? void 0 : _errorMessageDom$pare.id).toEqual(id);
  });
  test('onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(FieldText, {
      id: "FieldTextID",
      onChange: onChange
    }));
    userEvent.type(screen.getByRole('textbox'), 'Hello world');
    expect(onChange).toHaveBeenCalledTimes(11);
  });
});
//# sourceMappingURL=FieldText.spec.js.map