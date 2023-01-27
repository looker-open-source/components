/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { ChipButton } from '../..'

export default function Deletable() {
  return <ChipButton onDelete={() => alert('Deletable')}>Deletable</ChipButton>
}
