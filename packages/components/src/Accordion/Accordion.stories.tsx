/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { Story } from '@storybook/react/types-6-0'
// import type { Page } from 'puppeteer'
import type { FC, ReactNode } from 'react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { ChevronLeft, ExpandMore } from '@styled-icons/material-rounded'
import { HelpOutline } from '@styled-icons/material'
import { Badge } from '../Badge'
import { Box2, Space } from '../Layout'
import { Fieldset, FieldText } from '../Form'
import { Icon } from '../Icon'
import { UnorderedList } from '../UnorderedList'
import { Paragraph, Text } from '../Text'
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { AccordionProps } from './Accordion'
import { Accordion } from './Accordion'
import { AccordionContent } from './AccordionContent'
import { AccordionDisclosure } from './AccordionDisclosure'

export default {
  argTypes,
  component: Accordion,
  title: 'Accordion',
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export const LegacyComposition = () => (
  <Accordion id="basic-accordion" px="large">
    <AccordionDisclosure>See more...</AccordionDisclosure>
    <AccordionContent>{lorem}</AccordionContent>
  </Accordion>
)

const Template: Story<AccordionProps> = args => <Accordion {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Hello',
  content: 'World',
}

export const Focused = Template.bind({})
Focused.args = {
  ...Basic.args,
}

Focused.parameters = {
  // beforeScreenshot: async (page: Page) => {
  //   const disclosure = await page.$('[role="button"]')
  //   await disclosure?.type(' ')
  //   await page.waitForTimeout(50)
  // },
  docs: { disable: true },
  storyshots: { disable: true },
}

export const Left = () => (
  <Accordion indicatorPosition="left" content="World">
    Hello
  </Accordion>
)

export const DefaultOpen = () => (
  <Accordion
    defaultOpen
    content={
      <Fieldset>
        <Fieldset inline>
          <FieldText label="First name" />
          <FieldText label="Middle" />
          <FieldText label="Last name" />
        </Fieldset>
        <FieldText label="Email" />
        <FieldText label="Phone" />
      </Fieldset>
    }
  >
    Advanced Options
  </Accordion>
)

DefaultOpen.parameters = {
  storyshots: { disable: true },
}

export const CustomizedIndicator = () => (
  <Accordion
    density={1}
    indicatorPosition="left"
    indicatorIcons={{ close: <ChevronLeft />, open: <ExpandMore /> }}
    content={lorem}
  >
    See more...
  </Accordion>
)

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Accordion
      indicatorPosition="left"
      isOpen={isOpen}
      toggleOpen={setIsOpen}
      onOpen={() => alert('Opening doors')}
      onClose={() => alert('Closing doors')}
      content={<Paragraph>{lorem}</Paragraph>}
    >
      <Space between>
        Some Information
        <Icon color="text2" icon={<HelpOutline />} size="small" />
      </Space>
    </Accordion>
  )
}

Controlled.parameters = {
  storyshots: { disable: true },
}

const Branch: FC<{ children?: ReactNode }> = ({ children }) => (
  <Accordion
    indicatorPosition="left"
    defaultOpen
    pl="medium"
    content={
      <UnorderedList>
        <li>Cheddar</li>
        <li>Gouda</li>
        <li>Swiss</li>
        {children}
      </UnorderedList>
    }
  >
    Hello World
  </Accordion>
)

export const Nested = () => (
  <Branch>
    <Branch>
      <Branch>
        <Branch />
      </Branch>
    </Branch>
  </Branch>
)

Nested.parameters = {
  storyshots: { disable: true },
}

export const ApiExplorer = () => {
  const content = (
    <Box2 borderLeft ml="xsmall" pl="small">
      <UnorderedList fontSize="small">
        <li>
          <Badge intent="inform">GET</Badge> Search Favorites
        </li>
        <li>
          <Badge intent="inform">GET</Badge> Get Favorites
        </li>
        <li>
          <Badge intent="critical">GET</Badge> Delete Favorite
        </li>
        <li>
          <Badge intent="positive">GET</Badge> Create Favorite
        </li>
        <li>
          <Badge intent="warn">POST</Badge> Update Content
        </li>
      </UnorderedList>
    </Box2>
  )

  return (
    <Customized>
      <Accordion
        indicatorIcons={{ close: <ChevronLeft />, open: <ExpandMore /> }}
        content={content}
      >
        First Group
      </Accordion>
      <Accordion
        defaultOpen
        indicatorIcons={{ close: <ChevronLeft />, open: <ExpandMore /> }}
        content={content}
      >
        <Text color="red">Second Group</Text>
      </Accordion>
    </Customized>
  )
}

ApiExplorer.parameters = {
  storyshots: { disable: true },
}

const Customized = styled.div`
  ${AccordionDisclosure}[aria-expanded='true'] {
    color: ${({ theme }) => theme.colors.key};
  }
`
