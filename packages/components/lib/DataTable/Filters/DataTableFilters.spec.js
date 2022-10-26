import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { InputFilters } from '../../Form';
import { columns } from '../../fixtures/DataTable/columns';
import { filters } from '../../fixtures/filters';
import { DataTableFilters } from './DataTableFilters';
describe('DataTableFilters', () => {
  test('render and displays InputFilter', () => {
    renderWithTheme(React.createElement(DataTableFilters, {
      columns: columns,
      columnsVisible: [],
      onColumnVisibilityChange: jest.fn()
    }, React.createElement(InputFilters, {
      filters: filters,
      onChange: jest.fn()
    })));
    expect(screen.getByPlaceholderText('Filter List')).toBeInTheDocument();
  });
  test('render display columns icon', () => {
    renderWithTheme(React.createElement(DataTableFilters, {
      columns: columns,
      columnsVisible: [],
      onColumnVisibilityChange: jest.fn()
    }, React.createElement(InputFilters, {
      filters: filters,
      onChange: jest.fn()
    })));
    expect(screen.getByText('Select columns to display')).toBeInTheDocument();
  });
});
//# sourceMappingURL=DataTableFilters.spec.js.map