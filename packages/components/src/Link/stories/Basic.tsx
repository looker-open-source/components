/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Link, Space } from '../..'

export default function Basic() {
  return (
    <Space around>
      <Link href="https://google.com">👋 I am a link!</Link>
      <Link href="https://google.com" id="thumbs-up">
        👍 I am a link with an id
      </Link>
    </Space>
  )
}
