import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TableDataCell } from './TableDataCell';
test('TableDataCell', () => {
  renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement(TableDataCell, {
    "data-testid": "table-data-cell"
  })))));
  expect(screen.getByTestId('table-data-cell')).toBeInTheDocument();
  expect(screen.getByTestId('table-data-cell').tagName).toEqual('TD');
});
//# sourceMappingURL=TableDataCell.spec.js.map