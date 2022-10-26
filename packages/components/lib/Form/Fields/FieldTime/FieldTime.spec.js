import 'jest-styled-components';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { FieldTime } from './FieldTime';
test('FieldTime renders and displays label', () => {
  renderWithTheme(React.createElement(FieldTime, {
    defaultValue: "14:34",
    id: "FieldTimeID",
    label: "Test Label"
  }));
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});
test('FieldTime should accept detail and description attributes', () => {
  renderWithTheme(React.createElement(FieldTime, {
    defaultValue: "14:34",
    description: "this is the description",
    detail: "5/50",
    id: "FieldTimeID",
    label: "Label"
  }));
  expect(screen.getByText('5/50')).toBeInTheDocument();
  expect(screen.getAllByLabelText('Label')[0]).toHaveDescription('this is the description');
});
test('FieldTime should accept a disabled prop', () => {
  renderWithTheme(React.createElement(FieldTime, {
    defaultValue: "14:34",
    disabled: true,
    id: "FieldTimeID",
    label: "Disabled Label"
  }));
  expect(screen.getAllByLabelText('Disabled Label')[0]).toHaveAttribute('aria-disabled', 'true');
});
test('FieldTime should accept required attributes', () => {
  renderWithTheme(React.createElement(FieldTime, {
    defaultValue: "14:34",
    id: "FieldTimeID",
    label: "Required Label",
    required: true
  }));
  expect(screen.getByText('required')).toBeVisible();
});
test('FieldTime should display error message', () => {
  const errorMessage = 'This is an error';
  renderWithTheme(React.createElement(FieldTime, {
    defaultValue: "14:34",
    id: "FieldTimeID",
    label: "Validation Label",
    validationMessage: {
      message: errorMessage,
      type: 'error'
    }
  }));
  expect(screen.getByText(errorMessage)).toBeVisible();
});
//# sourceMappingURL=FieldTime.spec.js.map