/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
