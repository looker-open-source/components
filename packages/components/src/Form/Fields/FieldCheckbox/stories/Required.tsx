/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldCheckbox } from '../../FieldCheckbox'
export default function Required() {
  return (
    <FieldCheckbox id="id" label="disabled" name="thumbsUp" required={true} />
  )
}
