/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { Story } from '@storybook/react/types-6-0'
import { Page } from 'puppeteer'
import React from 'react'
import { ChevronLeft } from '@styled-icons/material-rounded/ChevronLeft'
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'
import { children, label } from '../__mocks__/accordion'
import { useToggle } from '../utils/useToggle'
import { Accordion2 } from './Accordion2'
import { Accordion2Props } from './types'

export default {
  component: Accordion2,
  title: 'Accordion2',
}

const Template: Story<Accordion2Props> = (args) => <Accordion2 {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children,
  label,
}

export const Focused = Template.bind({})
Focused.args = {
  ...Basic.args,
}
Focused.parameters = {
  beforeScreenshot: async (page: Page) => {
    const disclosure = await page.$('[role="button"]')
    await disclosure?.type(' ')
    await page.waitForTimeout(50)
  },
  docs: { disable: true },
}

export const Left = Template.bind({})
Left.args = {
  ...Basic.args,
  indicatorPosition: 'left',
}

export const DefaultOpen = Template.bind({})
DefaultOpen.args = {
  ...Basic.args,
  defaultOpen: true,
}
DefaultOpen.parameters = {
  storyshots: { disable: true },
}

export const CustomizedIndicator = Template.bind({})
CustomizedIndicator.args = {
  ...Basic.args,
  indicatorIcons: { close: <ChevronLeft />, open: <ExpandMore /> },
  indicatorPosition: 'left',
  indicatorSize: 'large',
}

export const Controlled = () => {
  const { value, change } = useToggle(true)

  return (
    <Accordion2
      isOpen={value}
      toggleOpen={change}
      label="Constitution Preamble"
    >
      {children}
    </Accordion2>
  )
}
Controlled.parameters = {
  storyshots: { disable: true },
}
