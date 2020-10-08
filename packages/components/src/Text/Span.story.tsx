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
import { Span, SpanProps } from './Span'

const Template: Story<SpanProps> = (args) => <Span {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Span Text',
}

export const XXXXLarge = Template.bind({})
XXXXLarge.args = {
  ...Basic.args,
  fontSize: 'xxxxlarge',
}

export const Bold = Template.bind({})
Bold.args = {
  ...Basic.args,
  fontWeight: 'bold',
}

export const Variant = Template.bind({})
Variant.args = {
  ...Basic.args,
  variant: 'critical',
}

export const TextTransform = Template.bind({})
TextTransform.args = {
  ...Basic.args,
  textTransform: 'uppercase',
}

export const Wrapped = Template.bind({})
Wrapped.args = {
  ...Basic.args,
  breakword: true,
}

export const TextDecoration = Template.bind({})
TextDecoration.args = {
  ...Basic.args,
  textDecoration: 'line-through',
}

export default {
  component: Span,
  title: 'Span',
}
