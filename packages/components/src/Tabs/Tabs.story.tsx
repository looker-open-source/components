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

import { Page } from 'puppeteer'
import React, { useState, FC } from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Button } from '../Button'
import { Space } from '../Layout/Space'
import { defaultArgTypes as argTypes } from '../../../../storybook/src/defaultArgTypes'
import { Tab, Tabs, TabList, TabListProps, TabPanel, TabPanels } from './'

interface DemoProps extends TabListProps {
  tabCount: number
  tabPrefix: string
}

const Template: Story<DemoProps> = ({ tabCount, tabPrefix, ...args }) => {
  const tabs = new Array(tabCount).fill('tab')

  return (
    <Tabs>
      <TabList {...args}>
        {tabs.map((_k, index) => (
          <Tab key={index}>
            {tabPrefix} {index}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((_k, index) => (
          <TabPanel key={index}>This is {index}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  tabCount: 3,
  tabPrefix: 'My Awesome Tab',
}

export const Distributed = Template.bind({})
Distributed.args = {
  distribute: true,
  tabCount: 3,
  tabPrefix: 'My Awesome Tab',
}

export const Scrolling = Template.bind({})
Scrolling.args = {
  distribute: true,
  tabCount: 20,
  tabPrefix: 'My Awesome Tab',
}

export const Focused = Template.bind({})
Focused.args = {
  ...Basic.args,
}

Focused.parameters = {
  beforeScreenshot: async (page: Page) => {
    const tabs = await page.$('[role="tablist"]')
    await tabs?.type(' ')
    await page.waitForTimeout(50)
  },
  docs: { disable: true },
}

export const Controlled: FC = () => {
  const [currentTabIndex, setTab] = useState(0)

  return (
    <>
      <Space>
        <Button onClick={() => setTab(0)}>Go to A</Button>
        <Button onClick={() => setTab(1)}>Go to B</Button>
      </Space>
      <Tabs index={currentTabIndex} onChange={setTab}>
        <TabList>
          <Tab>A</Tab>
          <Tab>B</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>A</TabPanel>
          <TabPanel>B</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default {
  argTypes,
  component: Tabs,
  title: 'Tabs',
}
