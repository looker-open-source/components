/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Drawer, ButtonOutline } from '../..'

export default function AnimationCallbacks() {
  return (
    <Drawer
      content="My neat drawer"
      onAfterClose={() => alert(`Close`)}
      onAfterOpen={() => alert(`Open`)}
    >
      <ButtonOutline>Open Drawer</ButtonOutline>
    </Drawer>
  )
}
