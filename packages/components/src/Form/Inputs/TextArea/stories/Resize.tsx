/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { TextArea } from '../..'

export default function Resize() {
  return (
    <>
      <TextArea resize placeholder="resize vertically" />
      <TextArea resize="none" placeholder="no resize" />
      <TextArea resize={false} placeholder="no resize" />
      <TextArea resize="vertical" placeholder="only resize vertically" />
    </>
  )
}
