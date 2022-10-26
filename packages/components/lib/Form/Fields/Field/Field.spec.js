import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Field } from './Field';
describe('Field', () => {
  test('Hidden labels', () => {
    renderWithTheme(React.createElement(Field, {
      id: "test",
      hideLabel: true,
      label: "hello!"
    }, React.createElement("input", {
      id: "test",
      type: "text"
    })));
    screen.getByText('hello!');
  });
});
//# sourceMappingURL=Field.spec.js.map