/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { Box2, ButtonGroup, ButtonItem, Paragraph } from '../../..'

export default function Basic() {
  const [value, setValue] = useState<string[]>([])
  return (
    <Box2>
      <ButtonGroup value={value} onChange={setValue}>
        <ButtonItem value="CA">California</ButtonItem>
        <ButtonItem value="AK">Alaska</ButtonItem>
        <ButtonItem value="UT">Utah</ButtonItem>
      </ButtonGroup>
      {value.length > 0 ? (
        <Paragraph pl="u3">Current selection: {value.join(', ')}</Paragraph>
      ) : (
        ''
      )}
    </Box2>
  )
}
