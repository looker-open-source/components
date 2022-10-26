import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { closeCombobox, getAllComboboxOptionText, renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Filter } from '../../../../../../Filter';
import { testField, testFilterUIConfig } from '../../../../../../utils/filter_test_utils';
import { BeforeAfter } from './BeforeAfter';
describe('BeforeAfter Date filter test', () => {
  it('should render a BeforeAfter component', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: 'before 3 day ago',
      name: "test",
      onChange: jest.fn(),
      field: testField,
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    const inputs = screen.getAllByRole('textbox');
    expect(inputs[0]).toHaveValue('is before');
    expect(inputs[1]).toHaveValue('(relative)');
    expect(inputs[2]).toHaveValue('days ago');
    expect(screen.queryByTestId('number-value')).toHaveValue(3);
    fireEvent.click(inputs[2]);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "years ago",
        "quarters ago",
        "months ago",
        "weeks ago",
        "days ago",
        "hours ago",
        "minutes ago",
        "seconds ago",
        "now",
        "seconds from now",
        "minutes from now",
        "hours from now",
        "days from now",
        "weeks from now",
        "months from now",
        "quarters from now",
        "years from now",
      ]
    `);
    closeCombobox();
  });
  it('should render a BeforeAfter component with FiscalUnit options', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: 'before 3 days ago',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        fiscal_month_offset: 1
      }),
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    fireEvent.click(screen.getAllByRole('textbox')[2]);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "fiscal years ago",
        "fiscal quarters ago",
        "years ago",
        "quarters ago",
        "months ago",
        "weeks ago",
        "days ago",
        "hours ago",
        "minutes ago",
        "seconds ago",
        "now",
        "seconds from now",
        "minutes from now",
        "hours from now",
        "days from now",
        "weeks from now",
        "months from now",
        "quarters from now",
        "years from now",
        "fiscal quarter from now",
        "fiscal years from now",
      ]
    `);
    closeCombobox();
  });
});
describe('BeforeAfter can render now option', () => {
  const beforeNowItem = {
    id: '0',
    type: 'before',
    is: true,
    unit: 'now',
    range: 'relative'
  };
  it('should render a Before now time unit', () => {
    renderWithTheme(React.createElement(BeforeAfter, {
      item: beforeNowItem,
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        fiscal_month_offset: 1
      }),
      filterType: "date"
    }));
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('now');
  });
  it('should not render value component for before now item', () => {
    renderWithTheme(React.createElement(BeforeAfter, {
      item: beforeNowItem,
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        fiscal_month_offset: 1
      }),
      filterType: "date"
    }));
    expect(screen.queryByTestId('number-value')).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=BeforeAfter.spec.js.map