/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Accordion } from '../..'

export default function Left() {
  return (
    <Accordion content="Hello" indicatorPosition="left">
      World
    </Accordion>
  )
}
