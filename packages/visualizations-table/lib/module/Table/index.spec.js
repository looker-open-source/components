import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { mockTableConfig, mockFields, mockPivotedFields, mockData, mockTotals, mockPivotedData, mockPivotGender } from '@looker/visualizations-adapters';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen, within, fireEvent } from '@testing-library/react';
import { Table } from './';

const getTextContent = cells => cells.map(c => c.textContent);
it('organizes table columns as specified by config.column_order', () => {
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_numbers: false,
      column_order: ['orders.count', 'orders.created_date', 'orders.average_total_amount_of_order_usd', 'users.state']
    }),
    fields: mockFields,
    data: mockData
  }));
  const headers = screen.getAllByTestId('columnheader-label');
  expect(getTextContent(headers)).toEqual(['Orders Count', 'Orders Created Date', 'Orders Average Total Amount of Order USD', 'Users State']);
});
it('renders row numbers when config.show_row_numbers is true', () => {
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_numbers: true
    }),
    fields: mockFields,
    data: mockData
  }));

  expect(screen.getAllByRole('cell')[1]).toHaveTextContent('1');
});
it('hides row numbers when config.show_row_numbers is false', () => {
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_numbers: false
    }),
    fields: mockFields,
    data: mockData
  }));

  expect(screen.getAllByRole('cell')[1]).toHaveTextContent('2019-12-22');
});
it('sorts table columns', () => {
  const highestOrderCount = {
    'orders.count': Infinity,
    'orders.average_total_amount_of_order_usd': Infinity,
    'orders.created_date': '2012-12-12',
    'users.state': 'Oregon'
  };
  const lowestOrderCount = {
    'orders.count': -Infinity,
    'orders.average_total_amount_of_order_usd': -Infinity,
    'orders.created_date': '2022-09-01',
    'users.state': 'Oregon'
  };
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_numbers: false
    }),
    fields: mockFields,
    data: [...mockData, lowestOrderCount, highestOrderCount]
  }));

  const topRow = screen.getAllByRole('row')[1];
  expect(getTextContent(within(topRow).getAllByRole('cell'))).toEqual(['', '2012-12-12', 'Oregon', 'Infinity', 'Infinity']);

  const sortButton = screen.getByText('Sort ascending').closest('button');
  fireEvent.click(sortButton);
  const newTopRow = screen.getAllByRole('row')[1];
  expect(getTextContent(within(newTopRow).getAllByRole('cell'))).toEqual(['', '2022-09-01', 'Oregon', '-Infinity', '-Infinity']);
});
it('sorts multiple table columns when shift key is held down', () => {
  const ariaSortValue = el => {
    var _el$attributes$getNam;
    return (_el$attributes$getNam = el.attributes.getNamedItem('aria-sort')) === null || _el$attributes$getNam === void 0 ? void 0 : _el$attributes$getNam.value;
  };
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_numbers: false
    }),
    fields: mockFields,
    data: mockData
  }));

  const headers = screen.getAllByRole('columnheader').slice(1, -1);
  const sortButtons = headers.map(h => within(h).getByRole('button', {
    hidden: true
  }));

  expect(ariaSortValue(headers[0])).toEqual('none');
  expect(ariaSortValue(headers[1])).toEqual('none');

  fireEvent.click(sortButtons[0]);
  expect(ariaSortValue(headers[0])).toEqual('descending');
  expect(ariaSortValue(headers[1])).toEqual('none');

  fireEvent.click(sortButtons[1], {
    shiftKey: true
  });
  expect(ariaSortValue(headers[0])).toEqual('descending');
  expect(ariaSortValue(headers[1])).toEqual('descending');

  fireEvent.click(sortButtons[0], {
    shiftKey: true
  });
  expect(ariaSortValue(headers[0])).toEqual('ascending');
  expect(ariaSortValue(headers[1])).toEqual('descending');
});
it('renders totals when config.show_totals is true', () => {
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_totals: true
    }),
    fields: mockFields,
    data: mockData,
    totals: mockTotals
  }));
  const footerRow = screen.getAllByRole('row')[screen.getAllByRole('row').length - 1];
  expect(getTextContent(within(footerRow).getAllByRole('columnheader'))).toEqual(['Totals', '', '5689', '2245']);
});
it('renders value format on body', () => {
  const configCopy = _objectSpread({}, mockTableConfig);
  configCopy.series = [{
    value_format: '$#,##0.00'
  }, {
    value_format: '0,0.[00]'
  }];
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, configCopy), {}, {
      show_totals: true
    }),
    fields: mockFields,
    data: mockData,
    totals: mockTotals
  }));
  const bodyRow = screen.getAllByRole('row')[screen.getAllByRole('row').length - 2];
  expect(getTextContent(within(bodyRow).getAllByRole('cell'))).toEqual(['', '2019-12-19', 'Oregon', '$87.00', '88']);
});
it('renders value format on totals', () => {
  const configCopy = _objectSpread({}, mockTableConfig);
  configCopy.series = [{
    value_format: '$#,##0.00'
  }, {
    value_format: '0,0.[00]'
  }];
  renderWithTheme(React.createElement(Table, {
    config: _objectSpread(_objectSpread({}, configCopy), {}, {
      show_totals: true
    }),
    fields: mockFields,
    data: mockData,
    totals: mockTotals
  }));
  const footerRow = screen.getAllByRole('row')[screen.getAllByRole('row').length - 1];
  expect(getTextContent(within(footerRow).getAllByRole('columnheader'))).toEqual(['Totals', '', '$5,689.00', '2,245']);
});
it('renders multiple table head rows for pivoted queries', () => {
  renderWithTheme(React.createElement(Table, {
    config: mockTableConfig,
    fields: mockPivotedFields,
    data: mockPivotedData,
    pivots: mockPivotGender
  }));
  const tHead = screen.getAllByRole('rowgroup')[0];
  const headerRows = within(tHead).getAllByRole('row');

  expect(headerRows.length).toEqual(2);

  expect(getTextContent(within(headerRows[0]).getAllByRole('columnheader'))).toEqual(['', 'Users Gender', 'f', 'm', 'male', '']);

  expect(getTextContent(within(headerRows[1]).getAllByTestId('columnheader-label'))).toEqual(['Users City', 'Orders Count', 'Orders Count', 'Orders Count']);
});
//# sourceMappingURL=index.spec.js.map