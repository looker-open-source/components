import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { FieldRadio } from './FieldRadio';
describe('FieldRadio', () => {
  test('FieldRadio renders with label', () => {
    renderWithTheme(React.createElement(FieldRadio, {
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp"
    }));
    expect(screen.getByLabelText('FM')).toBeInTheDocument();
  });
  test('FieldRadio renders description and detail props', () => {
    renderWithTheme(React.createElement(FieldRadio, {
      description: "describe something here.",
      detail: "0/50",
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp"
    }));
    expect(screen.getByText('describe something here.')).toBeInTheDocument();
    expect(screen.getByText('0/50')).toBeInTheDocument();
  });
  test('FieldRadio renders disabled', () => {
    renderWithTheme(React.createElement(FieldRadio, {
      disabled: true,
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp"
    }));
    const RadioInput = screen.getByRole('radio');
    expect(RadioInput).toBeDisabled();
  });
  test('FieldRadio renders with error message', () => {
    const errorMessage = 'This is an error';
    renderWithTheme(React.createElement(FieldRadio, {
      id: "FieldRadioID",
      label: "FM",
      name: "thumbsUp",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });
});
//# sourceMappingURL=FieldRadio.spec.js.map