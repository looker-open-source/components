/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ValidationMessage } from '../'
import type { ValidationMessageProps } from '../'

export default function Basic(props: ValidationMessageProps) {
  const { message = 'Error', type = 'error', ...restProps } = props
  return <ValidationMessage message={message} type={type} {...restProps} />
}
