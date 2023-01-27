/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { PopoverHeader } from '../..'

export default function Detail() {
  return (
    <PopoverHeader detail={<button>close</button>}>Header Text</PopoverHeader>
  )
}
