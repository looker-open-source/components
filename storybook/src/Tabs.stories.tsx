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
    <DistributeTabs />
  </SpaceVertical>
)

export default {
  component: All,
  title: 'Tabs',
}

export const Basic: FC = () => (
  <Tabs>
    <TabList>
      <Tab>Alice Blue</Tab>
      <Tab>Aqua</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#F0F8FF',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#00FFFF',
            height: '200px',
          }}
        />
      </TabPanel>
    </TabPanels>
  </Tabs>
)

export const DistributeTabs: FC = () => (
  <Tabs>
    <TabList distribute>
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
            backgroundColor: '#663399',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#FF7F50',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#228B22',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#6495ED',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#ADD8E6',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#FF8C00',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#FF1493',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#FFD700',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#DCDCDC',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#9ACD32',
            height: '350px',
          }}
        />
      </TabPanel>
      <TabPanel>
        <div
          style={{
            backgroundColor: '#8B008B',
            height: '350px',
          }}
        />
      </TabPanel>
    </TabPanels>
  </Tabs>
)
