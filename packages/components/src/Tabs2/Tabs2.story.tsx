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

import React, { useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { Box2 } from '../Layout'
import type { Tabs2Props } from './'
import { Tab2, Tabs2 } from './'

export default {
  component: Tabs2,
  title: 'Tabs2',
}

const Template: Story<Tabs2Props> = (args) => (
  <Box2 height="8rem">
    <Tabs2 {...args}>
      <Tab2 id="cats" label="Cats">
        Here's awesome story about cats
      </Tab2>
      <Tab2 id="dogs" label="Dogs">
        Cats are way better than dogs. Go to other tab
      </Tab2>
      <Tab2 label="Fish">Are kinda smelly</Tab2>
    </Tabs2>
  </Box2>
)

export const Basic = Template.bind({})

export const Distributed = Template.bind({})
Distributed.args = { distributed: true }

export const DefaultTab = Template.bind({})
DefaultTab.args = { defaultTabId: 'dogs' }

export const Controlled = () => {
  const [currentTabId, setTabId] = useState('cats')
  return (
    <>
      <p>The current selected tab is: {currentTabId}</p>
      <button onClick={() => setTabId('cats')}>Switch to Cats</button>
      <button onClick={() => setTabId('dogs')}>Switch to Dogs</button>
      <Tabs2 tabId={currentTabId} onTabChange={setTabId}>
        <Tab2 id="cats" label="Cats">
          Here's awesome story about cats
        </Tab2>
        <Tab2 id="dogs" label="Dogs">
          Cats are way better than dogs. Go to other tab
        </Tab2>
      </Tabs2>
    </>
  )
}
Controlled.parameters = {
  storyshots: { disable: true },
}

export const Scrolling = () => {
  const tabs = new Array(20).fill('Tab2')
  return (
    <Tabs2 distributed>
      {tabs.map((value, index) => (
        <Tab2 label={`Hello World ${index}`} key={index}>
          This is {value} {index}
        </Tab2>
      ))}
    </Tabs2>
  )
}

Scrolling.parameters = {
  storyshots: { disable: true },
}

export const Disabled = () => {
  return (
    <Box2 height="8rem">
      <Tabs2>
        <Tab2 id="cats" label="Cats">
          Here's awesome story about cats
        </Tab2>
        <Tab2 id="dogs" label="Dogs">
          Cats are way better than dogs. Go to other tab
        </Tab2>
        <Tab2 label="Fish">Are kinda smelly</Tab2>
        <Tab2 disabled id="human" label="Human">
          Humans tab is disabled
        </Tab2>
      </Tabs2>
    </Box2>
  )
}
