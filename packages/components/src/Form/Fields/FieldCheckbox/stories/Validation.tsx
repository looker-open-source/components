/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldCheckbox } from '../../FieldCheckbox'
export default function Validation() {
  return (
    <FieldCheckbox
      id="id"
      label="Validation error"
      name="thumbsUp"
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )
}
