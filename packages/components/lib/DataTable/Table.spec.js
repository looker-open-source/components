import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Table } from './Table';
describe('DataTable/Table', () => {
  test('loading', () => {
    renderWithTheme(React.createElement(Table, {
      caption: "",
      columnsVisible: [],
      columns: [],
      state: "loading"
    }, "Stuff"));
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
  test('noResultsDisplay', () => {
    renderWithTheme(React.createElement(Table, {
      caption: "",
      columnsVisible: [],
      columns: [],
      state: "noResults",
      noResultsDisplay: "Nope, nothing to see here"
    }, "Stuff"));
    expect(screen.getByText('Nope, nothing to see here')).toBeInTheDocument();
  });
  test('noResultsDisplay non-string', () => {
    renderWithTheme(React.createElement(Table, {
      caption: "",
      columnsVisible: [],
      columns: [],
      state: "noResults",
      noResultsDisplay: React.createElement("p", null, "Nope, nothing to see here")
    }, "Stuff"));
    expect(screen.getByText('Nope, nothing to see here')).toBeInTheDocument();
  });
});
//# sourceMappingURL=Table.spec.js.map