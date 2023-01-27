/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { PopoverFooter } from '../..'
import { ButtonTransparent } from '../../../../Button/ButtonTransparent'

export default function FooterWithChildren() {
  return (
    <PopoverFooter>
      <ButtonTransparent color="neutral" size="small">
        Cancel
      </ButtonTransparent>
    </PopoverFooter>
  )
}
