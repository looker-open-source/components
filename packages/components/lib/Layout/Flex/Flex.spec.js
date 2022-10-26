import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Flex } from './Flex';
describe('Flex', () => {
  test('default ', () => {
    renderWithTheme(React.createElement(Flex, {
      "data-testid": "flex"
    }, React.createElement("div", null, "\uD83E\uDD51"), React.createElement("div", null, "\uD83D\uDC1B")));
    expect(screen.getByTestId('flex')).toHaveStyle('display: flex');
  });
  test('justifyContent', () => {
    renderWithTheme(React.createElement(Flex, {
      "data-testid": "flex",
      justifyContent: "center"
    }));
    expect(screen.getByTestId('flex')).toHaveStyle('justify-content: center');
  });
  test('alignItems', () => {
    renderWithTheme(React.createElement(Flex, {
      "data-testid": "flex",
      alignItems: "center"
    }));
    expect(screen.getByTestId('flex')).toHaveStyle('align-items: center');
  });
  test('alignContent', () => {
    renderWithTheme(React.createElement(Flex, {
      "data-testid": "flex",
      alignContent: "start"
    }));
    expect(screen.getByTestId('flex')).toHaveStyle('align-content: start');
  });
  test('flexDirection', () => {
    renderWithTheme(React.createElement(Flex, {
      "data-testid": "flex",
      flexDirection: "row-reverse"
    }));
    expect(screen.getByTestId('flex')).toHaveStyle('flex-direction: row-reverse');
  });
  test('flexWrap', () => {
    renderWithTheme(React.createElement(Flex, {
      "data-testid": "flex",
      flexWrap: "nowrap"
    }));
    expect(screen.getByTestId('flex')).toHaveStyle('flex-wrap: nowrap');
  });
});
//# sourceMappingURL=Flex.spec.js.map