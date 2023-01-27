/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { IconButton } from '../..'

export default function ToggleDynamic() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <IconButton
      label="Add"
      icon={isToggled ? <MaterialIcons.AddCircle /> : <MaterialIcons.AddBox />}
      toggle={isToggled}
      onClick={() => setIsToggled(!isToggled)}
    />
  )
}
