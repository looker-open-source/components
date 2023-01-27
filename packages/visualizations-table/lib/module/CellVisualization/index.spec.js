
import React from 'react';
import { CellVisualization } from './index';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
it('renders CellVisualization', () => {
  renderWithTheme(React.createElement(CellVisualization, {
    min: 0,
    max: 100,
    value: 50
  }));
  expect(screen.getByTestId('single-bar')).toHaveStyle({
    flex: 0.5
  });
});
it('does not render CellVisualization when max is 0', () => {
  renderWithTheme(React.createElement(CellVisualization, {
    min: 0,
    max: 0,
    value: 50
  }));
  expect(screen.queryByTestId('single-bar')).not.toBeInTheDocument();
});
//# sourceMappingURL=index.spec.js.map