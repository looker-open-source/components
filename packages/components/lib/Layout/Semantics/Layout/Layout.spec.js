import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Basic, FixedWithFooterAndHeaderShadow } from './Layout.stories';
describe('Semantic Layout', () => {
  test('render Layout', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText("I'm the header")).toBeInTheDocument();
    expect(screen.getAllByText('blah')[0]).toBeInTheDocument();
    expect(screen.getByText('Page title')).toBeInTheDocument();
    expect(screen.getByText("I'm a footer")).toBeInTheDocument();
  });
  test('Footer And Header fixed', () => {
    renderWithTheme(React.createElement(FixedWithFooterAndHeaderShadow, null));
    const container = screen.getByText("I'm the header").closest('div');
    expect(container).toHaveStyle('overflow: hidden');
  });
});
//# sourceMappingURL=Layout.spec.js.map