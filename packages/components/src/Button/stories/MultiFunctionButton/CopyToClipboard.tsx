/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { MultiFunctionButton, Button, ButtonTransparent } from '../..'

export default function CopyToClipboard() {
  const [change, setChange] = useState(false)

  const handleSwap = () => {
    setChange(true)
    setTimeout(() => setChange(false), 2500)
  }

  const alternateCopyButton = (
    <ButtonTransparent
      iconBefore={<MaterialIcons.Check />}
      size="large"
      width={300} // arbitrary size to prevent image snapshot "jitter"
    >
      Copied!
    </ButtonTransparent>
  )

  return (
    <MultiFunctionButton alternate={alternateCopyButton} swap={change}>
      <Button onClick={handleSwap}>Copy to Clipboard</Button>
    </MultiFunctionButton>
  )
}
