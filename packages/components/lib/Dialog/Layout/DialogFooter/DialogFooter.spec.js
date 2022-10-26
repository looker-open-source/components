import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Basic, Secondary } from './DialogFooter.stories';
describe('DialogFooter', () => {
  test('basic ', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText('Footer Text')).toBeInTheDocument();
  });
  test('secondary', () => {
    renderWithTheme(React.createElement(Secondary, null));
    expect(screen.getByText('Done')).toBeInTheDocument();
    expect(screen.getByText('Footer Text')).toBeInTheDocument();
  });
});
//# sourceMappingURL=DialogFooter.spec.js.map