import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { ConstitutionShort } from '../../fixtures/Constitution';
import * as stories from './DialogLayout.stories';
import { DialogLayout } from './DialogLayout';
const {
  Basic,
  HeaderDetail,
  HeaderCloseButton
} = composeStories(stories);
describe('DialogLayout', () => {
  test('Basic ', () => {
    render(React.createElement(Basic, null));
    expect(screen.getByText(/We the People of the United States/)).toBeInTheDocument();
  });
  test('Replaces the built-in `IconButton` with an arbitrary ReactNode', () => {
    renderWithTheme(React.createElement(HeaderDetail, null));
    expect(screen.getByText('Header text')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
  test('HeaderCloseButton ', () => {
    renderWithTheme(React.createElement(HeaderCloseButton, null));
    expect(screen.getByText('Close')).toBeInTheDocument();
  });
  test('FooterSecondary ', () => {
    renderWithTheme(React.createElement(DialogLayout, {
      footerSecondary: "Cancel",
      footer: "Footer text"
    }, React.createElement(ConstitutionShort, null)));
    expect(screen.getByText('Footer text')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
  test('FooterSecondary without footer causes TS Exception', () => {
    renderWithTheme(React.createElement(DialogLayout, {
      footerSecondary: "problem"
    }));
  });
});
//# sourceMappingURL=DialogLayout.spec.js.map