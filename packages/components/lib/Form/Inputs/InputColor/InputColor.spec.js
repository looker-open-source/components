import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Button } from '../../../Button';
import { InputColor } from './InputColor';
describe('InputColor', () => {
  test('starts with a named color value', () => {
    renderWithTheme(React.createElement(InputColor, {
      value: "green"
    }));
    expect(screen.getByDisplayValue('green')).toBeInTheDocument();
  });
  test('responds to input value change', () => {
    renderWithTheme(React.createElement(InputColor, {
      value: "green"
    }));
    const input = screen.getByDisplayValue('green');
    input.focus();
    fireEvent.change(input, {
      target: {
        value: 'blue'
      }
    });
    expect(screen.getByDisplayValue('blue')).toBeInTheDocument();
    fireEvent.click(document);
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
      }, "Turn yellow"), React.createElement(InputColor, {
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
  test('opens on swatch click', () => {
    renderWithTheme(React.createElement(InputColor, {
      value: "green"
    }));
    fireEvent.click(screen.getByTestId('swatch'));
    expect(screen.getByTestId('color-picker')).toBeInTheDocument();
    fireEvent.click(document);
  });
  test('can receive focus and blur handlers', () => {
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    renderWithTheme(React.createElement(InputColor, {
      onBlur: onBlur,
      onFocus: onFocus,
      value: "green"
    }));
    const input = screen.getByDisplayValue('green');
    input.focus();
    expect(input).toHaveFocus();
    expect(onFocus).toHaveBeenCalled();
    input.blur();
    expect(input).not.toHaveFocus();
    expect(onBlur).toHaveBeenCalled();
  });
  test('changes color on <ColorPicker/> click', () => {
    renderWithTheme(React.createElement(InputColor, {
      placeholder: "Select a color"
    }));
    const input = screen.getByPlaceholderText('Select a color');
    fireEvent.click(screen.getByTestId('swatch'));
    const lightSaturationPreview = screen.getByTestId('light-saturation-preview');
    fireEvent.mouseDown(lightSaturationPreview, {
      clientX: 0,
      clientY: 0
    });
    expect(input.value).toBe('#ffffff');
    fireEvent.click(document);
    fireEvent.click(document);
  });
  test.skip('changes color on <ColorPicker/> mouse drag', () => {
    renderWithTheme(React.createElement(InputColor, {
      placeholder: "Select a color"
    }));
    const input = screen.getByPlaceholderText('Select a color');
    fireEvent.click(screen.getByTestId('swatch'));
    const lightSaturationPreview = screen.getByTestId('light-saturation-preview');
    fireEvent.mouseDown(lightSaturationPreview);
    fireEvent.mouseMove(lightSaturationPreview, {
      clientX: 200,
      clientY: 0
    });
    expect(input.value).toBe('#ff0000');
    fireEvent.mouseUp(lightSaturationPreview);
    fireEvent.click(document);
    fireEvent.click(document);
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(InputColor, {
      disabled: true,
      value: "green"
    }));
    expect(screen.getByRole('textbox')).toBeDisabled();
    fireEvent.click(screen.getByTestId('swatch'));
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument();
  });
  test('readOnly', () => {
    renderWithTheme(React.createElement(InputColor, {
      readOnly: true,
      value: "green"
    }));
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    fireEvent.click(screen.getByTestId('swatch'));
    expect(screen.queryByTestId('color-picker')).not.toBeInTheDocument();
  });
  test('clear value', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputColor, {
      value: "green",
      onChange: onChangeMock
    }));
    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: ''
      }
    });
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "currentTarget": Object {
              "name": undefined,
              "value": "",
            },
            "target": Object {
              "name": undefined,
              "value": "",
            },
          },
        ],
      ]
    `);
    fireEvent.click(document);
  });
  test('clear value with button', () => {
    const onChangeMock = jest.fn();
    renderWithTheme(React.createElement(InputColor, {
      value: "green",
      onChange: onChangeMock
    }));
    fireEvent.click(screen.getByRole('button'));
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "currentTarget": Object {
              "name": undefined,
              "value": "",
            },
            "target": Object {
              "name": undefined,
              "value": "",
            },
          },
        ],
      ]
    `);
  });
});
//# sourceMappingURL=InputColor.spec.js.map