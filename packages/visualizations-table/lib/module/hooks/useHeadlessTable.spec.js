import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import { mockData, mockFields, mockTableConfig, mockDataWithRowTotals, mockFieldsRowTotals } from '@looker/visualizations-adapters';
import { flexRender } from '@tanstack/react-table';
import { useHeadlessTable } from './useHeadlessTable';
const wrapper = ({
  children
}) => React.createElement(React.Fragment, null, children);
it('configures table object', () => {
  const {
    result
  } = renderHook(() => useHeadlessTable({
    data: mockData,
    fields: mockFields,
    config: mockTableConfig
  }), {
    wrapper
  });
  const tableRows = result.current.table.getRowModel().rows;
  const firstRow = tableRows[0].getVisibleCells();
  const RowComponent = () => React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, firstRow.map(({
    column,
    getContext
  }, i) => React.createElement("td", {
    key: i
  }, flexRender(column.columnDef.cell, getContext()))))));
  render(React.createElement(RowComponent, null));
  const tableCells = screen.getAllByRole('cell');
  expect(tableCells.map(cell => cell.textContent)).toEqual(['2019-12-22', 'California', '3087', '1088']);
});
it('Handles table sorting state', () => {
  const {
    result,
    rerender
  } = renderHook(() => useHeadlessTable({
    data: mockData,
    fields: mockFields,
    config: mockTableConfig
  }), {
    wrapper
  });

  expect(result.current.sorting).toEqual([{
    id: 'orders.count',
    desc: true
  }]);
  act(() => {
    result.current.handleTableSort({
      id: 'orders.count',
      column: {
        id: 'orders.count',
        getCanSort: () => true
      }
    }, {
      shiftKey: false
    });
  });
  rerender();

  expect(result.current.sorting).toEqual([{
    id: 'orders.count',
    desc: false
  }]);
});
it('Handles table with row totals', () => {
  const {
    result
  } = renderHook(() => useHeadlessTable({
    data: mockDataWithRowTotals,
    fields: mockFieldsRowTotals,
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_totals: true
    })
  }), {
    wrapper
  });
  const tableRows = result.current.table.getRowModel().rows;
  const firstRow = tableRows[0].getVisibleCells();
  const RowComponent = () => React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, firstRow.map(({
    column,
    getContext
  }, i) => React.createElement("td", {
    key: i
  }, flexRender(column.columnDef.cell, getContext()))))));
  render(React.createElement(RowComponent, null));
  const tableCells = screen.getAllByRole('cell');
  expect(tableCells.map(cell => cell.textContent)).toEqual(['', '', '89', '39', '128']);
});
it('Hides row totals when show_row_totals is false', () => {
  const {
    result
  } = renderHook(() => useHeadlessTable({
    data: mockDataWithRowTotals,
    fields: mockFieldsRowTotals,
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      show_row_totals: false
    })
  }), {
    wrapper
  });
  const tableRows = result.current.table.getRowModel().rows;
  const firstRow = tableRows[0].getVisibleCells();
  const RowComponent = () => React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, firstRow.map(({
    column,
    getContext
  }, i) => React.createElement("td", {
    key: i
  }, flexRender(column.columnDef.cell, getContext()))))));
  render(React.createElement(RowComponent, null));
  const tableCells = screen.getAllByRole('cell');
  expect(tableCells.map(cell => cell.textContent)).toEqual(['', '', '89', '39']);
});
it('controls column visibility based on series visibility', () => {
  const {
    result
  } = renderHook(() => useHeadlessTable({
    data: mockData,
    fields: mockFields,
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      series: {
        'orders.count': {
          visible: true
        },
        'orders.average_total_amount_of_order_usd': {
          visible: false
        },
        'orders.created_date': {
          visible: true
        },
        'users.state': {
          visible: true
        }
      }
    })
  }), {
    wrapper
  });
  const tableRows = result.current.table.getRowModel().rows;
  const firstRow = tableRows[0].getVisibleCells();
  const RowComponent = () => React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, firstRow.map(({
    column,
    getContext
  }, i) => React.createElement("td", {
    key: i
  }, flexRender(column.columnDef.cell, getContext()))))));
  render(React.createElement(RowComponent, null));
  const tableCells = screen.getAllByRole('cell');
  expect(tableCells.map(cell => cell.textContent)).toEqual(['2019-12-22', 'California', '3087']);
});
//# sourceMappingURL=useHeadlessTable.spec.js.map