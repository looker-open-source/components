/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import { Button, ButtonToggle, Popover } from '../../..'

export default function Options() {
  const [toggle, setToggle] = useState('Gouda')
  return (
    <Popover
      content={
        <ButtonToggle
          margin="large"
          value={toggle}
          onChange={setToggle}
          options={[
            { label: 'Smoked Gouda', value: 'Gouda' },
            { value: 'Cheddar' },
            { value: 'Swiss' },
          ]}
        />
      }
    >
      <Button>Open Popover</Button>
    </Popover>
  )
}
