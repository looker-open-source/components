import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { DateRange } from './DateRange';
describe('DateRange', () => {
  const mockItem = {
    id: '1',
    start: {
      year: 2018,
      month: 1,
      day: 1,
      hour: 12,
      minute: 2
    },
    end: {
      year: 2018,
      month: 2,
      day: 1,
      hour: 13,
      minute: 4
    }
  };
  const onChangeMock = jest.fn();
  beforeEach(() => {
    onChangeMock.mockReset();
  });
  it('should render the start and end date', () => {
    renderWithTheme(React.createElement(DateRange, {
      item: mockItem,
      onChange: onChangeMock
    }));
    expect(screen.getByText('2018/01/01')).toBeVisible();
    expect(screen.getByText('2018/02/01')).toBeVisible();
  });
  it('should render the start and end date and time when showTime is set', () => {
    renderWithTheme(React.createElement(DateRange, {
      item: mockItem,
      onChange: onChangeMock,
      showTime: true
    }));
    expect(screen.getByText('2018/01/01')).toBeVisible();
    expect(screen.getByText('2018/02/01')).toBeVisible();
    expect(screen.getByDisplayValue('12:02 pm')).toBeVisible();
    expect(screen.getByDisplayValue('01:04 pm')).toBeVisible();
  });
  it('should default to now when start date is not specified', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1516046400000);

    const item = _objectSpread(_objectSpread({}, mockItem), {}, {
      start: undefined
    });

    renderWithTheme(React.createElement(DateRange, {
      item: item,
      onChange: onChangeMock
    }));
    expect(screen.getByText('2018/01/15')).toBeVisible();
    expect(screen.getByText('2018/02/01')).toBeVisible();
  });
  it('should default to now when end date is not specified', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1518724800000);

    const item = _objectSpread(_objectSpread({}, mockItem), {}, {
      end: undefined
    });

    renderWithTheme(React.createElement(DateRange, {
      item: item,
      onChange: onChangeMock
    }));
    expect(screen.getByText('2018/01/01')).toBeVisible();
    expect(screen.getByText('2018/02/15')).toBeVisible();
  });
  it('should call our callback function when the start time changes', () => {
    renderWithTheme(React.createElement(DateRange, {
      item: mockItem,
      onChange: onChangeMock,
      showTime: true
    }));
    const startTime = screen.getByDisplayValue('12:02 pm');
    fireEvent.click(startTime);
    const newStartTime = screen.getByText('01:00 pm');
    fireEvent.click(newStartTime);
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "start": Object {
              "day": 1,
              "hour": 13,
              "minute": 0,
              "month": 1,
              "second": 0,
              "year": 2018,
            },
          },
        ],
      ]
    `);
  });
  it('should call our callback function when the end time changes', () => {
    renderWithTheme(React.createElement(DateRange, {
      item: mockItem,
      onChange: onChangeMock,
      showTime: true
    }));
    const endTime = screen.getByDisplayValue('01:04 pm');
    fireEvent.click(endTime);
    const newEndTime = screen.getByText('02:00 pm');
    fireEvent.click(newEndTime);
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "end": Object {
              "day": 1,
              "hour": 14,
              "minute": 0,
              "month": 2,
              "second": 0,
              "year": 2018,
            },
          },
        ],
      ]
    `);
  });
  it('should push the end time when start time is set after end', () => {
    renderWithTheme(React.createElement(DateRange, {
      item: mockItem,
      onChange: onChangeMock
    }));
    fireEvent.click(screen.getByText('2018/01/01'));
    fireEvent.click(screen.getByText('Open calendar'));
    fireEvent.click(screen.getByText('next month'));
    fireEvent.click(screen.getByTitle('Thu Feb 15, 2018'));
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "end": Object {
              "day": 16,
              "hour": 12,
              "minute": 2,
              "month": 2,
              "second": 0,
              "year": 2018,
            },
            "start": Object {
              "day": 15,
              "hour": 12,
              "minute": 2,
              "month": 2,
              "second": 0,
              "year": 2018,
            },
          },
        ],
      ]
    `);
    fireEvent.click(document);
  });
  it('should push the start time when end time is set before start', () => {
    renderWithTheme(React.createElement(DateRange, {
      item: mockItem,
      onChange: onChangeMock
    }));
    fireEvent.click(screen.getByText('2018/02/01'));
    fireEvent.click(screen.getByText('Open calendar'));
    fireEvent.click(screen.getByText('previous month'));
    fireEvent.click(screen.getByText('previous month'));
    fireEvent.click(screen.getByTitle('Fri Dec 15, 2017'));
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "end": Object {
              "day": 15,
              "hour": 13,
              "minute": 4,
              "month": 12,
              "second": 0,
              "year": 2017,
            },
            "start": Object {
              "day": 14,
              "hour": 13,
              "minute": 4,
              "month": 12,
              "second": 0,
              "year": 2017,
            },
          },
        ],
      ]
    `);
    fireEvent.click(document);
  });
});
//# sourceMappingURL=DateRange.spec.js.map