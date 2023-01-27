/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { Drawer, ButtonOutline, Space, FieldRadioGroup } from '../..'
import type { DrawerPlacements } from '../DrawerSurface'
export default function Placement() {
  const options = [
    {
      label: 'Left',
      value: 'left',
    },
    {
      detail: 'default',
      label: 'Right',
      value: 'right',
    },
  ]
  const [placement, setPlacement] = useState<DrawerPlacements>('right')

  return (
    <Space>
      <Drawer placement={placement} content="Drawer content">
        <ButtonOutline>Open Drawer</ButtonOutline>
      </Drawer>
      <FieldRadioGroup
        label="Placement"
        inputsInline
        options={options}
        value={placement}
        onChange={drawerPlacement =>
          setPlacement(drawerPlacement as DrawerPlacements)
        }
      />
    </Space>
  )
}
