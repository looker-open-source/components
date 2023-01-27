/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { Box2, AvatarIcon, AvatarUser } from '../..'

export default function Size() {
  const data = {
    avatar_url: 'https://www.fillmurray.com/150/150',
    first_name: 'Bill',
    last_name: 'Murray',
  }
  return (
    <Box2 display="flex" justifyContent="space-around" alignItems="center">
      <AvatarIcon size="xxsmall" />
      <AvatarIcon size="xsmall" />
      <AvatarIcon />
      <AvatarIcon size="medium" />
      <AvatarIcon size="large" />
      <AvatarUser user={data} size="xxsmall" />
      <AvatarUser user={data} size="xsmall" />
      <AvatarUser user={data} />
      <AvatarUser user={data} size="medium" />
      <AvatarUser user={data} size="large" />
    </Box2>
  )
}
