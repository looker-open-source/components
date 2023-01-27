/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { IconButton } from '../..'

export default function ToggleBackground() {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <IconButton
      label="Add"
      icon={isToggled ? <MaterialIcons.AddCircle /> : <MaterialIcons.AddBox />}
      toggle={isToggled}
      toggleBackground={isToggled}
      onClick={() => setIsToggled(!isToggled)}
    />
  )
}
