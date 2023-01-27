/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function Detail(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    detail = 'Your preferred salutation',
    ...restProps
  } = props

  return <FieldText name={name} label={label} detail={detail} {...restProps} />
}
