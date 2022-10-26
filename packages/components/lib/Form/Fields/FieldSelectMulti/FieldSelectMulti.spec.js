import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { FieldSelectMulti } from './FieldSelectMulti';
const fieldSelectMultiOptions = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}];
describe('FieldSelectMulti', () => {
  test('should accept detail and description attributes', () => {
    renderWithTheme(React.createElement(FieldSelectMulti, {
      detail: "5/50",
      description: "this is the description",
      label: "\uD83D\uDC4D",
      name: "thumbsUp",
      id: "thumbs-up",
      options: fieldSelectMultiOptions
    }));
    expect(screen.getByText('5/50')).toBeInTheDocument();
    expect(screen.getByLabelText('👍')).toHaveDescription('this is the description');
  });
  test('should accept a disabled prop', () => {
    renderWithTheme(React.createElement(FieldSelectMulti, {
      disabled: true,
      id: "test",
      label: "Test Label",
      name: "test",
      options: fieldSelectMultiOptions
    }));
    const input = screen.getByLabelText('Test Label');
    expect(input).toBeDisabled();
  });
  test('should accept required attributes', () => {
    renderWithTheme(React.createElement(FieldSelectMulti, {
      label: "\uD83D\uDC4D",
      name: "thumbsUp",
      id: "thumbs-up",
      options: fieldSelectMultiOptions,
      required: true
    }));
    expect(screen.getByText('required')).toBeVisible();
  });
  test('should display error message', () => {
    const errorMessage = 'This is an error';
    renderWithTheme(React.createElement(FieldSelectMulti, {
      id: "testFieldSelectMulti",
      label: "Label",
      name: "test",
      options: fieldSelectMultiOptions,
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    expect(screen.getByText('This is an error')).toBeVisible();
  });
  test('Should trigger onChange handler', () => {
    const handleChange = jest.fn();
    renderWithTheme(React.createElement(FieldSelectMulti, {
      label: "\uD83D\uDC4D",
      name: "thumbsUp",
      id: "thumbs-up",
      onChange: handleChange,
      options: fieldSelectMultiOptions
    }));
    const input = screen.getByLabelText('👍');
    fireEvent.click(input);
    const apples = screen.getByText('Apples');
    fireEvent.click(apples);
    expect(handleChange).toHaveBeenCalledTimes(1);
    fireEvent.click(document);
  });
});
//# sourceMappingURL=FieldSelectMulti.spec.js.map