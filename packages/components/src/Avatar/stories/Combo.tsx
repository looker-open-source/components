/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Box2, AvatarCombo } from '../..'

export default function Combo() {
  const data = {
    avatar_url:
      'https://github.com/looker-open-source/components/blob/1b708b472d974987e80c30bbbb286911a438542a/packages/components/test-assets/cheese.png?raw=true',
    first_name: 'Cheddar',
    last_name: 'Cheese',
  }
  const noImageData = { ...data, avatar_url: null }
  return (
    <Box2 display="flex" justifyContent="space-around" alignItems="center">
      <AvatarCombo
        user={data}
        secondaryIcon={<MaterialIcons.Person />}
      ></AvatarCombo>
      <AvatarCombo
        user={noImageData}
        secondaryIcon={<MaterialIcons.Person />}
      ></AvatarCombo>
    </Box2>
  )
}
