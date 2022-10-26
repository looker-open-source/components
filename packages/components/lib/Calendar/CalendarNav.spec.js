import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { Basic } from './stories/index.stories';
describe('CalendarNav', () => {
  test('expected month displayed', () => {
    renderWithTheme(React.createElement(Basic, null));
    const month = screen.getAllByText('Jul 2021');
    expect(month[0]).toBeInTheDocument();
    expect(month.length).toBe(2);
  });
  test('button next and previous exist', () => {
    renderWithTheme(React.createElement(Basic, null));
    const next = screen.getByText('next month');
    const previous = screen.getByText('previous month');
    expect(next).toBeInTheDocument();
    expect(previous).toBeInTheDocument();
  });
  test('button next changes displayed month', () => {
    renderWithTheme(React.createElement(Basic, null));
    const next = screen.getByText('next month');
    fireEvent.click(next);
    const nextMonth = screen.getAllByText('Aug 2021');
    expect(nextMonth[0]).toBeInTheDocument();
  });
  test('button previous changes displayed month', () => {
    renderWithTheme(React.createElement(Basic, null));
    const previous = screen.getByText('previous month');
    fireEvent.click(previous);
    const previousMonth = screen.getAllByText('Jun 2021');
    expect(previousMonth[0]).toBeInTheDocument();
  });
});
//# sourceMappingURL=CalendarNav.spec.js.map