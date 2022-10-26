import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { DateFilter } from './DateFilter';
describe('Date filter test', () => {
  it('should render a DateFilter', () => {
    const item = {
      id: '1',
      type: 'anyvalue'
    };
    renderWithTheme(React.createElement(DateFilter, {
      item: item,
      filterType: "date",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(screen.getByRole('textbox')).toHaveValue('is any time');
  });
  it('should render a DateFilter with type day', () => {
    const item = {
      id: '1',
      type: 'day',
      day: 'yesterday'
    };
    renderWithTheme(React.createElement(DateFilter, {
      item: item,
      filterType: "date",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(screen.getByDisplayValue('yesterday')).toBeVisible();
    expect(screen.getByDisplayValue('matches (advanced)')).toBeVisible();
  });
  it('should render a DateFilter with time dropdown(s)', () => {
    const item = {
      id: '1',
      type: 'range'
    };
    renderWithTheme(React.createElement(DateFilter, {
      item: item,
      filterType: "date_time",
      onChange: jest.fn(),
      showAdd: false,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: jest.fn(),
      onRemove: jest.fn()
    }));
    expect(screen.getAllByPlaceholderText('Select time')).toHaveLength(2);
  });
  it('New row should default to 1 month', () => {
    const item = {
      id: '1',
      is: true,
      type: 'past',
      value: [3],
      unit: 'week'
    };
    const onAddMock = jest.fn();
    renderWithTheme(React.createElement(DateFilter, {
      item: item,
      filterType: "date_time",
      onChange: jest.fn(),
      showAdd: true,
      showName: true,
      showRemove: false,
      showOperator: false,
      showMatchesAdvanced: false,
      onAdd: onAddMock,
      onRemove: jest.fn()
    }));
    fireEvent.click(screen.getByRole('button'));
    expect(onAddMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "id": "1",
            "is": true,
            "type": "past",
            "unit": "month",
            "value": 1,
          },
          true,
        ],
      ]
    `);
  });
});
//# sourceMappingURL=DateFilter.spec.js.map