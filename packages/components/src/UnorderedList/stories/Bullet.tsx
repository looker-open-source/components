/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { UnorderedList } from '..'

export default function Bullet() {
  return (
    <UnorderedList type={'bullet'}>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </UnorderedList>
  )
}
