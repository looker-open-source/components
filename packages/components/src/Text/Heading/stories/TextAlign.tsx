/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Heading } from '../Heading'

export default function TextAlign() {
  return (
    <>
      <Heading textAlign="left">◀️ Align left (Default) </Heading>
      <Heading textAlign="center">◀️ Align Center ▶️</Heading>
      <Heading textAlign="right">Align Right ▶️</Heading>
    </>
  )
}
