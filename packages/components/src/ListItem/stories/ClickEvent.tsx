/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { ListItem } from '..'

export default function ClickEvent() {
  return (
    <ListItem
      icon={<MaterialIcons.DateRange />}
      description="An Island"
      detail="England"
      onClick={() => alert('Get that Cheddar')}
    >
      Cheddar
    </ListItem>
  )
}
