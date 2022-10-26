import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TableFoot } from './TableFoot';
test('TableFoot renders', () => {
  renderWithTheme(React.createElement("table", null, React.createElement(TableFoot, {
    "data-testid": "table-footer"
  })));
  expect(screen.getByTestId('table-footer')).toBeInTheDocument();
});
//# sourceMappingURL=TableFoot.spec.js.map