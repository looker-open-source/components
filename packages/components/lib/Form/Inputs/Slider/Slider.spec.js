import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Slider } from './Slider';
describe('Slider', () => {
  test('Enforces that input value can never go above `max` prop value', () => {
    const props = {
      max: 1,
      value: 2
    };
    renderWithTheme(React.createElement(Slider, props));
    const input = screen.getByTestId('slider-input');
    expect(parseInt(input.value)).toEqual(props.max);
  });
  test('Enforces that input value can never go below `min` prop value', () => {
    const props = {
      min: 5,
      value: 1
    };
    renderWithTheme(React.createElement(Slider, props));
    const input = screen.getByTestId('slider-input');
    expect(parseInt(input.value)).toEqual(props.min);
  });
  test('Slider value can be a numeric string', () => {
    const value = '2';
    const props = {
      min: 1,
      value
    };
    renderWithTheme(React.createElement(Slider, props));
    const input = screen.getByTestId('slider-input');
    expect(input.value).toEqual(value);
  });
  test('Slider calls console.error if value is a non-numeric string', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    const value = 'I am not numeric';
    const props = {
      min: 1,
      value
    };
    renderWithTheme(React.createElement(Slider, props));
    const input = screen.getByTestId('slider-input');
    expect(parseInt(input.value)).toEqual(props.min);
    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
  test('Slider with name and id', () => {
    const props = {
      id: 'Slip',
      name: 'Slide'
    };
    renderWithTheme(React.createElement(Slider, props));
    const input = screen.getByTestId('slider-input');
    expect(input).toHaveAttribute('id', props.id);
    expect(input).toHaveAttribute('name', props.name);
  });
  test('Slider input can be disabled', () => {
    renderWithTheme(React.createElement(Slider, {
      disabled: true
    }));
    const input = screen.getByTestId('slider-input');
    expect(input).toBeDisabled();
  });
  test('Accessibility: Slider with aria-labelledby and <label>', () => {
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement("label", {
      id: "some-id"
    }, "Slider Label"), React.createElement(Slider, {
      "aria-labelledby": "some-id"
    })));
    expect(screen.getByLabelText('Slider Label')).toEqual(screen.getByTestId('slider-input'));
  });
  test('Slider passes change event to optional onChange handler', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(Slider, {
      min: 0,
      max: 10,
      onChange: handleChange
    }));
    expect(handleChange).toHaveBeenCalledTimes(0);
    fireEvent.change(screen.getByTestId('slider-input'), {
      target: {
        value: 10
      }
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  test('renders focus styles on keypress', () => {
    renderWithTheme(React.createElement(Slider, null));
    fireEvent.keyUp(screen.getByTestId('container'), {
      key: 'Tab',
      keyCode: 9
    });
    expect(screen.getByTestId('slider-input')).toHaveStyleRule('border-width: 5px;');
  });
});
//# sourceMappingURL=Slider.spec.js.map