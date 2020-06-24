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
import {
  SpaceVertical,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from '@looker/components'

export const All = () => (
  <SpaceVertical>
    <Basic />
    <SecondaryTabs />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Tabs',
}

export const Basic: FC = () => (
  <Tabs>
    <TabList>
      <Tab>Light Blue</Tab>
      <Tab>Coral</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'lightblue',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'coral',
            height: '200px',
          }}
        />
      </TabPanel>
    </TabPanels>
  </Tabs>
)

export const SecondaryTabs: FC = () => (
  <Tabs>
    <TabList>
      <Tab>Rebecca Purple</Tab>
      <Tab>Coral</Tab>
      <Tab>Forest Green</Tab>
      <Tab>Cornflower Blue</Tab>
      <Tab>Light Blue</Tab>
      <Tab>Dark Orange</Tab>
      <Tab>Deep Pink</Tab>
      <Tab>Gold</Tab>
      <Tab>Gainsboro</Tab>
      <Tab>Yellow Green</Tab>
      <Tab>Dark Magenta</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'RebeccaPurple',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'coral',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'ForestGreen',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'CornflowerBlue',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'lightblue',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'DarkOrange',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'DeepPink',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'Gold',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'Gainsboro',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'YellowGreen',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: 'DarkMagenta',
            height: '350px',
          }}
        />
      </TabPanel>
    </TabPanels>
  </Tabs>
)
