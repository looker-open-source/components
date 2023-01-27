/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { SpaceVertical, Paragraph, Space, Button } from '@looker/components'
import { Popover } from '..'

export default function MouseUp() {
  return (
    <SpaceVertical>
      <Paragraph>
        Test that the the 1st click outside is cancelled and that clicking the
        Popover's trigger a 2nd time closes the Popover
      </Paragraph>
      <Paragraph>
        Previously, the useCapture = true on the mouseup listener caused the
        click outside behavior to break on any page that has a React onMouseUp
        on any element.
      </Paragraph>
      <Space>
        <Popover content="Popover 1">
          <Button>Open 1st Popover</Button>
        </Popover>
        <Popover content="Popover 2">
          <Button>Open 2nd Popover</Button>
        </Popover>
        <Button
          onClick={() => alert('I should be canceled if a Popover was open')}
        >
          Click
        </Button>
        <Button onMouseUp={() => alert('A simple onMouseUp')}>onMouseUp</Button>
      </Space>
    </SpaceVertical>
  )
}
