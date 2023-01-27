/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { Box2, ButtonGroup, ButtonItem } from '../../..'

export default function Focused() {
  const [value, setValue] = useState([] as string[])
  return (
    <Box2>
      <ButtonGroup value={value} onChange={setValue} margin="small">
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
    </Box2>
  )
}
