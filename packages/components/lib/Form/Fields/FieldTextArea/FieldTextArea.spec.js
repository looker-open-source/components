import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldTextArea } from './FieldTextArea';
describe('FieldTextArea', () => {
  test('default label', () => {
    renderWithTheme(React.createElement(FieldTextArea, {
      id: "FieldTextAreaID",
      label: "\uD83D\uDC4D"
    }));
    expect(screen.getByLabelText('👍')).toBeInTheDocument();
  });
  test('label inline', () => {
    renderWithTheme(React.createElement(FieldTextArea, {
      id: "FieldTextAreaID",
      inline: true,
      label: "\uD83D\uDC4D"
    }));
    expect(screen.getByLabelText('👍')).toBeInTheDocument();
  });
  test('required', () => {
    renderWithTheme(React.createElement(FieldTextArea, {
      id: "FieldTextAreaID",
      label: "\uD83D\uDC4D",
      required: true
    }));
    expect(screen.getByLabelText('👍 required')).toBeRequired();
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(FieldTextArea, {
      disabled: true,
      id: "FieldTextAreaID",
      label: "\uD83D\uDC4D"
    }));
    expect(screen.getByLabelText('👍')).toBeDisabled();
  });
  test('description has proper aria setup', () => {
    var _descriptionDom$paren;

    const description = 'This is a description';
    renderWithTheme(React.createElement(FieldTextArea, {
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
    renderWithTheme(React.createElement(FieldTextArea, {
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
  test('detail', () => {
    renderWithTheme(React.createElement(FieldTextArea, {
      detail: "5/50",
      id: "FieldTextAreaID",
      label: "hello",
      placeholder: "placeholder"
    }));
    expect(screen.getByText('5/50')).toBeInTheDocument();
  });
  test('validationMessage', () => {
    renderWithTheme(React.createElement(FieldTextArea, {
      id: "FieldTextAreaID",
      label: "hello",
      validationMessage: {
        message: 'validation Message',
        type: 'error'
      },
      placeholder: "placeholder"
    }));
    expect(screen.getByText('validation Message')).toBeInTheDocument();
  });
  test('onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(FieldTextArea, {
      id: "FieldTextID",
      onChange: onChange
    }));
    userEvent.type(screen.getByRole('textbox'), 'Hello world');
    expect(onChange).toHaveBeenCalledTimes(11);
  });
});
//# sourceMappingURL=FieldTextArea.spec.js.map