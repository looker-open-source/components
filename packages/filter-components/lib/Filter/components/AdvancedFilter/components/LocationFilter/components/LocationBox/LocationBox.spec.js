import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { LocationBox } from './LocationBox';
describe('LocationBox filter test', () => {
  it('should render a LocationBox', () => {
    const item = {
      id: '1',
      type: 'anywhere',
      is: true,
      lat: 1,
      lon: 1,
      lat1: 5,
      lon1: 5
    };
    renderWithTheme(React.createElement(LocationBox, {
      item: item,
      onChange: jest.fn()
    }));
    expect(screen.getByText('FROM LATITUDE')).toBeVisible();
    expect(screen.getByText('TO LATITUDE')).toBeVisible();
    expect(screen.getAllByText('LONGITUDE')).toHaveLength(2);
    expect(screen.getAllByDisplayValue('1')).toHaveLength(2);
    expect(screen.getAllByDisplayValue('5')).toHaveLength(2);
  });
});
//# sourceMappingURL=LocationBox.spec.js.map