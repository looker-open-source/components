/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Button, Card, CardContent, Space, Paragraph } from '@looker/components'
import React from 'react'
import { Popover, PopoverLayout } from '..'

export default function Hover() {
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const content = <PopoverLayout>I'm in the popover</PopoverLayout>
  return (
    <Card ref={hoverRef} raised>
      <CardContent>
        <Space between>
          <Paragraph>
            Hovering in this card will show the button that triggers the
            popover.
          </Paragraph>
          <Popover content={content} hoverDisclosureRef={hoverRef}>
            <Button />
          </Popover>
        </Space>
      </CardContent>
    </Card>
  )
}
