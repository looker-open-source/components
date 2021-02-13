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
import { Constitution, ConstitutionShort } from '../../__mocks__/Constitution'
import { Box } from '../../Layout'
import { DialogContent, DialogLayout } from '.'

export interface DialogLayoutExampleProps {
  header?: string
  footer?: string
  length?: 'short' | 'long'
}

const Template: Story<DialogLayoutExampleProps> = ({
  header,
  footer,
  length,
}) => (
  <Box bg="ui1">
    <DialogLayout
      footer={footer && 'Footer text'}
      header={header && 'Header text'}
    >
      {length === 'long' ? <Constitution /> : <ConstitutionShort />}
    </DialogLayout>
  </Box>
)

export const Basic = Template.bind({})
Basic.args = {
  length: 'short',
}

export const Header = Template.bind({})
Header.args = {
  ...Basic.args,
  header: 'Dialog header text',
}

export const Footer = Template.bind({})
Footer.args = {
  ...Basic.args,
  footer: 'Footer text',
}

export const Full = Template.bind({})
Full.args = {
  ...Footer.args,
  ...Header.args,
}

const NoPaddingTemplate: Story<DialogLayoutExampleProps> = () => (
  <Box bg="ui1">
    <DialogContent hasFooter={false} hasHeader={false}>
      <ConstitutionShort />
    </DialogContent>
  </Box>
)

export const NoPadding = NoPaddingTemplate.bind({})

export default {
  component: DialogLayout,
  title: 'DialogLayout',
}
