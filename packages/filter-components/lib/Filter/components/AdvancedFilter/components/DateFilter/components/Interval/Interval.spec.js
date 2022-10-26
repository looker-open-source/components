import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { closeCombobox, getAllComboboxOptionText, renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Filter } from '../../../../../../Filter';
import { testField, testFilterUIConfig } from '../../../../../../utils/filter_test_utils';
describe('Interval Date filter test', () => {
  it('should render an Interval component', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: '3 days ago for 6 hours',
      name: "test",
      onChange: jest.fn(),
      field: testField,
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    fireEvent.click(screen.getAllByRole('textbox')[1]);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "seconds",
        "minutes",
        "hours",
        "days",
        "weeks",
        "months",
        "quarters",
        "years",
      ]
    `);
    closeCombobox();
  });
  it('should render an Interval component with Fiscal unit options', () => {
    renderWithTheme(React.createElement(Filter, {
      expression: '3 days ago for 6 hours',
      name: "test",
      onChange: jest.fn(),
      field: _objectSpread(_objectSpread({}, testField), {}, {
        fiscal_month_offset: 1
      }),
      expressionType: "date",
      config: testFilterUIConfig,
      allowMultipleValues: true
    }));
    fireEvent.click(screen.getAllByRole('textbox')[1]);
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "seconds",
        "minutes",
        "hours",
        "days",
        "weeks",
        "months",
        "quarters",
        "years",
        "fiscal quarters",
        "fiscal years",
      ]
    `);
    closeCombobox();
  });
});
//# sourceMappingURL=Interval.spec.js.map