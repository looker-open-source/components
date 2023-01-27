/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { FontFamilies } from '@looker/design-tokens'
import * as MaterialIcons from '@styled-icons/material'
import { ButtonItem, ButtonToggle, ListItem } from '../../'
import { List } from '../'

export default function FontFamily() {
  const [family, setFamily] = useState<FontFamilies>('code')

  return (
    <>
      <ButtonToggle
        value={family}
        onChange={val => setFamily(val as FontFamilies)}
      >
        <ButtonItem>body</ButtonItem>
        <ButtonItem>brand</ButtonItem>
        <ButtonItem>code</ButtonItem>
      </ButtonToggle>
      <List fontFamily={family}>
        <ListItem
          icon={<MaterialIcons.SportsSoccer />}
          description="Orange-y"
          detail="England"
        >
          Cheddar
        </ListItem>
        <ListItem icon={<MaterialIcons.DirectionsBoat />} detail="Netherlands">
          Gouda
        </ListItem>
        <ListItem icon={<MaterialIcons.LocalPizza />} detail="Italy">
          Mozzarella
        </ListItem>
        <ListItem icon={<MaterialIcons.BubbleChart />} detail="Switzerland">
          Swiss
        </ListItem>
      </List>
    </>
  )
}
