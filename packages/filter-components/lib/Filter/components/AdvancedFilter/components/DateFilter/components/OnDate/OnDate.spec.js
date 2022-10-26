import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { OnDate } from './OnDate';
describe('OnDate', () => {
  const mockItem = {
    id: '1',
    date: {
      year: 2018,
      month: 1,
      day: 1
    }
  };
  const onChangeMock = jest.fn();
  it('should render the passed in date', () => {
    renderWithTheme(React.createElement(OnDate, {
      item: mockItem,
      onChange: onChangeMock
    }));
    expect(screen.getByText('2018/01/01')).toBeVisible();
  });
  it('should render now when no date is passed in', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1516046400000);
    renderWithTheme(React.createElement(OnDate, {
      item: {
        id: '1'
      },
      onChange: onChangeMock
    }));
    expect(screen.getByText('2018/01/15')).toBeVisible();
  });
  it('should fire onChange with the new date when changed', () => {
    renderWithTheme(React.createElement(OnDate, {
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
            "date": Object {
              "day": 15,
              "month": 2,
              "year": 2018,
            },
          },
        ],
      ]
    `);
    fireEvent.click(document);
  });
  it('should fire onChange with the new date without time (DX-5280)', () => {
    const time = {
      hour: 1,
      minute: 2,
      second: 3
    };

    const itemWithTime = _objectSpread(_objectSpread({}, mockItem), {}, {
      date: _objectSpread(_objectSpread({}, mockItem.date), time)
    });

    onChangeMock.mockReset();
    renderWithTheme(React.createElement(OnDate, {
      item: itemWithTime,
      onChange: onChangeMock
    }));
    fireEvent.click(screen.getByText('2018/01/01'));
    fireEvent.click(screen.getByText('Open calendar'));
    fireEvent.click(screen.getByTitle('Mon Jan 15, 2018'));
    expect(onChangeMock).toHaveBeenCalledWith('1', {
      date: {
        year: 2018,
        month: 1,
        day: 15
      }
    });
    fireEvent.click(document);
  });
});
//# sourceMappingURL=OnDate.spec.js.map