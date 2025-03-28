/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen, within, act } from '@testing-library/react';
import { MAX_ROWS } from './utils/constants';
import { ProgressDuet } from './';

// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers();
});

// Running all pending timers and switching to real timers using Jest
afterEach(async () => {
  await act(async () => jest.runOnlyPendingTimers());
  jest.useRealTimers();
});

test('it renders invisible placeholder on initial render', async () => {
  renderWithTheme(<ProgressDuet />);
  const placeholderContainer = screen.getByTestId('animation-placeholder');

  const placeholderRows =
    within(placeholderContainer).getAllByTestId('progress-duet-row');

  expect(placeholderRows.length).toEqual(MAX_ROWS);
});

test('it increments row count and renders an additional row on every timer', async () => {
  renderWithTheme(<ProgressDuet />);

  const visibleAnimation = screen.getByTestId('visible-animation');

  let animatedRows;

  for (let i = 1; i <= MAX_ROWS; i++) {
    animatedRows = within(visibleAnimation).getAllByTestId('progress-duet-row');
    /* every time the timer runs, the visible animated rows increase in number */
    expect(animatedRows.length).toEqual(i);
    await act(async () => jest.runOnlyPendingTimers());
  }

  /* after one additional timer the visible rows reset, and the whole process starts over */
  await act(async () => jest.runOnlyPendingTimers());
  animatedRows = within(visibleAnimation).getAllByTestId('progress-duet-row');
  expect(animatedRows.length).toEqual(1);
});
