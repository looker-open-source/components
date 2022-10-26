import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Card } from './Card';
describe('Card', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Card, null, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toBeInTheDocument();
  });
  test('raised', () => {
    renderWithTheme(React.createElement(Card, {
      raised: true
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toHaveStyle('box-shadow: 0px 1px 2px 0px rgba(60,64,67,.30),0px 1px 3px 1px rgba(60,64,67,.15);');
  });
});
//# sourceMappingURL=Card.spec.js.map