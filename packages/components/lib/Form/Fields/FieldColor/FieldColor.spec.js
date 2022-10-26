import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Button } from '../../../Button';
import { FieldColor } from './FieldColor';
describe('FieldColor', () => {
  const FieldColorValidationMessage = () => {
    return React.createElement(FieldColor, {
      validationMessage: {
        message: 'Error!',
        type: 'error'
      }
    });
  };

  test('with a validation message', () => {
    renderWithTheme(React.createElement(FieldColorValidationMessage, null));
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });
  test('A FieldColor with description has proper aria setup', () => {
    var _descriptionDom$paren;

    const description = 'This is a description';
    renderWithTheme(React.createElement(FieldColor, {
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
  test('A FieldColor with error has proper aria setup', () => {
    var _errorMessageDom$pare;

    const errorMessage = 'This is an error';
    renderWithTheme(React.createElement(FieldColor, {
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
  test('with an onChange', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(FieldColor, {
      onChange: onChangeMock,
      label: "Background Color"
    }));
    const input = screen.getByLabelText('Background Color');
    fireEvent.change(input, {
      target: {
        value: '#FFFF00'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith({
      currentTarget: {
        value: '#FFFF00'
      },
      target: {
        value: '#FFFF00'
      }
    });
    fireEvent.click(document);
  });
  test('with a defaultValue', () => {
    renderWithTheme(React.createElement(FieldColor, {
      defaultValue: "purple",
      label: "Background Color"
    }));
    const input = screen.getByLabelText('Background Color');
    expect(input).toHaveValue('purple');
  });
  test('with controlled state', () => {
    function Wrapper() {
      const [value, setValue] = useState('');

      function handleClick() {
        setValue('yellow');
      }

      function handleChange(e) {
        setValue(e.currentTarget.value);
      }

      return React.createElement(React.Fragment, null, React.createElement(Button, {
        onClick: handleClick
      }, "Turn yellow"), React.createElement(FieldColor, {
        value: value,
        onChange: handleChange,
        placeholder: "Select a color"
      }));
    }

    renderWithTheme(React.createElement(Wrapper, null));
    const button = screen.getByText('Turn yellow');
    const input = screen.getByPlaceholderText('Select a color');
    expect(input).toHaveValue('');
    fireEvent.click(button);
    expect(input).toHaveValue('yellow');
    fireEvent.change(input, {
      target: {
        value: 'purple'
      }
    });
    expect(input).toHaveValue('purple');
    fireEvent.click(document);
  });
});
//# sourceMappingURL=FieldColor.spec.js.map