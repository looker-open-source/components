/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Space } from '../../../../'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function AutoResize(props: FieldTextProps) {
  const {
    autoResize = true,
    name = 'firstName',
    label = 'First Name',
    placeholder = 'Start typing and watch me scale to fit content',
    inline: _inline,
    ...restProps
  } = props

  return (
    <Space>
      <FieldText
        autoResize={autoResize}
        name={name}
        label={label}
        placeholder={placeholder}
        {...restProps}
      />
      <FieldText
        autoResize={autoResize}
        name={name}
        label={label}
        placeholder={placeholder}
        inline={true}
        {...restProps}
      />
    </Space>
  )
}
