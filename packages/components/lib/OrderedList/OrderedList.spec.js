import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { OrderedList } from './OrderedList';
import 'jest-styled-components';
describe('OrderedList', () => {
  test('Should display child li elements', () => {
    renderWithTheme(React.createElement(OrderedList, null, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack")));
    screen.getByText('Gouda');
    screen.getByText('Swiss');
    screen.getByText('Pepper Jack');
  });
  test("Accepts 'number' type", () => {
    renderWithTheme(React.createElement(OrderedList, {
      type: "number"
    }, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack")));
    screen.getByText('Gouda');
    screen.getByText('Swiss');
    screen.getByText('Pepper Jack');
    expect(screen.getByRole('list')).toHaveAttribute('type', 'number');
  });
  test("Accepts 'letter' type", () => {
    renderWithTheme(React.createElement(OrderedList, {
      type: "letter"
    }, React.createElement("li", null, "Gouda"), React.createElement("li", null, "Swiss"), React.createElement("li", null, "Pepper Jack")));
    screen.getByText('Gouda');
    screen.getByText('Swiss');
    screen.getByText('Pepper Jack');
    expect(screen.getByRole('list')).toHaveAttribute('type', 'letter');
  });
});
//# sourceMappingURL=OrderedList.spec.js.map