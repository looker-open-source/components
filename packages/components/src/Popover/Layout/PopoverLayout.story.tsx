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

import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { ConstitutionShort } from '../../__mocks__/Constitution'
import { ButtonTransparent } from '../../Button/ButtonTransparent'
import { PopoverLayout, PopoverLayoutProps } from '.'

const extraButton = (
  <ButtonTransparent color="neutral" size="small">
    Cancel
  </ButtonTransparent>
)

const Template: Story<Partial<PopoverLayoutProps>> = (args) => (
  <PopoverLayout {...args} />
)

export const Basic = Template.bind({})
Basic.args = {}

export const Header = Template.bind({})
Header.args = {
  children: <ConstitutionShort />,
  footer: false,
  header: 'Header text',
}

export const Footer = Template.bind({})
Footer.args = {
  children: <ConstitutionShort />,
}

export const Full = Template.bind({})
Full.args = {
  ...Footer.args,
  header: 'Header text',
}

export const HeaderHideHeading = Template.bind({})
HeaderHideHeading.args = {
  ...Full.args,
  hideHeading: true,
}

export const FooterExtraValue = Template.bind({})
FooterExtraValue.args = {
  children: <ConstitutionShort />,
  footer: extraButton,
  header: 'Header text',
}

export default {
  component: PopoverLayout,
  title: 'PopoverLayout',
}
