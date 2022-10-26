import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Paragraph } from './Paragraph';
describe('Paragraph', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Paragraph, null, "Hello"));
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hello').tagName).toEqual('P');
  });
  test('fontSize = default', () => {
    renderWithTheme(React.createElement(Paragraph, null, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('font-size: inherit;');
  });
  test('fontSize = design token', () => {
    renderWithTheme(React.createElement(Paragraph, {
      fontSize: "xxxxlarge"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('font-size: 2.25rem;');
  });
  test('textAlign', () => {
    renderWithTheme(React.createElement(Paragraph, {
      textAlign: "right"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('text-align: right');
  });
  test('fontWeight', () => {
    renderWithTheme(React.createElement(Paragraph, {
      fontWeight: "bold"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('font-weight: 700;');
  });
  test('color', () => {
    renderWithTheme(React.createElement(Paragraph, {
      color: "critical"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('color:  rgb(204, 31, 54)');
  });
  test('textTransform', () => {
    renderWithTheme(React.createElement(Paragraph, {
      textTransform: "uppercase"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('text-transform: uppercase;');
  });
  test('breakword', () => {
    renderWithTheme(React.createElement(Paragraph, {
      breakword: true
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('overflow-wrap: break-word;');
  });
  test('textDecoration', () => {
    renderWithTheme(React.createElement(Paragraph, {
      textDecoration: "line-through"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('text-decoration: line-through;');
  });
  test('truncate', () => {
    renderWithTheme(React.createElement(Paragraph, {
      truncate: true
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('text-overflow: ellipsis;');
  });
  test('multiline truncate', () => {
    renderWithTheme(React.createElement(Paragraph, {
      truncateLines: 2
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('display: -webkit-box;');
  });
});
//# sourceMappingURL=Paragraph.spec.js.map