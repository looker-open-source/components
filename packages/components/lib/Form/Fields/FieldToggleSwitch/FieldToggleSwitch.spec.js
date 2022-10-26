import 'jest-styled-components';
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import { FieldToggleSwitch } from './FieldToggleSwitch';
import * as stories from './FieldToggleSwitch.stories';
const {
  Tabstops
} = composeStories(stories);
describe('FieldToggleSwitch', () => {
  test('error has proper aria setup', () => {
    const errorMessage = 'This is an error';
    const {
      container
    } = renderWithTheme(React.createElement(FieldToggleSwitch, {
      id: "test",
      defaultValue: "example",
      validationMessage: {
        message: errorMessage,
        type: 'error'
      }
    }));
    const input = screen.getByDisplayValue('example');
    const id = input.getAttribute('aria-describedby');
    expect(id).toBeDefined();
    expect(id).toEqual('describedby-test');
    expect(container).toHaveTextContent(errorMessage);
  });
  test('disabled', () => {
    renderWithTheme(React.createElement(FieldToggleSwitch, {
      disabled: true,
      id: "FieldToggleSwitchID",
      label: "Toggle Switch"
    }));
    expect(screen.getByLabelText('Toggle Switch')).toBeDisabled();
  });
  test('required', () => {
    renderWithTheme(React.createElement(FieldToggleSwitch, {
      id: "FieldToggleSwitchID",
      label: "Toggle Switch",
      required: true
    }));
    expect(screen.getByTestId('requiredStar')).toBeVisible();
  });
  test('tabStops', () => {
    renderWithTheme(React.createElement(Tabstops, null));
    const input = screen.getByRole('switch');
    const detail = screen.getByRole('button');
    const link = screen.getByText('Link');
    userEvent.tab();
    expect(input).toHaveFocus();
    userEvent.tab();
    expect(detail).toHaveFocus();
    userEvent.tab();
    expect(link).toHaveFocus();
  });
});
//# sourceMappingURL=FieldToggleSwitch.spec.js.map