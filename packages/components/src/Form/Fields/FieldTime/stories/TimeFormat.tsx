/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTimeProps } from '..'
import { FieldTime } from '..'

export default function TimeFormat(props: FieldTimeProps) {
  const {
    defaultValue = '14:34',
    description = 'set "format" prop to either `12h` or `24h`',
    detail = 'detail',
    label = 'Label',
    format = '24h',
    ...restProps
  } = props

  return (
    <FieldTime
      format={format}
      label={label}
      defaultValue={defaultValue}
      description={description}
      detail={detail}
      {...restProps}
    />
  )
}
