import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { theme } from '@looker/design-tokens';
import { fireEvent, screen } from '@testing-library/react';
import { FieldSelect } from './FieldSelect';
import { LabelFocusColorTest } from './FieldSelect.stories';
describe('FieldSelect', () => {
  test('autoResize', () => {
    renderWithTheme(React.createElement(FieldSelect, {
      label: "Auto resize",
      autoResize: true
    }));
    const label = screen.getByLabelText('Auto resize');
    expect(label).toHaveStyleRule('width: auto');
  });
  test('Accepts a value', () => {
    renderWithTheme(React.createElement(FieldSelect, {
      label: "\uD83D\uDC4D",
      value: "foobar",
      options: [{
        label: 'Foobar',
        value: 'foobar'
      }]
    }));
    expect(screen.getByRole('textbox')).toHaveValue('Foobar');
  });
  test('Should trigger onChange handler', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(FieldSelect, {
      label: "\uD83D\uDC4D",
      value: "foobar",
      onChange: onChange,
      options: [{
        label: 'Foobar',
        value: 'foobar'
      }]
    }));
    const input = screen.getByLabelText('👍');
    fireEvent.mouseDown(input);
    const foobar = screen.getByText('Foobar');
    fireEvent.click(foobar);
    expect(onChange).toHaveBeenCalledTimes(1);
    fireEvent.click(document);
  });
  test('With an validation message displayed', () => {
    renderWithTheme(React.createElement(FieldSelect, {
      label: "thumbs up",
      name: "thumbsUp",
      id: "thumbs-up",
      validationMessage: {
        message: 'This is an error',
        type: 'error'
      }
    }));
    expect(screen.getAllByLabelText('thumbs up')[0]).toBeVisible();
    expect(screen.getByText('This is an error')).toBeVisible();
  });
  test('With description has proper aria setup', () => {
    var _descriptionDom$paren;

    const description = 'This is a description';
    renderWithTheme(React.createElement(FieldSelect, {
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
  test('With error has proper aria setup', () => {
    var _errorMessageDom$pare;

    const errorMessage = 'This is an error';
    renderWithTheme(React.createElement(FieldSelect, {
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
  test('Floating label focus color', () => {
    renderWithTheme(React.createElement(LabelFocusColorTest, null));
    const input1 = screen.getByLabelText('Label Initial');
    const label1 = screen.getByText('Label Initial');
    expect(label1).not.toHaveStyle(`color: ${theme.colors.key}`);
    fireEvent.focus(input1);
    fireEvent.click(input1);
    expect(label1).toHaveStyle(`color: ${theme.colors.key}`);
    fireEvent.click(screen.getByText('Kiwis'));
    expect(label1).toHaveStyle(`color: ${theme.colors.key}`);
    const openDialog = screen.getByText('Open Dialog');
    fireEvent.blur(input1, {
      relatedTarget: openDialog
    });
    fireEvent.click(openDialog);
    expect(label1).not.toHaveStyle(`color: ${theme.colors.key}`);
    const input2 = screen.getByLabelText('Label Dialog');
    const label2 = screen.getByText('Label Dialog');
    fireEvent.focus(input2);
    fireEvent.click(input2);
    fireEvent.click(screen.getByText('Kiwis'));
    expect(label2).toHaveStyle(`color: ${theme.colors.key}`);
    const buttonDialog = screen.getByText('Button Dialog');
    fireEvent.blur(input2, {
      relatedTarget: buttonDialog
    });
    fireEvent.click(buttonDialog);
    expect(label2).not.toHaveStyle(`color: ${theme.colors.key}`);
  });
});
//# sourceMappingURL=FieldSelect.spec.js.map