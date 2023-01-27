/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { InlineInputText } from '../InlineInputText'

export default function OverflowHiddenInlineInputText() {
  return (
    <div
      style={{
        border: '1px solid',
        overflow: 'hidden',
        width: '100px',
      }}
    >
      <InlineInputText value="Long example value that should require scrolling to reach" />
    </div>
  )
}
