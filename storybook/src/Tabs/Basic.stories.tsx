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

import React, { FC } from 'react'
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@looker/components'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'

export default {
  decorators: [withKnobs],
  title: 'Tabs/Basic',
}

const defaults = {
  distribute: true,
  prefixName: 'My Awesome Tab',
  tabs: 20,
}

export const Basic: FC = () => {
  const tabs = new Array(number('# of Tabs', defaults.tabs)).fill('tab')

  return (
    <Tabs>
      <TabList distribute={boolean('Distribute', defaults.distribute)}>
        {tabs.map((_k, index) => (
          <Tab key={index}>
            {text('Prefix Tab Text', defaults.prefixName)} {index}
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
