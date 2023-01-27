/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ConstitutionShort } from './Constitution'
import { DialogExampleLayout } from './DialogExampleLayout'

export const DialogMediumContent = () => (
  <DialogExampleLayout header="The Constitution of the United States">
    <ConstitutionShort />
  </DialogExampleLayout>
)
