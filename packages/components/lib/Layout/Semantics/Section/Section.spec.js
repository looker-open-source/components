import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Section } from './Section';
describe('Section', () => {
  test('render', () => {
    renderWithTheme(React.createElement(Section, null, "Section content"));
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });
  test('renders as main if pass as a prop.', () => {
    renderWithTheme(React.createElement(Section, {
      main: true
    }, "Section content"));
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  test('does not have a box shadow if content does not overflow', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 0
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 500
    });
    renderWithTheme(React.createElement(Section, null, "Section content"));
    expect(getComputedStyle(screen.getByText('Section content')).getPropertyValue('box-shadow')).toEqual('');
  });
  test('has a box shadow when content overflows', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 500
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 0
    });
    renderWithTheme(React.createElement(Section, null, "Section content"));
    expect(getComputedStyle(screen.getByText('Section content')).getPropertyValue('box-shadow')).toEqual('inset 0 -4px 4px -4px #DEE1E5');
  });
});
//# sourceMappingURL=Section.spec.js.map