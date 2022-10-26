import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { closeCombobox, getAllComboboxOptionText, renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Filter } from '../../../../../../Filter';
import { testField, testFilterUIConfig } from '../../../../../../utils/filter_test_utils';
describe('This Date filter test', () => {
  const expression = 'this year';
  it('filter is set to this date filter type', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: expression,
      name: "test",
      onChange: jest.fn(),
      field: testField,
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('is this');
  });
  it('should render a ThisNextLast component', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: expression,
      name: "test",
      onChange: jest.fn(),
      field: testField,
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    const unitsDropdown = screen.getAllByRole('textbox')[1];
    expect(unitsDropdown).toHaveValue('year');
    fireEvent.click(unitsDropdown);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "day",
        "week",
        "month",
        "quarter",
        "year",
      ]
    `);
    closeCombobox();
  });
});
describe('Last Date filter test', () => {
  it('filter is set to last date filter type', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: 'last fiscal year',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('is previous');
  });
  it('should render a ThisNextLast Last component with Fiscal unit options', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: 'last fiscal year',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    const unitsDropdown = screen.getAllByRole('textbox')[1];
    expect(unitsDropdown).toHaveValue('fiscal year');
    fireEvent.click(unitsDropdown);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month",
        "quarter",
        "year",
        "fiscal quarter",
        "fiscal year",
      ]
    `);
    closeCombobox();
  });
});
describe('Next Date filter test', () => {
  it('filter is set to next date filter type', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: 'next week',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('is next');
  });
  it('should render a ThisNextLast Next component with Fiscal unit options', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: 'next week',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        type: 'date_fiscal_quarter'
      }),
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    const unitsDropdown = screen.getAllByRole('textbox')[1];
    expect(unitsDropdown).toHaveValue('week');
    fireEvent.click(unitsDropdown);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "day",
        "week",
        "month",
        "quarter",
        "year",
        "fiscal quarter",
        "fiscal year",
      ]
    `);
    closeCombobox();
  });
});
//# sourceMappingURL=ThisNextLast.spec.js.map