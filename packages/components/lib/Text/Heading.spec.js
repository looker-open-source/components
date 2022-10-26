import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Heading } from './Heading';
describe('Heading', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Heading, null, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toBeInTheDocument();
    expect(screen.getByText('🥑').tagName).toEqual('H2');
  });
  test('<h1>', () => {
    renderWithTheme(React.createElement(Heading, {
      as: "h1"
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑').tagName).toEqual('H1');
    expect(screen.getByText('🥑')).toHaveStyle('font-size: 1.5rem;');
  });
  test('<h1> sized to <h2>', () => {
    renderWithTheme(React.createElement(Heading, {
      as: "h1",
      fontSize: "xlarge"
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑').tagName).toEqual('H1');
    expect(screen.getByText('🥑')).toHaveStyle('font-size: 1.375rem;');
  });
  test('bold', () => {
    renderWithTheme(React.createElement(Heading, {
      fontWeight: "bold"
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toHaveStyle('font-weight: 700');
  });
  test('transform', () => {
    renderWithTheme(React.createElement(Heading, {
      textTransform: "capitalize"
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toHaveStyle('text-transform: capitalize');
  });
  test('variant color', () => {
    renderWithTheme(React.createElement(Heading, {
      color: "text1"
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toHaveStyle('color: rgb(147, 155, 165)');
  });
  test('truncated', () => {
    renderWithTheme(React.createElement(Heading, {
      truncate: true
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toHaveStyle('text-overflow: ellipsis;');
  });
  test('multiline truncate', () => {
    renderWithTheme(React.createElement(Heading, {
      truncateLines: 2
    }, "\uD83E\uDD51"));
    expect(screen.getByText('🥑')).toHaveStyle('display: -webkit-box;');
  });
});
//# sourceMappingURL=Heading.spec.js.map