/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Prompt, Button } from '../../..'

export default function Basic() {
  return (
    <Prompt
      cancelColor="neutral"
      cancelLabel={'Not into cheese'}
      title={'Choose a cheese!'}
      inputLabel={'Name of Cheese'}
      saveLabel={'Save'}
      onCancel={close => {
        alert('Prompt closed')
        close()
      }}
      onSave={(value: string, close: () => void) => {
        alert(`You chose ${value}`)
        close()
      }}
      secondary={
        <Button onClick={() => alert('Secondary clicked')}>
          Secondary Cheese
        </Button>
      }
    >
      {open => <Button onClick={open}>Prompt</Button>}
    </Prompt>
  )
}
