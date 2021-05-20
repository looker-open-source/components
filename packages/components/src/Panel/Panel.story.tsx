/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React from 'react'
import styled from 'styled-components'
import { Story } from '@storybook/react/types-6-0'
import { Done } from '@styled-icons/material/Done'
import { Button } from '../Button'
import { List, ListItem } from '../List'
import { Aside, Box, Layout, Page, Section } from '../Layout'
import { TreeCollection, Tree, TreeItem } from '../Tree'
import { Panel, Panels, PanelProps, usePanel } from './'

export default {
  component: Panel,
  title: 'Panel',
}

const Template: Story<PanelProps> = (args) => (
  <Page hasAside>
    <Aside width="12rem">
      <Panels>
        <List>
          <Panel {...args}>
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

export const Basic = Template.bind({})
Basic.args = {
  content: 'Panel Content',
  title: 'Panel Title',
}
Basic.parameters = {
  storyshots: { disable: true },
}

export const Open = Template.bind({})
Open.args = {
  ...Basic.args,
  defaultOpen: true,
}

export const IconToggle = Template.bind({})
IconToggle.args = {
  ...Open.args,
  iconToggle: true,
}

export const DirectionRight = Template.bind({})
DirectionRight.args = {
  ...Basic.args,
  defaultOpen: true,
  direction: 'right',
}

export const Hook = () => {
  const { panel, setOpen } = usePanel({
    content: 'Panel content',
    title: 'Panel Hook',
  })

  return (
    <>
      <List>
        <ListItem onClick={() => setOpen(true)} icon={<Done />}>
          Option A
        </ListItem>
        <ListItem icon={<Done />}>Option B</ListItem>
      </List>
      {panel}
    </>
  )
}
Hook.parameters = {
  storyshots: { disable: true },
}

const AsideBG = styled(Aside)`
  background: ${({ theme: { colors } }) => colors.ui1};
`

export const WithTree = () => (
  <Page hasAside>
    <AsideBG width="navigation">Left sidebar</AsideBG>
    <Layout hasAside>
      <Section>
        <Panels>
          <Panel
            title="Some content"
            content={<Box bg="key">Am I covered by the tree?</Box>}
          >
            <Button>Open Panel</Button>
          </Panel>
          <TreeCollection>
            <Tree label="Orders" defaultOpen>
              <TreeItem>ID</TreeItem>
              <TreeItem>Status</TreeItem>
              <Tree label="Created" defaultOpen>
                <TreeItem>Created Date</TreeItem>
                <TreeItem>Created Month</TreeItem>
                <TreeItem>Created Year</TreeItem>
                <TreeItem>Created Quarter</TreeItem>
              </Tree>
            </Tree>
          </TreeCollection>
        </Panels>
      </Section>
      <AsideBG width="sidebar">Right sidebar</AsideBG>
    </Layout>
  </Page>
)

WithTree.parameters = {
  storyshots: { disable: true },
}
