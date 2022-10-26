import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { DividerVertical } from './DividerVertical';
test('render Default DividerVertical', () => {
  renderWithTheme(React.createElement(DividerVertical, null));
  const divider = screen.getByRole('separator');
  expect(divider).toBeInTheDocument();
  expect(divider).toHaveAttribute('aria-orientation', 'vertical');
});
test('overrides global height declarations when stretching', () => {
  renderWithTheme(React.createElement(DividerVertical, {
    stretch: true
  }));
  expect(screen.getByRole('separator')).toHaveStyle({
    height: 'inherit'
  });
});
//# sourceMappingURL=DividerVertical.spec.js.map