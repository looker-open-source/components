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
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes as argTypes } from '../../../../../apps/storybook/src/defaultArgTypes'
import { ConstitutionShort } from '../../__mocks__/Constitution'
import { Box2 } from '../../Layout'
import type { DialogLayoutProps } from './DialogLayout'
import { DialogLayout } from './DialogLayout'
import { DialogContent } from './DialogContent'

const Template: Story<DialogLayoutProps> = (args) => (
  <Box2 bg="ui1">
    <DialogLayout {...args}>
      <ConstitutionShort />
    </DialogLayout>
  </Box2>
)

export const Basic = Template.bind({})
Basic.args = {}

export const Header = Template.bind({})
Header.args = {
  header: 'Header text',
}

export const Footer = Template.bind({})
Footer.args = {
  footer: 'Footer text',
}

export const Full = Template.bind({})
Full.args = {
  ...Footer.args,
  ...Header.args,
}

export const HeaderDetail = Template.bind({})
HeaderDetail.args = {
  ...Full.args,
  headerDetail: 'Cancel',
}

export const HeaderCloseButton = Template.bind({})
HeaderCloseButton.args = {
  ...Full.args,
  headerCloseButton: true,
}

export const FooterSecondary = Template.bind({})
FooterSecondary.args = {
  ...Full.args,
  footerSecondary: 'Cancel',
}

export const NoPadding = () => (
  <Box2 bg="ui1">
    <DialogContent hasFooter={false} hasHeader={false}>
      <ConstitutionShort />
    </DialogContent>
  </Box2>
)

export default {
  argTypes,
  component: DialogLayout,
  title: 'DialogLayout',
}
