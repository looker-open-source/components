/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { UnorderedList } from '..'

export default function Color() {
  return (
    <UnorderedList color={'key'}>
      <li>Gouda</li>
      <li>Swiss</li>
      <li>Pepper Jack</li>
    </UnorderedList>
  )
}
