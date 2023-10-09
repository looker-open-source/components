/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Text } from '@looker/components';
import {
  fireEvent,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '@looker/test-utils';
import { Field } from './Field';

describe('Field tests', () => {
  it('renders a field with label', async () => {
    const { container } = renderWithTheme(
      <Field
        tree={{
          value: 'Test Field',
          label: <Text>Test Field</Text>,
          payload: {},
        }}
      />
    );
    expect(container).toBeVisible();
    expect(await screen.findByText('Test Field')).toBeVisible();
  });

  it('should behave disabled', async () => {
    renderWithTheme(
      <Field
        tree={{
          value: 'Test Field',
          label: <Text>Test Field</Text>,
          payload: { obj: 'hi' },
          disabled: 'disabled',
        }}
      />
    );

    const field = screen.getByText('Test Field');

    fireEvent.click(field);
    fireEvent.mouseOver(field);

    const disabledText = screen.getByText('disabled');
    expect(disabledText.innerHTML).toBe('disabled');

    // Close tooltip to silence act() warning
    fireEvent.mouseOut(field);
    await waitForElementToBeRemoved(() => screen.queryByText('disabled'));
  });
});
