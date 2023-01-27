

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TableHead } from '.';
test('TableHead', () => {
  renderWithTheme(React.createElement("table", null, React.createElement(TableHead, {
    "data-testid": "table-head"
  })));
  expect(screen.getByTestId('table-head')).toBeInTheDocument();
  expect(screen.getByTestId('table-head').tagName).toEqual('THEAD');
});
//# sourceMappingURL=index.spec.js.map