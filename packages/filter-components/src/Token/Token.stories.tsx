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

import { Token } from './Token'
import type { TokenProps } from './Token'

export default {
  title: 'Filters / Token',
  component: Token,
}

const Template: Story<TokenProps> = args => {
  return <Token {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'is any time',
}

export const IsEmpty = Template.bind({})
IsEmpty.args = {
  label: 'More',
  isEmpty: true,
}

export const Long = Template.bind({})
Long.args = {
  label:
    'is from 2022/01/01 until 2022/01/31 or is from 2022/03/01 until 2022/03/31',
}
