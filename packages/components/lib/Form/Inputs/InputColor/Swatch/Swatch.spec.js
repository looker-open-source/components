import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Swatch } from './Swatch';
describe('Swatch', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Swatch, null));
    expect(screen.getByTestId('swatch')).toBeInTheDocument();
  });
  test('hex value', () => {
    renderWithTheme(React.createElement(Swatch, {
      color: "#4c6670"
    }));
    expect(screen.getByTestId('swatch')).toHaveStyle('background-color: #4c6670');
  });
  test('width and height', () => {
    renderWithTheme(React.createElement(Swatch, {
      color: "blue",
      size: "large"
    }));
    const swatch = screen.getByTestId('swatch');
    expect(swatch).toHaveStyle('height: 2rem');
    expect(swatch).toHaveStyle('width: 2rem');
  });
  test('disabled state', () => {
    renderWithTheme(React.createElement(Swatch, {
      color: "blue",
      disabled: true
    }));
    expect(screen.getByTestId('swatch')).toHaveAttribute('disabled');
  });
});
//# sourceMappingURL=Swatch.spec.js.map