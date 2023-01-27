/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Link, Space } from '../..'

export default function Underline() {
  return (
    <Space around>
      <Link href="https://google.com">
        By default, underline appears on hover
      </Link>
      <Link href="https://google.com" underline>
        I always have an underline
      </Link>
      <Link href="https://google.com" underline={false}>
        I never have an underline
      </Link>
    </Space>
  )
}
