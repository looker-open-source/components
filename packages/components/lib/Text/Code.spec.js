import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Code } from './Code';
describe('Code', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Code, null, "Hello"));
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hello').tagName).toEqual('CODE');
  });
  test('fontSize', () => {
    renderWithTheme(React.createElement(Code, {
      fontSize: "xxxxlarge"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('font-size: 2.25rem;');
  });
  test('textAlign', () => {
    renderWithTheme(React.createElement(Code, {
      textAlign: "right"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('text-align: right');
  });
  test('fontWeight', () => {
    renderWithTheme(React.createElement(Code, {
      fontWeight: "bold"
    }, "Hello"));
    expect(screen.getByText('Hello')).toHaveStyle('font-weight: 700;');
  });
});
//# sourceMappingURL=Code.spec.js.map