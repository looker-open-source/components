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

import {
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from '@looker/components'
import React, { FC } from 'react'
import { Swatches } from './Swatches.stories'
import { Suite } from './Suite.stories'
import { Editor } from './Editor.stories'

const demoSuite = (
  <Card width="100%">
    <CardContent>
      <Tabs>
        <TabList>
          <Tab>Colors</Tab>
          <Tab>Components</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Swatches />
          </TabPanel>
          <TabPanel>
            <Card raised>
              <CardContent>
                <Suite />
              </CardContent>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CardContent>
  </Card>
)

export const Compare: FC = () => (
  <Grid m="xlarge" gap="large" columns={4}>
    <Editor name="Default">{demoSuite}</Editor>
    <Editor name="Generated" keyColor="#6C43E0">
      {demoSuite}
    </Editor>
    <Editor name="Customer Blue" keyColor="#116DFF">
      {demoSuite}
    </Editor>
    <Editor
      name="THUNDER Salmon"
      keyColor="#ff3ca0"
      backgroundColor="#000000"
      textColor="#FFFFFF"
    >
      {demoSuite}
    </Editor>
  </Grid>
)
