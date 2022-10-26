import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Space } from './Space';
const content = React.createElement(React.Fragment, null, React.createElement("div", null, "one"), React.createElement("div", null, "two"), React.createElement("div", null, "three"), React.createElement("div", null, "four"));
describe('Space', () => {
  test('reversed', () => {
    renderWithTheme(React.createElement(Space, {
      reverse: true,
      "data-testid": "space"
    }, content));
    expect(screen.getByTestId('space')).toHaveStyleRule('flex-direction', 'row-reverse');
  });
  test('around + gap (all you get is around)', () => {
    renderWithTheme(React.createElement(Space, {
      around: true,
      gap: "u10",
      "data-testid": "space"
    }, content));
    expect(screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-around');
  });
  test('around', () => {
    renderWithTheme(React.createElement(Space, {
      around: true,
      "data-testid": "space"
    }, content));
    expect(screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-around');
  });
  test('between', () => {
    renderWithTheme(React.createElement(Space, {
      between: true,
      "data-testid": "space"
    }, content));
    expect(screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-between');
  });
  test('evenly', () => {
    renderWithTheme(React.createElement(Space, {
      evenly: true,
      "data-testid": "space"
    }, content));
    expect(screen.getByTestId('space')).toHaveStyleRule('justify-content', 'space-evenly');
  });
  test('align="stretch" overrides justify', () => {
    renderWithTheme(React.createElement(Space, {
      justify: "end",
      align: "stretch",
      "data-testid": "space"
    }, content));
    expect(screen.getByTestId('space')).toHaveStyleRule('align-items', 'stretch');
    expect(screen.getByTestId('space')).not.toHaveStyleRule('justify-content', 'flex-end');
  });
});
//# sourceMappingURL=Space.spec.js.map