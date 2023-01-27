/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { FieldCheckbox } from '../../FieldCheckbox'
export default function Checked() {
  return (
    <FieldCheckbox
      checked={true}
      defaultChecked={true}
      id="id"
      label="Example Field"
      name="thumbsUp"
    />
  )
}
