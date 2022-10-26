import en from 'date-fns/locale/en-US';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { YearList } from './YearList';
describe('YearList', () => {
  const date = new Date('January 12, 2022');
  const defaultProps = {
    baseMonth: date,
    currentDate: date,
    locale: en,
    onMonthChange: jest.fn(),
    onMonthClick: jest.fn(),
    selectedMonth: date,
    setBaseMonth: jest.fn()
  };
  test('renders 10 years before & after', () => {
    renderWithTheme(React.createElement(YearList, defaultProps));
    const first = screen.getByText('2012');
    const last = screen.getByText('2032');
    expect(first).toBeVisible();
    expect(last).toBeVisible();
    expect(screen.getAllByRole('button')).toHaveLength(36);
  });
});
//# sourceMappingURL=YearList.spec.js.map