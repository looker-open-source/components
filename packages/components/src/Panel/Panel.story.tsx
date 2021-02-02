/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { List, ListItem } from '../List'
import { Aside, Page, Section } from '../Layout'
import { Icon } from '../Icon'
import { Panel, Panels, usePanel } from './'

export default {
  component: Panel,
  title: 'Panel',
}

export const Basic = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)

  const title = (
    <>
      <Icon name="ArrowLeft" m="xsmall" />
      Left
    </>
  )

  return (
    <Page hasAside>
      <Aside width="12rem">
        <Panels>
          <List>
            <ListItem onClick={toggleOpen} icon="ArrowForward">
              Left
            </ListItem>
            <Panel
              content={'content from Right...'}
              direction="right"
              title="Right"
            >
              <ListItem icon="ArrowBackward">Right</ListItem>
            </Panel>
            <Panel content={'content from Up...'} direction="up" title="Up">
              <ListItem icon="ArrowDownward">Up</ListItem>
            </Panel>
            <Panel
              content={'content from Down...'}
              direction="down"
              title="Down"
            >
              <ListItem icon="ArrowUpward">Down</ListItem>
            </Panel>
          </List>

          <Panel
            content={
              <List>
                <ListItem icon="ArrowRight">Panel option 1</ListItem>
                <ListItem icon="ArrowRight">Panel option 2</ListItem>
                <ListItem icon="ArrowRight">Panel option 3</ListItem>
              </List>
            }
            direction="left"
            isOpen={open}
            setOpen={setOpen}
            title={title}
          />
        </Panels>
      </Aside>
      <Section>Main stuff here...</Section>
    </Page>
  )
}
Basic.parameters = {
  storyshots: { disable: true },
}

export const Hook = () => {
  const { panel, setOpen } = usePanel({
    content: 'Panel content',
    title: 'Panel Hook',
  })

  return (
    <>
      <List>
        <ListItem onClick={() => setOpen(true)} icon="Check">
          Option A
        </ListItem>
        <ListItem icon="Check">Option B</ListItem>
      </List>
      {panel}
    </>
  )
}
Hook.parameters = {
  storyshots: { disable: true },
}
