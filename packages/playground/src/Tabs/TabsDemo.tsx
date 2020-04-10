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
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Box,
} from '@looker/components'

export const TabsDemo: FC = () => (
  <Box height={400} display="flex" flexDirection="column">
    <Tabs>
      <TabList>
        <Tab>height: 100%</Tab>
        <Tab>height: 200px</Tab>
      </TabList>
      <TabPanels flex={1}>
        <TabPanel>
          <div
            style={{
              backgroundColor: 'lightblue',
              height: '100%',
            }}
          ></div>
        </TabPanel>
        <TabPanel>
          <div
            style={{
              backgroundColor: 'coral',
              height: '200px',
              width: '100%',
            }}
          ></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
)
