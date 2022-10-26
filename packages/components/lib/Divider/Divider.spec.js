import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Divider } from './Divider';
describe('Divider', () => {
  test('Default', () => {
    renderWithTheme(React.createElement(Divider, null));
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
  });
  test('appearance', () => {
    renderWithTheme(React.createElement(Divider, {
      appearance: "onDark"
    }));
    expect(screen.getByRole('separator')).toHaveStyle('background-color: rgb(112, 119, 129)');
  });
  test('custom', () => {
    renderWithTheme(React.createElement(Divider, {
      size: "20px",
      customColor: "turquoise"
    }));
    expect(screen.getByRole('separator')).toHaveStyle('height: 20px');
    expect(screen.getByRole('separator')).toHaveStyle('background-color: turquoise');
  });
});
//# sourceMappingURL=Divider.spec.js.map