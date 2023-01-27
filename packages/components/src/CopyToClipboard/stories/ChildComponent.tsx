/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { CopyToClipboard, Button } from '../..'

export default function ChildComponent() {
  return (
    <CopyToClipboard
      content="here is some text to be copied"
      success={<Button>Success</Button>}
    >
      <Button>Copy stuff</Button>
    </CopyToClipboard>
  )
}
