import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
import { InlineTextArea } from './InlineTextArea';
describe('InlineTextArea', () => {
  test('renders and displays placeholder', () => {
    renderWithTheme(React.createElement(InlineTextArea, {
      placeholder: "this is the placeholder"
    }));
    const placeholder = screen.getByTestId('inline-text-area');
    expect(placeholder).toHaveTextContent('this is the placeholder');
  });
  test('renders and displays value', () => {
    renderWithTheme(React.createElement(InlineTextArea, {
      value: "this is the value"
    }));
    const value = screen.getByDisplayValue('this is the value');
    expect(value).toHaveTextContent('this is the value');
  });
});
//# sourceMappingURL=InlineTextArea.spec.js.map