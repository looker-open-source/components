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

import { Page } from 'puppeteer'
import React from 'react'
import { Add } from '@styled-icons/material/Add'
import { Story } from '@storybook/react/types-6-0'
import { IconButton } from './IconButton'
import { IconButtonProps } from './iconButtonTypes'

export default {
  component: IconButton,
  title: 'IconButton',
}

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  icon: <Add />,
  label: 'Add',
}

export const XXSmall = Template.bind({})
XXSmall.args = {
  ...Basic.args,
  size: 'xxsmall',
}

export const XSmall = Template.bind({})
XSmall.args = {
  ...Basic.args,
  size: 'xsmall',
}

export const Small = Template.bind({})
Small.args = {
  ...Basic.args,
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  ...Basic.args,
  size: 'large',
}

export const OutlineXXSmall = Template.bind({})
OutlineXXSmall.args = {
  ...Basic.args,
  outline: true,
  size: 'xxsmall',
}

export const OutlineXSmall = Template.bind({})
OutlineXSmall.args = {
  ...Basic.args,
  outline: true,
  size: 'xsmall',
}

export const OutlineSmall = Template.bind({})
OutlineSmall.args = {
  ...Basic.args,
  outline: true,
  size: 'small',
}

export const OutlineLarge = Template.bind({})
OutlineLarge.args = {
  ...Basic.args,
  outline: true,
  size: 'large',
}

export const ToggleOn = Template.bind({})
ToggleOn.args = {
  ...Basic.args,
  toggle: true,
}

export const ToggleOff = Template.bind({})
ToggleOff.args = {
  ...Basic.args,
  toggle: false,
}

export const ToggleBackground = Template.bind({})
ToggleBackground.args = {
  ...Basic.args,
  toggle: true,
  toggleBackground: true,
  toggleColor: undefined,
}

export const ToggleColor = Template.bind({})
ToggleColor.args = {
  ...Basic.args,
  toggle: true,
  toggleBackground: true,
  toggleColor: 'calculation',
}

export const ToggleColorFocused = Template.bind({})
ToggleColorFocused.args = {
  ...ToggleColor.args,
  margin: 'small',
}

ToggleColorFocused.parameters = {
  beforeScreenshot: async (page: Page) => {
    const button = await page.$('button')
    await button?.type(' ')
    await page.waitForTimeout(100)
  },
}

export const ToggleBackgroundAndShapeRound = Template.bind({})
ToggleBackgroundAndShapeRound.args = {
  ...ToggleBackground.args,
  shape: 'round',
}
