import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { i18nInit } from '../utils';
import * as stories from './FilterToken.stories';
const {
  Basic,
  Expression,
  Error,
  Inline
} = composeStories(stories);
describe('FilterToken', () => {
  i18nInit();
  it('shows the filter summary', () => {
    renderWithTheme(React.createElement(Expression, null));
    const token = screen.getByRole('button');
    expect(token).toHaveTextContent('is foo or bar');
  });
  it('opens a popover with filter UI', () => {
    renderWithTheme(React.createElement(Basic, null));
    const token = screen.getByRole('button', {
      name: 'is any time'
    });
    fireEvent.click(token);
    expect(screen.getByRole('dialog')).toBeVisible();
    expect(screen.getByDisplayValue('is any time')).toBeVisible();
    fireEvent.click(document);
  });
  it('shows error validation', () => {
    renderWithTheme(React.createElement(Error, null));
    const token = screen.getByRole('button', {
      name: 'Value required'
    });
    fireEvent.click(token);
    expect(screen.getByDisplayValue('is any time')).toBeInvalid();
    expect(screen.getByText('Selection required')).toBeVisible();
    fireEvent.click(document);
  });
  it('renders filter UI inline', () => {
    renderWithTheme(React.createElement(Inline, null));
    expect(screen.getByDisplayValue('is any time')).toBeVisible();
  });
});
//# sourceMappingURL=FilterToken.spec.js.map