import { renderWithTheme } from '@looker/components-test-utils';
import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { LocationCircle } from './LocationCircle';
describe('LocationCircle filter tests', () => {
  const item = {
    id: '1',
    type: 'anywhere',
    is: true,
    lat: 1,
    lon: 1,
    distance: 5,
    unit: 'feet'
  };
  it('should render a LocationCircle', () => {
    renderWithTheme(React.createElement(LocationCircle, {
      item: item,
      onChange: jest.fn()
    }));
    expect(screen.getByRole('textbox')).toHaveValue('feet');
    expect(screen.getByDisplayValue('5')).toBeVisible();
  });
  it('should call onChange with the correct distance when distance is changed', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(LocationCircle, {
      item: item,
      onChange: onChange
    }));
    fireEvent.change(screen.getByDisplayValue('5'), {
      target: {
        value: '6'
      }
    });
    expect(onChange).toHaveBeenCalledWith('1', {
      distance: '6',
      unit: 'feet'
    });
  });
  it('should call onChange with the correct unit when unit is changed', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(LocationCircle, {
      item: item,
      onChange: onChange
    }));
    const selectInput = screen.getByDisplayValue('feet');
    fireEvent.click(selectInput);
    const kilometers = screen.getByText('kilometers');
    fireEvent.click(kilometers);
    expect(onChange).toHaveBeenCalledWith('1', {
      unit: 'kilometers'
    });
  });
});
//# sourceMappingURL=LocationCircle.spec.js.map