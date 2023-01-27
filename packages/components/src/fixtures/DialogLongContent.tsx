/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { DialogExampleLayout } from './DialogExampleLayout'
import { Constitution } from './Constitution'

export const DialogLongContent = () => (
  <DialogExampleLayout header="The Constitution of the United States">
    <Constitution />
  </DialogExampleLayout>
)
