/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { PopoverLayout } from '../..'

export default function Header() {
  return (
    <PopoverLayout footer={false} header="Header Text">
      We the People of the United States
    </PopoverLayout>
  )
}
