/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useState } from 'react'
import { Button, usePrompt } from '../../..'

export default function UsePrompt() {
  const [tracking, setTracking] = useState('pizza')

  const [prompt, open] = usePrompt({
    clearOnCancel: true,
    defaultValue: tracking,
    inputLabel: 'Name of Cheese',
    onSave: (value: string, close: () => void) => {
      close()
      setTracking(`${value}`)
    },
    saveLabel: 'Save',
    title: 'Choose a cheese!',
  })

  return (
    <>
      <p>Value: {tracking}</p>
      {prompt}
      <Button onClick={open}>usePrompt</Button>
    </>
  )
}
