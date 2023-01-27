/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { Aside, Page, Section } from '../../Layout'
import { Panel, Panels } from '..'
import { Button } from '../../Button'
import { TreeCollection, Tree, TreeItem } from '../../Tree'

export default function WithTree() {
  return (
    <Page hasAside>
      <Aside width="navigation">
        <Panels>
          <Panel title="Some title" content="Tree should be hidden">
            <Button>Open Panel</Button>
          </Panel>
          <TreeCollection>
            <Tree label={<strong>Orders</strong>} defaultOpen>
              <TreeItem>ID</TreeItem>
              <TreeItem>Status</TreeItem>
              <Tree label={<strong>Created</strong>} defaultOpen>
                <TreeItem>Created Date</TreeItem>
                <TreeItem>Created Month</TreeItem>
                <TreeItem>Created Year</TreeItem>
                <TreeItem>Created Quarter</TreeItem>
              </Tree>
            </Tree>
          </TreeCollection>
        </Panels>
      </Aside>
      <Section>Main content</Section>
    </Page>
  )
}
