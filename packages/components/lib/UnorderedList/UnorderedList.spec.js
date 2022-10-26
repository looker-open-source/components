import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { UnorderedList } from './UnorderedList';
import 'jest-styled-components';
describe('UnorderedList', () => {
  test('Should display child li elements', () => {
    renderWithTheme(React.createElement(UnorderedList, null, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack")));
    screen.getByText('Gouda');
    screen.getByText('Swiss');
    screen.getByText('Pepper Jack');
  });
  test("Accepts 'bullet' type", () => {
    renderWithTheme(React.createElement(UnorderedList, {
      type: "bullet"
    }, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack")));
    screen.getByText('Gouda');
    screen.getByText('Swiss');
    screen.getByText('Pepper Jack');
    expect(screen.getByRole('list')).toHaveAttribute('type', 'bullet');
  });
});
//# sourceMappingURL=UnorderedList.spec.js.map