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
  Button,
  ButtonOutline,
  ButtonTransparent,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  SpaceVertical,
  FieldText,
  IconButton,
  FieldSlider,
  ButtonGroup,
  ButtonItem,
} from '@looker/components'
import React, { FC } from 'react'
import { ThemeColorDemo } from './ThemeColorDemo'
import { ThemeEditor } from './ThemeEditor'

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
            <ThemeColorDemo />
          </TabPanel>
          <TabPanel>
            <Card raised>
              <CardContent>
                <SpaceVertical gap="xsmall">
                  <Button>My neat button</Button>
                  <Button color="neutral">My neat button</Button>
                  <Button color="critical">My neat button</Button>
                  <ButtonOutline>My neat button</ButtonOutline>
                  <ButtonOutline color="neutral">My neat button</ButtonOutline>
                  <ButtonOutline color="critical">My neat button</ButtonOutline>
                  <ButtonTransparent>My neat button</ButtonTransparent>
                  <ButtonTransparent color="neutral">
                    My neat button
                  </ButtonTransparent>
                  <ButtonTransparent color="critical">
                    My neat button
                  </ButtonTransparent>

                  <ButtonGroup>
                    <ButtonItem>One</ButtonItem>
                    <ButtonItem>Two</ButtonItem>
                  </ButtonGroup>

                  <FieldText label="Hello" />
                  <IconButton icon="Check" label="Check" size="large" />
                  <FieldSlider label="slider" />
                </SpaceVertical>
              </CardContent>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CardContent>
  </Card>
)

export const ThemeDemo: FC = () => (
  <Grid m="xlarge" gap="large" columns={4}>
    <ThemeEditor name="Default">{demoSuite}</ThemeEditor>
    <ThemeEditor name="Generated" keyColor="#6C43E0">
      {demoSuite}
    </ThemeEditor>
    <ThemeEditor name="Customer Blue" keyColor="#116DFF">
      {demoSuite}
    </ThemeEditor>
    <ThemeEditor
      name="THUNDER Salmon"
      keyColor="#ff3ca0"
      backgroundColor="#000000"
      textColor="#FFFFFF"
    >
      {demoSuite}
    </ThemeEditor>
  </Grid>
)
