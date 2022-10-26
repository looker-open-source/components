import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { FadeIn } from './Animate';
describe('FadeIn', () => {
  it('defaults', () => {
    renderWithTheme(React.createElement(FadeIn, {
      "data-testid": "fadein"
    }));
    expect(screen.getByTestId('fadein')).toBeInTheDocument();
    expect(screen.getByTestId('fadein')).toHaveStyle('animation-fill-mode: both;');
  });
  it('delay and duration props', () => {
    renderWithTheme(React.createElement(FadeIn, {
      "data-testid": "fadein",
      delay: "intricate",
      duration: "complex"
    }));
    expect(screen.getByTestId('fadein')).toHaveStyle('animation-delay: 500ms;');
    expect(screen.getByTestId('fadein')).toHaveStyle('animation-duration: 400ms;');
  });
  it('elements inside', () => {
    renderWithTheme(React.createElement(FadeIn, null, React.createElement("span", null, "Some text")));
    expect(screen.getByText('Some text')).toBeVisible();
  });
});
//# sourceMappingURL=Animate.spec.js.map