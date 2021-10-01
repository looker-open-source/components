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
import { defaultArgTypes as argTypes } from '../../../../apps/storybook/src/defaultArgTypes'
import type { HeadingProps } from './Heading'
import { Heading } from './Heading'

export default {
  argTypes,
  component: Heading,
  title: 'Heading',
}

const Template: Story<HeadingProps> = args => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Heading Text',
}

export const Level = Template.bind({})
Level.args = {
  ...Default.args,
  as: 'h4',
}

export const FontSize = Template.bind({})
FontSize.args = {
  ...Level.args,
  fontSize: 'large',
}

export const FontWeight = Template.bind({})
FontWeight.args = {
  ...Default.args,
  fontWeight: 'bold',
}

export const Color = Template.bind({})
Color.args = {
  ...Default.args,
  color: 'text1',
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
