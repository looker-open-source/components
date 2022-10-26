import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { FieldRangeSlider } from './FieldRangeSlider';
describe('FieldRangeSlider', () => {
  test('should accept detail and description attributes', () => {
    renderWithTheme(React.createElement(FieldRangeSlider, {
      detail: "5/50",
      description: "this is the description",
      label: "\uD83D\uDC4D",
      id: "thumbs-up"
    }));
    expect(screen.getByText('5/50')).toBeInTheDocument();
    expect(screen.getByLabelText('👍')).toHaveDescription('this is the description');
  });
  test('should accept a disabled prop', () => {
    renderWithTheme(React.createElement(FieldRangeSlider, {
      disabled: true,
      id: "test",
      label: "Test Label"
    }));
    expect(screen.getAllByRole('slider')[0]).toHaveAttribute('aria-disabled', 'true');
  });
  test('should accept required attributes', () => {
    renderWithTheme(React.createElement(FieldRangeSlider, {
      label: "\uD83D\uDC4D",
      id: "thumbs-up",
      required: true
    }));
    expect(screen.getByText('required')).toBeVisible();
  });
});
//# sourceMappingURL=FieldRangeSlider.spec.js.map