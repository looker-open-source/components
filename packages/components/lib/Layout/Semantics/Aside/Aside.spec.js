import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { Aside } from './Aside';
describe('Aside', () => {
  test('default', () => {
    renderWithTheme(React.createElement(Aside, null, "Aside content"));
    expect(screen.getByText('Aside content')).toBeInTheDocument();
  });
  test('Can use specific string to size its width.', () => {
    renderWithTheme(React.createElement(Aside, {
      width: "rail"
    }, "Aside content"));
    expect(screen.getByText('Aside content')).toHaveStyleRule('width: 3.5rem;');
  });
  test('Collapse prop will not render the component.', () => {
    renderWithTheme(React.createElement(Aside, {
      collapse: true
    }, "Aside content"));
    expect(screen.queryByText('Aside content')).not.toBeInTheDocument();
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
    renderWithTheme(React.createElement(Aside, null, "Aside content"));
    expect(getComputedStyle(screen.getByText('Aside content')).getPropertyValue('box-shadow')).toEqual('');
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
    renderWithTheme(React.createElement(Aside, null, "Aside content"));
    expect(getComputedStyle(screen.getByText('Aside content')).getPropertyValue('box-shadow')).toEqual('inset 0 -4px 4px -4px #DEE1E5');
  });
  test('render border properly', () => {
    renderWithTheme(React.createElement(Aside, {
      border: true
    }, "Aside content"));
    expect(screen.getByText('Aside content')).toHaveStyle('border: 1px solid #DEE1E5;');
  });
  test('render borderBottom properly', () => {
    renderWithTheme(React.createElement(Aside, {
      borderBottom: true
    }, "Aside content"));
    expect(screen.getByText('Aside content')).toHaveStyle('border-bottom: 1px solid #DEE1E5;');
  });
  test('render borderLeft properly', () => {
    renderWithTheme(React.createElement(Aside, {
      borderLeft: true
    }, "Aside content"));
    expect(screen.getByText('Aside content')).toHaveStyle('border-left: 1px solid #DEE1E5;');
  });
  test('render borderRight properly', () => {
    renderWithTheme(React.createElement(Aside, {
      borderRight: true
    }, "Aside content"));
    expect(screen.getByText('Aside content')).toHaveStyle('border-right: 1px solid #DEE1E5;');
  });
  test('render borderTop properly', () => {
    renderWithTheme(React.createElement(Aside, {
      borderTop: true
    }, "Aside content"));
    expect(screen.getByText('Aside content')).toHaveStyle('border-top: 1px solid #DEE1E5;');
  });
  test('render borderX properly', () => {
    renderWithTheme(React.createElement(Aside, {
      borderX: true
    }, "Aside content"));
    const aside = screen.getByText('Aside content');
    expect(aside).toHaveStyle('border-left: 1px solid #DEE1E5;');
    expect(aside).toHaveStyle('border-right: 1px solid #DEE1E5;');
  });
  test('render borderY properly', () => {
    renderWithTheme(React.createElement(Aside, {
      borderY: true
    }, "Aside content"));
    const aside = screen.getByText('Aside content');
    expect(aside).toHaveStyle('border-bottom: 1px solid #DEE1E5;');
    expect(aside).toHaveStyle('border-top: 1px solid #DEE1E5;');
  });
  test('render border color if passed', () => {
    renderWithTheme(React.createElement(Aside, {
      border: "key"
    }, "Aside content"));
    expect(screen.getByText('Aside content')).toHaveStyle('border: 1px solid #6C43E0;');
  });
});
//# sourceMappingURL=Aside.spec.js.map