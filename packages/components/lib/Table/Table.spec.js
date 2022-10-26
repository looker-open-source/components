import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Table } from './Table';
test('A Table should render', () => {
  renderWithTheme(React.createElement(Table, {
    "data-testid": "table"
  }));
  expect(screen.getByTestId('table')).toBeInTheDocument();
  expect(screen.getByTestId('table').tagName).toEqual('TABLE');
});
//# sourceMappingURL=Table.spec.js.map