/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { List } from '../../List'
import { ListItem } from '../../ListItem'
import { Aside, Page, Section } from '../../Layout'
import { Panel, Panels } from '..'
import { Button } from '../../Button'
import { Paragraph } from '../../Text'

export default function Nested() {
  return (
    <Page hasAside>
      <Aside width="12rem">
        <Button>Before</Button>
        <Panels>
          <List>
            <Panel
              title="Panel Title"
              content={
                <Panel content="Nested Panel content" title="Nested">
                  <Button>Open nested panel</Button>
                </Panel>
              }
            >
              <ListItem>option A</ListItem>
            </Panel>
            <ListItem>option B</ListItem>
            <ListItem>option C</ListItem>
            <ListItem>option D</ListItem>
          </List>
        </Panels>
      </Aside>
      <Section>
        <Paragraph>Main stuff here...</Paragraph>
        <Button>After</Button>
      </Section>
    </Page>
  )
}
