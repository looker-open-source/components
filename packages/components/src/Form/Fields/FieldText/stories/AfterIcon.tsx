/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import * as MaterialIcons from '@styled-icons/material'
import React from 'react'
import type { FieldTextProps } from '../..'
import { FieldText } from '../..'

export default function AfterIcon(props: FieldTextProps) {
  const {
    name = 'firstName',
    label = 'First Name',
    iconAfter = <MaterialIcons.Settings />,
    ...restProps
  } = props

  return (
    <FieldText name={name} label={label} iconAfter={iconAfter} {...restProps} />
  )
}
