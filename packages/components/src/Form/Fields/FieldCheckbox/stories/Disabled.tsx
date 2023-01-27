/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldCheckbox } from '../../FieldCheckbox'
export default function Disabled() {
  return (
    <FieldCheckbox disabled={true} id="id" label="disabled" name="thumbsUp" />
  )
}
