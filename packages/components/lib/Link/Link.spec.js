import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { theme } from '@looker/design-tokens';
import { screen } from '@testing-library/react';
import { Link } from './Link';
describe('Link', () => {
  test('UnderlineTrue', () => {
    renderWithTheme(React.createElement(Link, {
      underline: true
    }, "My link"));
    const link = screen.getByText('My link');
    expect(link).toHaveStyleRule('text-decoration: underline');
  });
  test('UnderlineFalse', () => {
    renderWithTheme(React.createElement(Link, {
      underline: false
    }, "My link"));
    const link = screen.getByText('My link');
    expect(link).toHaveStyleRule('text-decoration: none');
  });
  test('color', () => {
    renderWithTheme(React.createElement(Link, null, "My link"));
    const link = screen.getByText('My link');
    expect(link).toHaveStyleRule(`color: ${theme.colors.link}`);
  });
  test('keyColor', () => {
    renderWithTheme(React.createElement(Link, {
      keyColor: true
    }, "My link"));
    const link = screen.getByText('My link');
    expect(link).toHaveStyleRule(`color: ${theme.colors.key}`);
  });
  test('ID passes through to DOM', () => {
    renderWithTheme(React.createElement(Link, {
      href: "https://looker.com",
      id: "link-id"
    }, "\uD83E\uDD51"));
    const link = screen.getByText('🥑');
    expect(link).toHaveAttribute('id');
    expect(link).toHaveAttribute('id', 'link-id');
  });
  test('target="_blank"', () => {
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement(Link, {
      href: "https://looker.com",
      rel: "pizza"
    }, "\uD83C\uDF55"), React.createElement(Link, {
      href: "https://looker.com",
      target: "_blank"
    }, "\uD83E\uDD51"), React.createElement(Link, {
      href: "https://looker.com",
      target: "_blank",
      rel: "pizza"
    }, "\uD83C\uDF55\uD83E\uDD51")));
    expect(screen.getByText('🍕')).toHaveAttribute('rel', 'pizza');
    expect(screen.getByText('🥑')).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByText('🍕🥑')).toHaveAttribute('rel', 'pizza noopener noreferrer');
  });
  test('dangerouslyDisableRel', () => {
    renderWithTheme(React.createElement(Link, {
      href: "/otherPage",
      dangerouslyDisableRel: true,
      target: "_blank"
    }, "Local Link"));
    const link = screen.getByText('Local Link');
    expect(link).not.toHaveAttribute('rel');
  });
  test('External', () => {
    renderWithTheme(React.createElement(Link, {
      href: "https://looker.com",
      isExternal: true
    }, "External Link"));
    const link = screen.getByText('External Link');
    expect(link).toHaveAttribute('rel', 'external noreferrer');
  });
});
//# sourceMappingURL=Link.spec.js.map