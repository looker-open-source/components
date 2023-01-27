/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box2, AvatarIcon, AvatarUser } from '../..'

export default function Color() {
  const data = {
    avatar_url: 'https://www.fillmurray.com/150/150',
    first_name: 'Bill',
    last_name: 'Murray',
  }
  return (
    <Box2 display="flex" justifyContent="space-around" alignItems="center">
      <AvatarUser user={data} />
      <AvatarIcon />
      <AvatarUser color="inform" user={data} />
      <AvatarIcon color="inform" />
      <AvatarUser color="positive" user={data} />
      <AvatarIcon color="positive" />
      <AvatarIcon color="inverseOn" bg="positive" />
    </Box2>
  )
}
