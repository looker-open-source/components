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
import { Box } from '../../Layout'
import { Button, ButtonTransparent } from '../../Button'
import { DialogContent, DialogLayout } from '.'

export interface DialogLayoutExampleProps {
  header?: string
  footer?: string
}

const Template: Story<DialogLayoutExampleProps> = ({ header, footer }) => (
  <Box bg="ui1">
    <DialogLayout
      footer={footer && 'Footer text'}
      header={header && 'Header text'}
    >
      <ConstitutionShort />
    </DialogLayout>
  </Box>
)

export const Content = Template.bind({})
Content.args = {}

export const Header = Template.bind({})
Header.args = {
  ...Content.args,
  header: 'Dialog header text',
}

export const Footer = Template.bind({})
Footer.args = {
  ...Content.args,
  footer: 'Footer text',
}

export const Full = Template.bind({})
Full.args = {
  ...Footer.args,
  ...Header.args,
}

const extraButton = (
  <ButtonTransparent color="neutral" size="medium">
    Cancel
  </ButtonTransparent>
)

export const HeaderDetail = () => (
  <Box bg="ui1">
    <DialogLayout header="Header" headerDetail={extraButton} footer="Footer">
      <ConstitutionShort />
    </DialogLayout>
  </Box>
)

export const HeaderCloseButton = () => (
  <Box bg="ui1">
    <DialogLayout header="Header" headerCloseButton footer="Footer">
      <ConstitutionShort />
    </DialogLayout>
  </Box>
)

export const FooterSecondary = () => (
  <Box bg="ui1">
    <DialogLayout
      header="Header"
      footer={<Button>Primary</Button>}
      footerSecondary={extraButton}
    >
      <ConstitutionShort />
    </DialogLayout>
  </Box>
)

export const NoPadding = () => (
  <Box bg="ui1">
    <DialogContent hasFooter={false} hasHeader={false}>
      <ConstitutionShort />
    </DialogContent>
  </Box>
)

export default {
  component: DialogLayout,
  title: 'DialogLayout',
}
