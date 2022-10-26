import { renderWithTheme } from '@looker/components-test-utils';
import { screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { LocationExact } from './LocationExact';
describe('LocationExact filter tests', () => {
  const item = {
    id: '1',
    type: 'anywhere',
    is: true,
    lat: 1,
    lon: 2
  };
  it('should render a LocationExact', () => {
    renderWithTheme(React.createElement(LocationExact, {
      item: item,
      onChange: jest.fn()
    }));
    expect(screen.getByText('LATITUDE')).toBeVisible();
    expect(screen.getByText('LONGITUDE')).toBeVisible();
    expect(screen.getByDisplayValue('1')).toBeVisible();
    expect(screen.getByDisplayValue('2')).toBeVisible();
  });
  it('should call onChange with the correct lat when lat is changed', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(LocationExact, {
      item: item,
      onChange: onChange
    }));
    fireEvent.change(screen.getByDisplayValue('1'), {
      target: {
        value: '3'
      }
    });
    expect(onChange).toHaveBeenCalledWith('1', {
      lat: '3'
    });
  });
  it('should call onChange with the correct lon when lon is changed', () => {
    const onChange = jest.fn();
    renderWithTheme(React.createElement(LocationExact, {
      item: item,
      onChange: onChange
    }));
    fireEvent.change(screen.getByDisplayValue('2'), {
      target: {
        value: '4'
      }
    });
    expect(onChange).toHaveBeenCalledWith('1', {
      lon: '4'
    });
  });
});
//# sourceMappingURL=LocationExact.spec.js.map