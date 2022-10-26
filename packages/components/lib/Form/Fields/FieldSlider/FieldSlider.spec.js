import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { FieldSlider } from './FieldSlider';
test('FieldSlider should accept detail and description attributes', () => {
  renderWithTheme(React.createElement(FieldSlider, {
    detail: "5/50",
    description: "this is the description",
    label: "Label",
    name: "FieldSlider",
    id: "field-slider"
  }));
  expect(screen.getByText('5/50')).toBeInTheDocument();
  expect(screen.getByLabelText('Label')).toHaveDescription('this is the description');
});
test('FieldSlider should accept a disabled prop', () => {
  renderWithTheme(React.createElement(FieldSlider, {
    disabled: true,
    id: "test",
    label: "Test Label",
    name: "test"
  }));
  const input = screen.getByLabelText('Test Label');
  expect(input).toBeDisabled();
});
test('FieldSlider should accept required attributes', () => {
  renderWithTheme(React.createElement(FieldSlider, {
    label: "Label",
    name: "fieldSlider",
    id: "field-slider",
    required: true
  }));
  expect(screen.getByText('required')).toBeVisible();
});
//# sourceMappingURL=FieldSlider.spec.js.map