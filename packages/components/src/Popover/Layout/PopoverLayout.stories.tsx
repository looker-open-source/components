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

import React from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { ConstitutionShort } from '../../fixtures/Constitution'
import { ButtonTransparent } from '../../Button/ButtonTransparent'
import type { PopoverLayoutProps } from './PopoverLayout'
import { PopoverLayout } from './PopoverLayout'

export default {
  argTypes,
  component: PopoverLayout,
  title: 'PopoverLayout',
}

const Template: Story<Partial<PopoverLayoutProps>> = args => (
  <PopoverLayout {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: <ConstitutionShort fontSize="small" />,
}

export const Header = Template.bind({})
Header.args = {
  ...Basic.args,
  footer: false,
  header: 'Header text',
}

export const FooterCloseButton = Template.bind({})
FooterCloseButton.args = {
  ...Basic.args,
  closeButton: (
    <ButtonTransparent color="neutral" size="small">
      Close
    </ButtonTransparent>
  ),
  header: 'Header text',
}

/**
 * @TODO - Make this impossible with types
 * User should not be able to do `footer=false + header=undefined`
 */
export const NoFooter = Template.bind({})
NoFooter.args = {
  footer: false,
  ...Basic.args,
}
NoFooter.parameters = {
  storyshots: { disable: true },
}

export const Full = Template.bind({})
Full.args = {
  ...Basic.args,
  footer: (
    <ButtonTransparent color="neutral" size="small">
      Cancel
    </ButtonTransparent>
  ),
  header: 'Header text',
}

export const HeaderHideHeading = Template.bind({})
HeaderHideHeading.args = {
  ...Full.args,
  hideHeader: true,
}
