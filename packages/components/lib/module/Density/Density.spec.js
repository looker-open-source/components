

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Basic, Positive1, Negative3 } from './stories/index.stories';
describe('Density', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.875rem');
  });
  test('+1', () => {
    renderWithTheme(React.createElement(Positive1, null));
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 1rem');
  });
  test('-3', () => {
    renderWithTheme(React.createElement(Negative3, null));
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.75rem');
  });
});
//# sourceMappingURL=Density.spec.js.map