/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { SpaceVertical } from '../../Layout'
import { Panel, Panels } from '..'
import { Drawer } from '../../Drawer'
import { Paragraph } from '../../Text'
import { Button } from '../../Button'

export default function WithDrawer() {
  return (
    <Drawer
      placement="left"
      content={
        <Panels>
          <SpaceVertical>
            <Panel
              defaultOpen
              direction="right"
              title="Some title"
              content="Tree should be hidden"
            >
              <Button>Open Panel</Button>
            </Panel>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
            <Paragraph>Some text</Paragraph>
          </SpaceVertical>
        </Panels>
      }
    >
      <Button>Open Drawer</Button>
    </Drawer>
  )
}
