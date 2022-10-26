import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { act, fireEvent, screen } from '@testing-library/react';
import { DialogContext } from '../Dialog';
import { Basic, Range } from './stories/index.stories';
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const runTimers = () => act(() => {
  jest.runOnlyPendingTimers();
});

const dialogContext = {
  closeModal: jest.fn(),
  id: '123'
};
afterEach(() => {
  dialogContext.closeModal.mockClear();
});
describe('Calendar', () => {
  test('ripple', () => {
    renderWithTheme(React.createElement(Basic, null));
    const calendar = screen.getAllByText('1')[0].closest('button');
    expect(calendar).not.toHaveClass('bg-on fg-in');
    expect(calendar).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0'
    });
    calendar && fireEvent.focus(calendar);
    expect(calendar).toHaveClass('bg-on');
    calendar && fireEvent.mouseDown(calendar);
    expect(calendar).toHaveClass('bg-on fg-in');
    calendar && fireEvent.mouseUp(calendar);
    runTimers();
    expect(calendar).toHaveClass('bg-on fg-out');
    runTimers();
    expect(calendar).toHaveClass('bg-on');
    calendar && fireEvent.blur(calendar);
    expect(calendar).not.toHaveClass('bg-on fg-in');
  });
  test('opens month picker', () => {
    renderWithTheme(React.createElement(Basic, null));
    const button = screen.getAllByText('Jul 2021')[0];
    fireEvent.click(button);
    expect(screen.getByText('2022')).toBeVisible();
  });
  test('closes popover after single date selection', () => {
    const onSelectDateMock = jest.fn();
    renderWithTheme(React.createElement(DialogContext.Provider, {
      value: dialogContext
    }, React.createElement(Basic, {
      onSelectDate: onSelectDateMock
    })));
    const seven = screen.getByRole('button', {
      name: 'Wed Jul 07, 2021'
    });
    fireEvent.click(seven);
    expect(onSelectDateMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          2021-07-07T07:00:00.000Z,
        ],
      ]
    `);
    expect(dialogContext.closeModal).toHaveBeenCalledTimes(1);
  });
  describe('Range selection', () => {
    test('shows draft selection on hover', () => {
      renderWithTheme(React.createElement(Range, null));
      const seven = screen.getByRole('button', {
        name: 'Mon Feb 07, 2022'
      });
      const five = screen.getByRole('button', {
        name: 'Sat Feb 05, 2022'
      });
      const fifteen = screen.getByRole('button', {
        name: 'Tue Feb 15, 2022'
      });
      fireEvent.mouseEnter(seven);
      expect(seven).toHaveClass('bg-on');
      fireEvent.click(seven);
      fireEvent.mouseEnter(five);
      expect(five).toHaveClass('bg-on');
      fireEvent.mouseEnter(fifteen);
      expect(fifteen).toHaveClass('bg-on');
    });
    test('select start and end', () => {
      const onSelectRangeMock = jest.fn();
      renderWithTheme(React.createElement(DialogContext.Provider, {
        value: dialogContext
      }, React.createElement(Range, {
        viewMonth: new Date('January 12, 2022'),
        onSelectRange: onSelectRangeMock
      })));
      const start = screen.getAllByText('8')[1];
      const end = screen.getAllByText('23')[1];
      fireEvent.click(start);
      fireEvent.click(end);
      expect(start).toHaveAttribute('aria-selected', 'true');
      expect(end).toHaveAttribute('aria-selected', 'true');
      expect(onSelectRangeMock.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            Object {
              "from": 2022-01-08T08:00:00.000Z,
            },
          ],
          Array [
            Object {
              "from": 2022-01-08T08:00:00.000Z,
              "to": 2022-01-23T08:00:00.000Z,
            },
          ],
        ]
      `);
      expect(dialogContext.closeModal).not.toHaveBeenCalled();
    });
    test('range spanning multiple months', () => {
      renderWithTheme(React.createElement(Range, {
        viewMonth: new Date('February 12, 2022')
      }));
      const start = screen.getAllByText('8')[0];
      const end = screen.getAllByText('23')[1];
      fireEvent.click(start);
      fireEvent.click(end);
      expect(screen.getAllByText('Feb 2022')[1]).toHaveStyle('background: rgb(232, 229, 255)');
    });
  });
});
//# sourceMappingURL=Calendar.spec.js.map