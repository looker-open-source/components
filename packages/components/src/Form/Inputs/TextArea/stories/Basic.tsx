/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TextArea } from '../..'
import type { TextAreaProps } from '../TextArea'

export default function Basic(props: TextAreaProps) {
  return <TextArea {...props} placeholder="Placholder text" />
}
