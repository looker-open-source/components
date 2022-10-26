import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { Label } from './Label';
describe('Label', () => {
  test('Basic', () => {
    renderWithTheme(React.createElement(Label, null, "Some text"));
    expect(screen.getByText('Some text')).toBeInTheDocument();
  });
  test('Supports typography', () => {
    renderWithTheme(React.createElement(Label, {
      fontWeight: "normal"
    }, "Some text"));
    expect(screen.getByText('Some text')).toHaveStyleRule('font-weight', '400');
  });
  test('Associates with input', () => {
    renderWithTheme(React.createElement(React.Fragment, null, React.createElement(Label, {
      htmlFor: "test"
    }, "Some text"), React.createElement("input", {
      id: "test"
    })));
    expect(screen.getByLabelText('Some text')).toBeInTheDocument();
  });
});
//# sourceMappingURL=Label.spec.js.map