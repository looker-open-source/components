import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TableHeaderCell } from './TableHeaderCell';
test('TableHeaderCell', () => {
  renderWithTheme(React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement(TableHeaderCell, {
    "data-testid": "table-header-cell"
  })))));
  expect(screen.getByTestId('table-header-cell')).toBeInTheDocument();
  expect(screen.getByTestId('table-header-cell').tagName).toEqual('TH');
});
//# sourceMappingURL=TableHeaderCell.spec.js.map