/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { CopyToClipboard } from '../..'

export default function Success() {
  return (
    <CopyToClipboard
      content="here is some text to be copied"
      success="it was copied"
    />
  )
}
