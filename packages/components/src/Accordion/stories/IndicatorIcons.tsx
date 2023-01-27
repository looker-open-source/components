/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import * as MaterialIcons from '@styled-icons/material'
import { Accordion } from '../..'

export default function IndicatorIcons() {
  return (
    <Accordion
      content="Hello"
      indicatorIcons={{
        close: <MaterialIcons.ChevronLeft />,
        open: <MaterialIcons.ExpandMore />,
      }}
    >
      World
    </Accordion>
  )
}
