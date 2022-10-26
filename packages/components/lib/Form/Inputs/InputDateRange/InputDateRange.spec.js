import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import en from 'date-fns/locale/en-US';
import ital from 'date-fns/locale/it';
import ko from 'date-fns/locale/ko';
import { InputDateRange } from './InputDateRange';
import * as stories from './stories/index.stories';
const {
  ExternalUpdates
} = composeStories(stories);
const realDateNow = Date.now.bind(global.Date);
beforeEach(() => {
  global.Date.now = jest.fn(() => 1580567580000);
});
afterEach(() => {
  global.Date.now = realDateNow;
  jest.clearAllMocks();
});
const mockProps = {
  onChange: jest.fn(),
  onValidationFail: jest.fn(),
  value: {
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  }
};
test('value can be updated externally', () => {
  renderWithTheme(React.createElement(ExternalUpdates, null));
  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument();
  fireEvent.click(screen.getByText('June 5 - 15, 2019'));
  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument();
  fireEvent.click(screen.getByText('January 1 - February 15, 2012'));
  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument();
});
test('user can change the selected date via text input field', () => {
  renderWithTheme(React.createElement(ExternalUpdates, null));
  fireEvent.click(screen.getByText('Open calendar'));
  expect(screen.getAllByText('Jun 2019')).toHaveLength(2);
  const fromTextInput = screen.getByDisplayValue('06/03/2019');
  fireEvent.change(fromTextInput, {
    target: {
      value: '01/01/2012'
    }
  });
  fireEvent.blur(fromTextInput);
  expect(screen.getAllByText('Jan 2012')).toHaveLength(2);
  fireEvent.click(document);
});
test('gracefully accepts partial date range objects', async () => {
  renderWithTheme(React.createElement(ExternalUpdates, null));
  fireEvent.click(screen.getByText('From: February 9, 2021'));
  fireEvent.click(screen.getByText('Open calendar'));
  await waitFor(() => {
    expect(screen.getAllByText('Feb 2021')).toHaveLength(2);
  });
});
test('calls onChange prop when a day is clicked', async () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const openCalendar = screen.getByText('Open calendar');
  fireEvent.click(openCalendar);
  await waitFor(() => {
    expect(screen.getAllByText('4')[1]).toBeInTheDocument();
  });
  expect(mockProps.onChange).not.toHaveBeenCalled();
  fireEvent.click(screen.getAllByText('4')[1]);
  fireEvent.click(screen.getAllByText('21')[1]);
  expect(mockProps.onChange).toHaveBeenCalled();
});
test('selects a single day when clicking on one of the date endpoints', async () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  expect(mockProps.onChange).not.toHaveBeenCalled();
  const openCalendar = screen.getByText('Open calendar');
  fireEvent.click(openCalendar);
  await waitFor(() => {
    expect(screen.getAllByText('3')[1]).toBeInTheDocument();
  });
  const date = screen.getAllByText('3')[1];
  fireEvent.click(date);
  expect(mockProps.onChange).toHaveBeenCalled();
});
test('user can clear the selected date by deleting text input content', () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const fromTextInput = screen.getByTestId('date-from-text-input');
  fireEvent.change(fromTextInput, {
    target: {
      value: ''
    }
  });
  fireEvent.blur(fromTextInput);
  const toTextInput = screen.getByTestId('date-to-text-input');
  fireEvent.change(toTextInput, {
    target: {
      value: ''
    }
  });
  fireEvent.blur(toTextInput);
  expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Object {
          "to": 2019-06-09T07:00:00.000Z,
        },
      ],
      Array [
        Object {
          "from": 2019-06-03T07:00:00.000Z,
        },
      ],
    ]
  `);
});
test('starts new range with from when exsting value has both from and', async () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const fromInput = screen.getByTestId('date-from-text-input');
  expect(fromInput).toHaveValue('06/03/2019');
  const openCalendar = screen.getByText('Open calendar');
  fireEvent.click(openCalendar);
  await waitFor(() => {
    expect(screen.getAllByText('4')[1]).toBeInTheDocument();
  });
  const newDate = screen.getAllByText('1')[1];
  fireEvent.click(newDate);
  expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Object {
          "from": 2019-06-01T07:00:00.000Z,
          "to": 2019-06-09T07:00:00.000Z,
        },
      ],
    ]
  `);
});
test('calls onChange prop when a TextInput is modified', () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const toInput = screen.getByTestId('date-to-text-input');
  const fromInput = screen.getByTestId('date-from-text-input');
  expect(mockProps.onChange).not.toHaveBeenCalled();
  fireEvent.change(fromInput, {
    target: {
      value: '6/15/2019'
    }
  });
  fireEvent.blur(fromInput);
  fireEvent.change(toInput, {
    target: {
      value: '6/25/2019'
    }
  });
  fireEvent.blur(toInput);
  expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Object {
          "from": 2019-06-15T07:00:00.000Z,
          "to": 2019-06-09T07:00:00.000Z,
        },
      ],
      Array [
        Object {
          "from": 2019-06-03T07:00:00.000Z,
          "to": 2019-06-25T07:00:00.000Z,
        },
      ],
    ]
  `);
  expect(mockProps.onValidationFail.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        "Invalid range",
      ],
    ]
  `);
});
test('selects the to when clicking a date after the from', async () => {
  renderWithTheme(React.createElement(InputDateRange, _extends({}, mockProps, {
    value: {
      from: new Date('June 3, 2019')
    }
  })));
  const fromInput = screen.getByTestId('date-from-text-input');
  const toInput = screen.getByTestId('date-to-text-input');
  const openCalendar = screen.getByText('Open calendar');
  expect(fromInput).toHaveValue('06/03/2019');
  expect(toInput).toHaveValue('');
  fireEvent.click(openCalendar);
  await waitFor(() => {
    expect(screen.getAllByText('15')[1]).toBeInTheDocument();
  });
  fireEvent.click(screen.getAllByText('15')[1]);
  expect(mockProps.onChange.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Object {
          "from": 2019-06-15T07:00:00.000Z,
        },
      ],
    ]
  `);
});
test('value prop fills TextInputs with correct dates', () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const fromInput = screen.getByTestId('date-from-text-input');
  const toInput = screen.getByTestId('date-to-text-input');
  expect(fromInput).toHaveValue('06/03/2019');
  expect(toInput).toHaveValue('06/09/2019');
});
test('value highlights the correct dates in the Calendar', async () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const openCalendar = screen.getByText('Open calendar');
  fireEvent.click(openCalendar);
  await waitFor(() => {
    expect(screen.getAllByText('3')[1]).toBeInTheDocument();
  });
  const startDate = screen.getAllByText('3')[1];
  const endDate = screen.getAllByText('9')[1];
  const dayBefore = screen.getAllByText('2')[1];
  const dayAfter = screen.getAllByText('10')[1];
  expect(startDate).toHaveAttribute('aria-selected', 'true');
  expect(endDate).toHaveAttribute('aria-selected', 'true');
  expect(dayBefore).toHaveAttribute('aria-selected', 'false');
  expect(dayAfter).toHaveAttribute('aria-selected', 'false');
});
test('validates FROM text input to match localized date format', () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const fromInput = screen.getByTestId('date-from-text-input');
  fireEvent.change(fromInput, {
    target: {
      value: '6/3/2019'
    }
  });
  fireEvent.blur(fromInput);
  expect(mockProps.onValidationFail).not.toHaveBeenCalled();
  fireEvent.change(fromInput, {
    target: {
      value: 'not-a-valid-date'
    }
  });
  fireEvent.blur(fromInput);
  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
});
test('validates TO text input to match localized date format', () => {
  renderWithTheme(React.createElement(InputDateRange, mockProps));
  const toInput = screen.getByTestId('date-to-text-input');
  fireEvent.change(toInput, {
    target: {
      value: '6/15/2019'
    }
  });
  fireEvent.blur(toInput);
  expect(mockProps.onValidationFail).not.toHaveBeenCalled();
  fireEvent.change(toInput, {
    target: {
      value: 'nope-not-valid'
    }
  });
  fireEvent.blur(toInput);
  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1);
});
test('localizes calendar', () => {
  renderWithTheme(React.createElement(InputDateRange, _extends({
    dateStringFormat: "MMMM-dd",
    locale: ital
  }, mockProps)));
  expect(screen.getByText('giugno-03')).toBeInTheDocument();
  expect(screen.getByText('giugno-09')).toBeInTheDocument();
});
describe('localizes text input', () => {
  test('Korean', () => {
    renderWithTheme(React.createElement(InputDateRange, {
      locale: ko,
      value: {
        from: new Date(Date.now()),
        to: new Date('May 2, 2020')
      },
      onChange: jest.fn()
    }));
    expect(screen.getByDisplayValue('2020.02.01')).toBeInTheDocument();
  });
  test('Italian', () => {
    renderWithTheme(React.createElement(InputDateRange, {
      locale: ital,
      value: {
        from: new Date(Date.now()),
        to: new Date('May 2, 2020')
      },
      onChange: jest.fn()
    }));
    expect(screen.getByDisplayValue('01/02/2020')).toBeInTheDocument();
  });
  test('English', () => {
    renderWithTheme(React.createElement(InputDateRange, {
      locale: en,
      value: {
        from: new Date(Date.now()),
        to: new Date('May 2, 2020')
      },
      onChange: jest.fn()
    }));
    expect(screen.getByDisplayValue('02/01/2020')).toBeInTheDocument();
  });
});
//# sourceMappingURL=InputDateRange.spec.js.map