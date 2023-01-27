/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ButtonTransparent } from '@looker/components'
import { PopoverLayout } from '../..'

export default function Full() {
  return (
    <PopoverLayout
      footer={
        <ButtonTransparent color="neutral" size="small">
          Cancel
        </ButtonTransparent>
      }
      header="Header Text"
    >
      We the People of the United States
    </PopoverLayout>
  )
}
