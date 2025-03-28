/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { i18nInit } from '../utils';
import { FilterToken } from '.';

const Basic = () => (
  <FilterToken
    name="string"
    type="string"
    expressionType="date"
    expression=""
    allowMultipleValues
  />
);

const Expression = () => (
  <FilterToken
    name="string"
    type="string"
    expressionType="string"
    expression="foo,bar"
    allowMultipleValues
  />
);

const Error = () => (
  <FilterToken
    name="string"
    type="string"
    expressionType="date"
    expression=""
    allowMultipleValues
    isRequired
  />
);

const Inline = () => (
  <FilterToken
    name="string"
    type="string"
    expressionType="date"
    expression=""
    config={{ display: 'inline' }}
  />
);

describe('FilterToken', () => {
  i18nInit();
  it('shows the filter summary', () => {
    renderWithTheme(<Expression />);
    const token = screen.getByRole('button');
    expect(token).toHaveTextContent('is foo or bar');
  });

  it('opens a popover with filter UI', () => {
    renderWithTheme(<Basic />);
    const token = screen.getByRole('button', { name: 'is any time' });
    fireEvent.click(token);
    // the popover
    expect(screen.getByRole('dialog')).toBeVisible();
    // the filter dropdown
    expect(screen.getByDisplayValue('is any time')).toBeVisible();

    fireEvent.click(document);
  });

  it('shows error validation', () => {
    renderWithTheme(<Error />);
    const token = screen.getByRole('button', { name: 'Value required' });
    fireEvent.click(token);
    expect(screen.getByDisplayValue('is any time')).toBeInvalid();
    expect(screen.getByText('Selection required')).toBeVisible();

    fireEvent.click(document);
  });

  it('renders filter UI inline', () => {
    renderWithTheme(<Inline />);
    expect(screen.getByDisplayValue('is any time')).toBeVisible();
  });
});
