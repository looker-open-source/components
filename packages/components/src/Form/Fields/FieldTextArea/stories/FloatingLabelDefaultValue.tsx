/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import React from 'react'
import type { FieldTextAreaProps } from '../'
import { FieldTextArea } from '../..'

export default function FloatingLabelDefaultValue(props: FieldTextAreaProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    detail = '0/50',
    defaultValue = 'My Name',
    ...restProps
  } = props
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldTextArea
        detail={detail}
        description={description}
        name={name}
        label={label}
        defaultValue={defaultValue}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  )
}
