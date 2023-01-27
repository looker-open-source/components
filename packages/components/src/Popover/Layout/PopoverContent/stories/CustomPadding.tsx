/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { PopoverContent } from '../..'
import { ConstitutionShort } from '../../../../fixtures/Constitution'

export default function CustomPadding() {
  return (
    <PopoverContent pb={'u3'} pt={'u8'} px={'u3'}>
      <ConstitutionShort />
    </PopoverContent>
  )
}
