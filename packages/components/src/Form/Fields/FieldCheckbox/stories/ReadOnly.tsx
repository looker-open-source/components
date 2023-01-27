/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { FieldCheckbox } from '../../FieldCheckbox'
export default function ReadOnly() {
  return (
    <FieldCheckbox id="id" label="read only" name="thumbsUp" readOnly={true} />
  )
}
