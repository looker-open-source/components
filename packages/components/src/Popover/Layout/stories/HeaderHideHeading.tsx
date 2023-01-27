/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { PopoverLayout } from '../..'

export default function HeaderHideHeading() {
  return (
    <PopoverLayout header="Header text" hideHeader>
      We the People of the United States
    </PopoverLayout>
  )
}
