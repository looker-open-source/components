/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { ExtendComponentsThemeProvider } from '@looker/components-providers';
import type { FieldTimeSelectProps } from '..';
import { FieldTimeSelect } from '..';

export default function ValidationMessageFloatingLabel(
  props: FieldTimeSelectProps
) {
  const {
    description = 'this is the description is a very long one',
    detail = 'detail',
    interval = 10,
    label = 'Select Time',
    required = true,
    validationMessage = { message: 'validation Message', type: 'error' },
    ...restProps
  } = props;

  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTimeSelect
        description={description}
        detail={detail}
        interval={interval}
        label={label}
        required={required}
        validationMessage={validationMessage}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  );
}
