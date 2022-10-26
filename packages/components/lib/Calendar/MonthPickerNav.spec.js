import en from 'date-fns/locale/en-US';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MonthPickerNav } from './MonthPickerNav';
describe('MonthPickerNav', () => {
  const date = new Date('January 12, 2022');
  test('updates the month via click', () => {
    const onMonthChangeMock = jest.fn();
    const onCloseMock = jest.fn();
    renderWithTheme(React.createElement(MonthPickerNav, {
      date: date,
      locale: en,
      onMonthChange: onMonthChangeMock,
      onClose: onCloseMock
    }));
    userEvent.click(screen.getAllByText('Feb')[1]);
    expect(onMonthChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          2022-02-12T08:00:00.000Z,
        ],
      ]
    `);
  });
  test('updates the year via input', () => {
    const onMonthChangeMock = jest.fn();
    const onCloseMock = jest.fn();
    renderWithTheme(React.createElement(MonthPickerNav, {
      date: date,
      locale: en,
      onMonthChange: onMonthChangeMock,
      onClose: onCloseMock
    }));
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('2022');
    fireEvent.change(input, {
      target: {
        value: '2021'
      }
    });
    fireEvent.blur(input);
    userEvent.click(screen.getAllByText('Feb')[1]);
    expect(onMonthChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          2021-02-12T08:00:00.000Z,
        ],
      ]
    `);
  });
  test('updates the year via prev/next', () => {
    const onMonthChangeMock = jest.fn();
    const onCloseMock = jest.fn();
    renderWithTheme(React.createElement(MonthPickerNav, {
      date: date,
      locale: en,
      onMonthChange: onMonthChangeMock,
      onClose: onCloseMock
    }));
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('2022');
    fireEvent.click(screen.getByRole('button', {
      name: 'previous year'
    }));
    expect(input).toHaveValue('2021');
    fireEvent.click(screen.getByRole('button', {
      name: 'next year'
    }));
    expect(input).toHaveValue('2022');
  });
});
//# sourceMappingURL=MonthPickerNav.spec.js.map