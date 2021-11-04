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

import React, { useCallback, useRef, useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { Done } from '@styled-icons/material'
import { Button } from '../Button'
import { FieldText } from '../Form'
import { Drawer } from '../Drawer'
import { List } from '../List'
import { ListItem } from '../ListItem'
import { Aside, Box2, Layout, Page, Section, SpaceVertical } from '../Layout'
import { Paragraph } from '../Text'
import { TreeCollection, Tree, TreeItem } from '../Tree'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { PanelProps } from './'
import { Panel, Panels, usePanel } from './'

export default {
  argTypes,
  component: Panel,
  title: 'Panel',
}

const Template: Story<PanelProps> = args => (
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

export const CloseLabel = Template.bind({})
CloseLabel.args = {
  ...Basic.args,
  closeLabel: 'Back to the last thing',
}
CloseLabel.parameters = {
  storyshots: { disable: true },
}

export const Nested = () => (
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

Nested.parameters = {
  storyshots: { disable: true },
}

const HookInner = () => {
  const { panel, setOpen } = usePanel({
    content: 'Panel content',
    title: 'Panel Hook',
  })
  return (
    <>
      <ListItem onClick={() => setOpen(true)} icon={<Done />}>
        Option A
      </ListItem>
      {panel}
    </>
  )
}

export const Hook = () => {
  return (
    <Panels>
      <List>
        <HookInner />
        <ListItem icon={<Done />}>Option B</ListItem>
      </List>
    </Panels>
  )
}
Hook.parameters = {
  storyshots: { disable: true },
}

export const CenterPlacement = () => (
  <Page hasAside height="100vh">
    <Aside width="navigation">Left sidebar</Aside>
    <Layout hasAside>
      <Section>
        <Panels>
          <Panel
            title="Some title"
            content={
              <SpaceVertical>
                <Panel
                  title="Another title"
                  direction="right"
                  content={
                    <SpaceVertical>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                      <Paragraph>Some other text</Paragraph>
                    </SpaceVertical>
                  }
                >
                  <Button>Open Another Panel</Button>
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
            }
          >
            <Button>Open Panel</Button>
          </Panel>
          <Paragraph>Content to be covered by the panel</Paragraph>
        </Panels>
      </Section>
      <Aside width="sidebar">Right sidebar</Aside>
    </Layout>
  </Page>
)

CenterPlacement.parameters = {
  storyshots: { disable: true },
}

export const WithTree = () => (
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

export const WithDrawer = () => (
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

WithDrawer.parameters = {
  storyshots: { disable: true },
}

export const AnimationCallbacks = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = useCallback(() => {
    inputRef.current?.focus()
  }, [])
  const [message, setMessage] = useState('')
  const showMessage = () => {
    setMessage('Panel closed')
  }
  return (
    <Page hasAside>
      <Aside width="20rem">
        <Panels>
          <Box2 p="medium" height={300}>
            <Panel
              title="Animation Callbacks"
              onAfterOpen={focusInput}
              onAfterClose={showMessage}
              content={
                <Box2 px="medium">
                  <FieldText label="Focus onAfterOpen" ref={inputRef} />
                </Box2>
              }
            >
              <Button>Open Panel</Button>
            </Panel>
          </Box2>
        </Panels>
      </Aside>
      <Section>
        <Paragraph>Main stuff here...</Paragraph>
        <Paragraph>{message}</Paragraph>
      </Section>
    </Page>
  )
}

AnimationCallbacks.parameters = {
  storyshots: { disable: true },
}
