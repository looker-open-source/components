/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { DensityRamp } from '@looker/design-tokens'
import * as MaterialIcons from '@styled-icons/material'
import { List } from '../'
import { ListItem, ButtonItem, ButtonToggle } from '../../'

export default function Density() {
  const [currentDensity, setCurrentDensity] = useState<DensityRamp>(0)

  return (
    <>
      <ButtonToggle
        value={String(currentDensity)}
        onChange={(draftValue: string) =>
          setCurrentDensity(parseInt(draftValue) as DensityRamp)
        }
      >
        <ButtonItem>-3</ButtonItem>
        <ButtonItem>-2</ButtonItem>
        <ButtonItem>-1</ButtonItem>
        <ButtonItem>0</ButtonItem>
        <ButtonItem>1</ButtonItem>
      </ButtonToggle>

      <List density={currentDensity}>
        <ListItem icon={<MaterialIcons.DateRange />}>Item 1</ListItem>
        <ListItem icon={<MaterialIcons.DateRange />}>Item 2</ListItem>
        <ListItem icon={<MaterialIcons.DateRange />}>Item 3</ListItem>
      </List>
    </>
  )
}
