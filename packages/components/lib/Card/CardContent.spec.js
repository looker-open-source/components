import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { CardContent } from './CardContent';
describe('CardContent', () => {
  test('default', () => {
    renderWithTheme(React.createElement(CardContent, null, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toBeInTheDocument();
  });
  test('custom padding', () => {
    renderWithTheme(React.createElement(CardContent, {
      p: "u8"
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toHaveStyle('padding: 2rem');
  });
});
//# sourceMappingURL=CardContent.spec.js.map