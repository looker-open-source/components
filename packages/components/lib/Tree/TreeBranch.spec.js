import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { TreeBranch } from '.';
test('Renders children', () => {
  renderWithTheme(React.createElement(TreeBranch, null, "My Children"));
  screen.getByText('My Children');
});
//# sourceMappingURL=TreeBranch.spec.js.map