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
import { Paragraph, ParagraphProps } from './Paragraph'

export default {
  component: Paragraph,
  title: 'Paragraph',
}

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Paragraph Text',
}

export const FontSize = Template.bind({})
FontSize.args = {
  ...Default.args,
  fontSize: 'xlarge',
}

export const TextAlign = Template.bind({})
TextAlign.args = {
  ...Default.args,
  textAlign: 'center',
}

export const FontWeight = Template.bind({})
FontWeight.args = {
  ...Default.args,
  fontWeight: 'bold',
}

export const Color = Template.bind({})
Color.args = {
  ...Default.args,
  color: 'key',
}

export const TextTransform = Template.bind({})
TextTransform.args = {
  ...Default.args,
  textTransform: 'uppercase',
}

export const TextDecoration = Template.bind({})
TextDecoration.args = {
  ...Default.args,
  textDecoration: 'line-through',
}

export const Truncate = Template.bind({})
Truncate.args = {
  children:
    "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!",
  truncate: true,
}

export const MultilineTruncate = Template.bind({})
MultilineTruncate.args = {
  children:
    "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!",
  truncateLines: 2,
}
