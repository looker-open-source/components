/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { ButtonToggle, ButtonItem } from '../../..'

export default function Focused() {
  const [toggle, setToggle] = useState('')
  return (
    <ButtonToggle value={toggle} onChange={setToggle} margin="small">
      <ButtonItem>Ruby</ButtonItem>
      <ButtonItem>TypeScript</ButtonItem>
      <ButtonItem>Python</ButtonItem>
    </ButtonToggle>
  )
}
