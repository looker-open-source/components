import noop from 'lodash/noop';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Token } from './Token';
describe('Token', () => {
  it('should render a Token with subdued', () => {
    renderWithTheme(React.createElement(Token, {
      label: 'test',
      subdued: true,
      onClick: noop,
      ref: noop
    }));
    const token = screen.getByRole('button');
    expect(token).toHaveAttribute('aria-selected', 'false');
  });
  it('should render a Token without subdued', () => {
    renderWithTheme(React.createElement(Token, {
      label: 'test',
      subdued: false,
      onClick: noop,
      ref: noop
    }));
    const token = screen.getByRole('button');
    expect(token).toHaveAttribute('aria-selected', 'true');
  });
});
//# sourceMappingURL=Token.spec.js.map