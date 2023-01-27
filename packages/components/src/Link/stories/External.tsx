/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Link } from '../..'

export default function External() {
  return (
    <Link href="https://google.com" isExternal>
      Leaving this domain
    </Link>
  )
}
