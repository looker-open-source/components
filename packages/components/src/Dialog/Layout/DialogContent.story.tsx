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

import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Box, Paragraph } from '../..'
import { DialogContent, DialogContentProps } from './DialogContent'

const Template: Story<DialogContentProps> = (args) => (
  <DialogContent {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: <Box height="2rem" bg="rebeccapurple" />,
}

export const Overflow = () => (
  <Box height="10rem" display="flex" bg="white" p="large">
    <DialogContent>
      <Paragraph>Scroll down here...</Paragraph>
      <Box height="12rem" bg="rebeccapurple" />
    </DialogContent>
  </Box>
)

export default {
  component: DialogContent,
  title: 'DialogContent',
}
