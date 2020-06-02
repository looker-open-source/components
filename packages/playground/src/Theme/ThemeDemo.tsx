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
  Box,
  Grid,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  CardContent,
} from '@looker/components'
import React, { FC, useState } from 'react'
import { ThemeColorDemo } from './ThemeColorDemo'
import { ThemeEditor } from './ThemeEditor'

const demoSuite = (
  <Box width="100%">
    <Tabs>
      <TabList>
        <Tab>Colors</Tab>
        <Tab>Components</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ThemeColorDemo />
        </TabPanel>
        <TabPanel>
          <Card raised>
            <CardContent>
              <Button>My neat button</Button>
            </CardContent>
          </Card>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
)

export const ThemeDemo: FC = () => {
  // const [instances, setInstances] = useState(3)

  return (
    <Grid m="xxlarge" gap="xxlarge" columns={2}>
      <ThemeEditor>{demoSuite}</ThemeEditor>
      <ThemeEditor colors={{ key: '#6C43E0' }}>{demoSuite}</ThemeEditor>
    </Grid>
  )
}

// #6443E0

// wix - 116DFF
