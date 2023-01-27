/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { MenuItem } from '../../..'

export default function Link() {
  return (
    <MenuItem itemRole="link" href="https://google.com" target="_blank">
      MenuItem that links to Google
    </MenuItem>
  )
}
