import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { FieldDate } from './FieldDate';
const realDateNow = Date.now.bind(global.Date);
beforeEach(() => {
  global.Date.now = jest.fn(() => 1580567580000);
});
afterEach(() => {
  global.Date.now = realDateNow;
  jest.clearAllMocks();
});
test('FieldDate renders and displays label', () => {
  renderWithTheme(React.createElement(FieldDate, {
    defaultValue: new Date(Date.now()),
    id: "FieldDateID",
    label: "Test Label"
  }));
  expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
});
test('FieldDate should accept detail and description attributes', () => {
  renderWithTheme(React.createElement(FieldDate, {
    defaultValue: new Date(Date.now()),
    description: "this is the description",
    detail: "5/50",
    id: "FieldDateID",
    label: "Label"
  }));
  expect(screen.getByText('5/50')).toBeInTheDocument();
  expect(screen.getByLabelText('Label')).toHaveDescription('this is the description');
});
test('FieldDate should accept a disabled prop', () => {
  renderWithTheme(React.createElement(FieldDate, {
    defaultValue: new Date(Date.now()),
    disabled: true,
    id: "FieldDateID",
    label: "Disabled Label"
  }));
  const input = screen.getByLabelText('Disabled Label');
  expect(input).toBeDisabled();
});
test('FieldDate should accept required attributes', () => {
  renderWithTheme(React.createElement(FieldDate, {
    defaultValue: new Date(Date.now()),
    id: "FieldDateID",
    label: "Required Label",
    required: true
  }));
  expect(screen.getByText('required')).toBeVisible();
});
test('FieldDate should display error message', () => {
  const errorMessage = 'This is an error';
  renderWithTheme(React.createElement(FieldDate, {
    defaultValue: new Date(Date.now()),
    id: "FieldDateID",
    label: "Validation Label",
    validationMessage: {
      message: errorMessage,
      type: 'error'
    }
  }));
  expect(screen.getByText('This is an error')).toBeVisible();
});
//# sourceMappingURL=FeildDate.spec.js.map