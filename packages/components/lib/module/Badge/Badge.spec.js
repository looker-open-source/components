
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Badge } from './Badge';
import { Sizes } from './stories/index.stories';
describe('Badge', () => {
  test('Defaults', () => {
    renderWithTheme(React.createElement(Badge, null, "Good!"));
    const badge = screen.getByText('Good!');
    expect(badge).toHaveStyle('background: rgb(237, 232, 251)');
    expect(badge).toHaveStyle('line-height: 24px');
  });
  test('Small, Positive', () => {
    renderWithTheme(React.createElement(Badge, {
      size: "small",
      intent: "positive"
    }, "Good!"));
    const badge = screen.getByText('Good!');
    expect(badge).toHaveStyle('background: rgb(228, 245, 235)');
    expect(badge).toHaveStyle('line-height: 16px');
  });
  test('Test sizes story', () => {
    renderWithTheme(React.createElement(Sizes, null));
    expect(screen.getByText('Small')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
  });
});
//# sourceMappingURL=Badge.spec.js.map