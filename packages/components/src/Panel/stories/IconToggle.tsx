/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { List } from '../../List'
import { ListItem } from '../../ListItem'
import { Aside, Page, Section } from '../../Layout'
import { Panel, Panels } from '..'

export default function Open() {
  return (
    <Page hasAside>
      <Aside width="12rem">
        <Panels>
          <List>
            <Panel
              content={'Panel Content'}
              title={'Panel Title'}
              defaultOpen={true}
              iconToggle={true}
            >
              <ListItem>option A</ListItem>
            </Panel>
            <ListItem>option B</ListItem>
            <ListItem>option C</ListItem>
            <ListItem>option D</ListItem>
          </List>
        </Panels>
      </Aside>
      <Section>Main stuff here...</Section>
    </Page>
  )
}
