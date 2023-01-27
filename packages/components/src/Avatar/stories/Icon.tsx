/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Box2, AvatarIcon } from '../..'

export default function Icon() {
  return (
    <Box2 display="flex" justifyContent="space-around" alignItems="center">
      <AvatarIcon />
      <AvatarIcon icon={<MaterialIcons.Code />} />
    </Box2>
  )
}
