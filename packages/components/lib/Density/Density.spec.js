import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import * as stories from './Density.stories';
const {
  Basic,
  Plus1,
  Minus3
} = composeStories(stories);
describe('Density', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.875rem');
  });
  test('+1', () => {
    renderWithTheme(React.createElement(Plus1, null));
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 1rem');
  });
  test('-3', () => {
    renderWithTheme(React.createElement(Minus3, null));
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.75rem');
  });
});
//# sourceMappingURL=Density.spec.js.map