import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Breakpoint } from './Breakpoint';
describe('Breakpoint', () => {
  let widthSpy;
  let heightSpy;
  beforeEach(() => {
    widthSpy = jest.spyOn(document.body, 'clientWidth', 'get').mockImplementation(() => 800);
    heightSpy = jest.spyOn(document.body, 'clientHeight', 'get').mockImplementation(() => 600);
  });
  afterEach(() => {
    widthSpy.mockRestore();
    heightSpy.mockRestore();
  });
  test('all', () => {
    renderWithTheme(React.createElement(Breakpoint, {
      show: ['mobile', 'xl']
    }, React.createElement("p", null, "This is a thing")));
    const element = screen.queryByText('This is a thing');
    expect(element).toBeInTheDocument();
  });
  test('mobile', () => {
    renderWithTheme(React.createElement(Breakpoint, {
      show: "mobile"
    }, React.createElement("p", null, "This is a thing")));
    const element = screen.queryByText('This is a thing');
    expect(element).not.toBeInTheDocument();
  });
  test('tablet up', () => {
    renderWithTheme(React.createElement(Breakpoint, {
      show: ['tablet', undefined]
    }, React.createElement("p", null, "This is a thing")));
    const element = screen.queryByText('This is a thing');
    expect(element).toBeInTheDocument();
  });
  test('up to tablet', () => {
    renderWithTheme(React.createElement(Breakpoint, {
      show: [undefined, 'tablet']
    }, React.createElement("p", null, "This is a thing")));
    const element = screen.queryByText('This is a thing');
    expect(element).not.toBeInTheDocument();
  });
});
//# sourceMappingURL=Breakpoint.spec.js.map