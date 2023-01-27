/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React, { useState } from 'react'
import type { FormEvent, SyntheticEvent } from 'react'
import { Tooltip } from '../Tooltip'
import { Button } from '../../Button'
import { Popover, PopoverContent } from '../../Popover'
import { FieldToggleSwitch } from '../../Form'
import { Space, SpaceVertical } from '../../Layout'
import { Text } from '../../Text'

export default function NestedInPopover() {
  const [prevent, setPrevent] = useState(false)
  function handleChange(e: FormEvent<HTMLInputElement>) {
    setPrevent(e.currentTarget.checked)
  }

  const [lastEvent, setLastEvent] = useState('N/A')
  const getHandler = (text: string) => (e: SyntheticEvent) => {
    setLastEvent(text)
    if (prevent) {
      e.preventDefault()
    }
  }

  const handlers = {
    onBlur: getHandler('blur'),
    onClick: getHandler('click'),
    onFocus: getHandler('focus'),
    onMouseOut: getHandler('mouse out'),
    onMouseOver: getHandler('mouse over'),
  }

  return (
    <SpaceVertical p="u5">
      <Text>Last event: {lastEvent}</Text>
      <Space>
        <Popover content={<PopoverContent>Some content</PopoverContent>}>
          <Tooltip content="Some tooltip">
            <Button {...handlers}>Open</Button>
          </Tooltip>
        </Popover>
        <FieldToggleSwitch
          on={prevent}
          onChange={handleChange}
          label="Prevent default"
        />
      </Space>
    </SpaceVertical>
  )
}
