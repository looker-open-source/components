/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { ButtonToggle, ButtonItem } from '../../..'

export default function Basic() {
  const [toggle, setToggle] = useState('Ruby')
  return (
    <ButtonToggle value={toggle} onChange={setToggle}>
      <ButtonItem>Ruby</ButtonItem>
      <ButtonItem>TypeScript</ButtonItem>
      <ButtonItem>Python</ButtonItem>
    </ButtonToggle>
  )
}
