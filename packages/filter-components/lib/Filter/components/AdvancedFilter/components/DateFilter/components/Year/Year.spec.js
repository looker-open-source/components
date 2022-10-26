import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Year } from './Year';
describe('Year', () => {
  const onChangeMock = jest.fn();
  const mockProps = {
    item: {
      id: '1',
      year: '2018'
    },
    onChange: onChangeMock
  };
  it('should render the given year', () => {
    renderWithTheme(React.createElement(Year, mockProps));
    expect(screen.getByDisplayValue('2018')).toBeVisible();
  });
  it('should invoke the onChange handler when the input changes', () => {
    renderWithTheme(React.createElement(Year, mockProps));
    const input = screen.getByDisplayValue('2018');
    fireEvent.change(input, {
      target: {
        value: '2019'
      }
    });
    expect(onChangeMock).toHaveBeenCalledWith('1', {
      year: '2019'
    });
  });
});
//# sourceMappingURL=Year.spec.js.map