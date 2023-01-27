/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { ButtonTransparent } from '@looker/components'
import { PopoverLayout } from '../..'

export default function FooterCloseButton() {
  return (
    <PopoverLayout
      closeButton={
        <ButtonTransparent color="neutral" size="small">
          Close
        </ButtonTransparent>
      }
      header="Header Text"
    >
      We the People of the United States
    </PopoverLayout>
  )
}
