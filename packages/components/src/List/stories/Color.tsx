/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import * as MaterialIcons from '@styled-icons/material'
import type { ListColor } from '../'
import { List } from '../'
import { ListItem, ButtonItem, ButtonToggle } from '../../'

export default function Color() {
  const [colorVal, setColorVal] = useState<ListColor>('calculation')
  return (
    <>
      <ButtonToggle
        value={colorVal}
        onChange={(draftValue: string) => setColorVal(draftValue as ListColor)}
      >
        <ButtonItem>calculation</ButtonItem>
        <ButtonItem>dimension</ButtonItem>
        <ButtonItem>key</ButtonItem>
        <ButtonItem>measure</ButtonItem>
      </ButtonToggle>
      <List color={colorVal}>
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
