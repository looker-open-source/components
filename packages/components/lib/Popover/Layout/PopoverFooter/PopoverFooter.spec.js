import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Basic, FooterClose, FooterWithChildren } from './PopoverFooter.stories';
describe('PopoverFooter', () => {
  test('basic ', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
  test('with using prop close ', () => {
    renderWithTheme(React.createElement(FooterClose, null));
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
  test('with children', () => {
    renderWithTheme(React.createElement(FooterWithChildren, null));
    expect(screen.getByText('Done')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
});
//# sourceMappingURL=PopoverFooter.spec.js.map