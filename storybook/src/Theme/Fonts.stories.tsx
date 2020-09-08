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

import React, { useState } from 'react'
import {
  Button,
  ButtonOutline,
  ButtonTransparent,
  Code,
  Heading,
  Paragraph,
  SpaceVertical,
  Space,
  ButtonGroup,
  ButtonItem,
  ButtonToggle,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  FieldSelect,
  ComponentsProvider,
  Fieldset,
  CodeBlock,
} from '@looker/components'
import { defaultFonts } from '@looker/design-tokens'

const fontOptions = [
  'Red Hat Display',
  'Roboto',
  'Roboto Mono',
  'Google Sans',
  'Papyrus',
  'Impact',
  'Comic Sans MS',
]

const options = fontOptions.map((font) => {
  return { option: font, value: font }
})

export const FontDemo = () => {
  const [body, setBody] = useState<string | undefined>()
  const [brand, setBrand] = useState<string | undefined>()
  const [code, setCode] = useState<string | undefined>()

  const fontFamilies = body || brand || code ? { body, brand, code } : undefined

  const form = (
    <>
      <Fieldset inline mb="large">
        <FieldSelect
          label="Body"
          options={options}
          value={body}
          isClearable
          onChange={setBody}
          placeholder={`Defaults to ${defaultFonts.body}`}
        />
        <FieldSelect
          label="Brand"
          options={options}
          value={brand}
          isClearable
          onChange={setBrand}
          placeholder={`Defaults to ${defaultFonts.brand}`}
        />
        <FieldSelect
          label="Code"
          options={options}
          value={code}
          isClearable
          onChange={setCode}
          placeholder={`Defaults to ${defaultFonts.code}`}
        />
      </Fieldset>
    </>
  )

  return (
    <>
      <aside>{form}</aside>

      <ComponentsProvider fontFamilies={fontFamilies}>
        <SpaceVertical>
          <Heading fontSize="xxxxlarge">XXXXLarge Heading</Heading>
          <Heading fontSize="xxxlarge">XXXLarge Heading</Heading>
          <Heading as="h1">XXLarge / h1 Heading</Heading>
          <Heading as="h2">XLarge / h2 Heading</Heading>
          <Heading as="h4">Large / h3 Heading</Heading>
          <Heading as="h4">Medium / h4 Heading</Heading>
          <Heading as="h5">h5 Heading</Heading>
          <Heading as="h6">h6 Heading</Heading>
          <Paragraph>
            "A paragraph is a self-contained unit of discourse in writing
            dealing with a particular point or idea. A paragraph consists of one
            or more sentences. Though not required by the syntax of any
            language, paragraphs are usually an expected part of formal writing,
            used to organize longer prose." - Wikipedia
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
              <TabPanel>Here's the content</TabPanel>
              <TabPanel>Here's the content</TabPanel>
            </TabPanels>
          </Tabs>
          <Tabs>
            <TabList distribute>
              <Tab aria-pressed="true">Item 1</Tab>
              <Tab>Item 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>Here's the content</TabPanel>
              <TabPanel>Here's the content</TabPanel>
            </TabPanels>
          </Tabs>
        </SpaceVertical>
      </ComponentsProvider>
    </>
  )
}
