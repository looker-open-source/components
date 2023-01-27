/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { List } from '../../List'
import { ListItem } from '../../ListItem'
import { Aside, Page, Section } from '../../Layout'
import { Panel, Panels } from '..'

export default function Direction() {
  return (
    <Page hasAside>
      <Aside width="12rem">
        <Panels>
          <List>
            <Panel
              content={'content from Right...'}
              title={'Right'}
              defaultOpen={true}
              direction={'right'}
            >
              <ListItem>option A</ListItem>
            </Panel>
            <Panel
              content={'content from Left...'}
              direction={'left'}
              defaultOpen={true}
              title="Left"
            >
              <ListItem>Left</ListItem>
            </Panel>
            <ListItem>option C</ListItem>
            <ListItem>option D</ListItem>
          </List>
        </Panels>
      </Aside>
      <Section>Main stuff here...</Section>
    </Page>
  )
}
