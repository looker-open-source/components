/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { VisuallyHidden } from '../VisuallyHidden'

export default function Basic() {
  return <VisuallyHidden>You won't see me, but I'm in the DOM</VisuallyHidden>
}
