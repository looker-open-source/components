/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Dialog, ButtonOutline } from '../..'

export default function Open() {
  return (
    <Dialog defaultOpen={true} content="Simple Content">
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  )
}
