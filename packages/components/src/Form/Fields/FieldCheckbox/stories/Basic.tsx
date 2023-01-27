/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldCheckbox } from '../../FieldCheckbox'
import type { FieldCheckboxProps } from '../../FieldCheckbox'
export default function Basic(props: FieldCheckboxProps) {
  return (
    <FieldCheckbox id="id" label="Example Field" name="thumbsUp" {...props} />
  )
}
