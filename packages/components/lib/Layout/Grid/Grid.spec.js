import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Grid } from './Grid';
const content = React.createElement(React.Fragment, null, React.createElement("div", null, "first"), React.createElement("div", null, "second"), React.createElement("div", null, "third"), React.createElement("div", null, "fourth"));
describe('Grid', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Grid, {
      "data-testid": "grid"
    }, content, " "));
    expect(screen.getByTestId('grid')).toHaveStyleRule('display', 'grid');
  });
  test('specified gap', () => {
    renderWithTheme(React.createElement(Grid, {
      "data-testid": "grid",
      gap: "u8"
    }, content));
    expect(screen.getByTestId('grid')).toHaveStyleRule('grid-gap', '2rem');
  });
  test('specified columns', () => {
    renderWithTheme(React.createElement(Grid, {
      "data-testid": "grid",
      columns: 4
    }, content));
    expect(screen.getByTestId('grid')).toHaveStyleRule('grid-template-columns', 'repeat(4,minmax(0,1fr))');
  });
  test('specified width', () => {
    renderWithTheme(React.createElement(Grid, {
      "data-testid": "grid",
      width: "50%"
    }, content));
    expect(screen.getByTestId('grid')).toHaveStyleRule('width', '50%');
  });
});
//# sourceMappingURL=Grid.spec.js.map