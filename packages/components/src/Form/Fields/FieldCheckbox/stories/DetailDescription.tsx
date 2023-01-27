/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldCheckbox } from '../../FieldCheckbox'
import type { FieldCheckboxProps } from '../../FieldCheckbox'
export default function DetailDescription(props: FieldCheckboxProps) {
  return (
    <FieldCheckbox
      description="describe something here."
      detail="4/20"
      id="id"
      label="Example Field"
      name="thumbsUp"
      {...props}
    />
  )
}
