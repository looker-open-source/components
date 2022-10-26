import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TableRow } from './TableRow';
test('TableRow', () => {
  renderWithTheme(React.createElement("table", null, React.createElement("tbody", null, React.createElement(TableRow, {
    "data-testid": "table-row"
  }))));
  expect(screen.getByTestId('table-row')).toBeInTheDocument();
  expect(screen.getByTestId('table-row').tagName).toEqual('TR');
});
//# sourceMappingURL=TableRow.spec.js.map