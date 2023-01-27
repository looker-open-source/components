/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Dialog, ButtonOutline } from '../..'

export default function AnimationCallbacks() {
  return (
    <Dialog
      content="Simple Content"
      onAfterClose={() => {
        alert('Close')
      }}
      onAfterOpen={() => {
        alert('Open')
      }}
    >
      <ButtonOutline>Open Dialog</ButtonOutline>
    </Dialog>
  )
}
