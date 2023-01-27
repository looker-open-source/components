/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ExtendComponentsThemeProvider } from '@looker/components-providers'
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function FloatingLabelDefaultValue(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    description = 'Some important information about this field',
    detail = '0/50',
    defaultValue = 'My Name',
    iconBefore = <MaterialIcons.VerifiedUser />,
    validationMessage = { message: 'Error Message', type: 'error' },
    ...restProps
  } = props
  return (
    <ExtendComponentsThemeProvider
      themeCustomizations={{ defaults: { externalLabel: false } }}
    >
      <FieldText
        detail={detail}
        description={description}
        name={name}
        label={label}
        defaultValue={defaultValue}
        iconBefore={iconBefore}
        validationMessage={validationMessage}
        {...restProps}
      />
    </ExtendComponentsThemeProvider>
  )
}
