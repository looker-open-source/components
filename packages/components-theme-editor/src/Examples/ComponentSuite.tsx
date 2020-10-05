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
  SpaceVertical,
  Grid,
  FieldText,
  IconButton,
  FieldSlider,
  ButtonGroup,
  ButtonItem,
  Badge,
  Heading,
  Paragraph,
  Code,
  CodeBlock,
  Space,
  ButtonToggle,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@looker/components'
import React, { useState } from 'react'

export const ComponentSuite = () => {
  const [value, setValue] = useState(['One'])

  return (
    <SpaceVertical gap="xsmall">
      <Button>My neat button</Button>
      <Button color="neutral">My neat button</Button>
      <Button color="critical">My neat button</Button>
      <ButtonOutline>My neat button</ButtonOutline>
      <ButtonOutline color="neutral">My neat button</ButtonOutline>
      <ButtonOutline color="critical">My neat button</ButtonOutline>
      <ButtonTransparent>My neat button</ButtonTransparent>
      <ButtonTransparent color="neutral">My neat button</ButtonTransparent>
      <ButtonTransparent color="critical">My neat button</ButtonTransparent>

      <ButtonGroup value={value} onChange={setValue}>
        <ButtonItem>One</ButtonItem>
        <ButtonItem>Two</ButtonItem>
      </ButtonGroup>

      <FieldText label="Hello" />
      <IconButton icon="Check" label="Check" size="large" />
      <FieldSlider label="slider" />

      <Grid columns={3}>
        <Badge intent="key">Key</Badge>
        <Badge intent="positive">Positive</Badge>
        <Badge intent="inform">Inform</Badge>
        <Badge intent="critical">Critical</Badge>
        <Badge intent="warn">Warn</Badge>
        <Badge intent="neutral">Neutral</Badge>
      </Grid>

      <Heading fontSize="xxxxlarge">XXXXLarge Heading</Heading>
      <Heading fontSize="xxxlarge">XXXLarge Heading</Heading>
      <Heading as="h1">XXLarge / h1 Heading</Heading>
      <Heading as="h2">XLarge / h2 Heading</Heading>
      <Heading as="h3">Large / h3 Heading</Heading>
      <Heading as="h4">Medium / h4 Heading</Heading>
      <Heading as="h5">h5 Heading</Heading>
      <Heading as="h6">h6 Heading</Heading>
      <Paragraph>
        "A paragraph is a self-contained unit of discourse in writing dealing
        with a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs
        are usually an expected part of formal writing, used to organize longer
        prose." - Wikipedia
      </Paragraph>
      <Code>Some code like stuff</Code>
      <CodeBlock>
        {`this: 'is not really code'
            Nor is this
            Or that.`}
      </CodeBlock>
      <Space>
        <Button>Resting</Button>
        <ButtonOutline>Resting</ButtonOutline>
        <ButtonTransparent>Resting</ButtonTransparent>
      </Space>
      <Space>
        <ButtonGroup>
          <ButtonItem>Item 1</ButtonItem>
          <ButtonItem aria-pressed="true">Item 2</ButtonItem>
        </ButtonGroup>

        <ButtonToggle>
          <ButtonItem>Item 1</ButtonItem>
          <ButtonItem aria-pressed="true">Item 2</ButtonItem>
        </ButtonToggle>
      </Space>
      <Tabs>
        <TabList>
          <Tab>Item 1</Tab>
          <Tab>Item 1</Tab>
          <Tab>Item 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Paragraph>Here's the content</Paragraph>
          </TabPanel>
          <TabPanel>
            <Paragraph>Here's the content</Paragraph>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Tabs>
        <TabList distribute>
          <Tab aria-pressed="true">Item 1</Tab>
          <Tab>Item 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Paragraph>Here's the content</Paragraph>
          </TabPanel>
          <TabPanel>
            <Paragraph>Here's the content</Paragraph>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SpaceVertical>
  )
}
