/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Text } from '@looker/components';
import { screen } from '@testing-library/react';
import noop from 'lodash/noop';
import React from 'react';
import { renderWithTheme } from '@looker/test-utils';
import { Section } from './Section';

describe('Section tests', () => {
  it('should render a Section', () => {
    const { container } = renderWithTheme(
      <Section
        tree={{
          id: '1',
          value: 'Section Title',
          label: <Text>Section Title</Text>,
          isOpen: true,
          detail: 'This is a detail',
        }}
        onClick={noop}
      />
    );

    expect(container).toBeVisible();
    expect(screen.getByText('Section Title')).toBeVisible();
    expect(screen.getByText('This is a detail')).toBeVisible();
  });
});
