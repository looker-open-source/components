import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import * as stories from './PopoverLayout.stories';
const {
  Basic,
  FooterCloseButton,
  Full,
  Header,
  HeaderHideHeading
} = composeStories(stories);
describe('PopoverLayout', () => {
  test('basic display has footer ', () => {
    renderWithTheme(React.createElement(Basic, null));
    expect(screen.getByText(/We the People of the United States/)).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
  test('hideHeading prop hides Header', () => {
    renderWithTheme(React.createElement(HeaderHideHeading, null));
    const hiddenHeader = screen.getByText('Header text');
    expect(hiddenHeader).toBeInTheDocument();
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)');
  });
  test('Header and no Footer ', () => {
    renderWithTheme(React.createElement(Header, null));
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.queryByText('Done')).not.toBeInTheDocument();
  });
  test('Footer with CloseButton', () => {
    renderWithTheme(React.createElement(FooterCloseButton, null));
    expect(screen.getByText('Close')).toBeInTheDocument();
    expect(screen.queryByText('Done')).not.toBeInTheDocument();
  });
  test('With header & footer display only "Done" button', () => {
    renderWithTheme(React.createElement(Full, null));
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
  test('FooterExtraValue ', () => {
    renderWithTheme(React.createElement(Full, null));
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Done')).toBeInTheDocument();
  });
});
//# sourceMappingURL=PopoverLayout.spec.js.map