

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TableBody } from '.';
test('TableBody', () => {
  renderWithTheme(React.createElement("table", null, React.createElement(TableBody, {
    "data-testid": "table-body"
  })));
  expect(screen.getByTestId('table-body')).toBeInTheDocument();
  expect(screen.getByTestId('table-body').tagName).toEqual('TBODY');
});
//# sourceMappingURL=index.spec.js.map