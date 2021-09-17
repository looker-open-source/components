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

import React, { useState } from 'react'
import type { Story } from '@storybook/react/types-6-0'
import { defaultArgTypes as argTypes } from '../../../../storybook/src/defaultArgTypes'
import type { PageSizeProps } from './PageSize'
import { PageSize } from './PageSize'

const Template: Story<PageSizeProps> = (args) => <PageSize {...args} />

export const Basic = Template.bind({})
Basic.args = {
  onChange: (value: number) => alert(`You chose ${value} per page`),
  total: 100,
  value: 100,
}

export const AlwaysVisible = () => {
  const [value, setValue] = useState(100)
  return <PageSize alwaysVisible total={3} value={value} onChange={setValue} />
}

export default {
  argTypes,
  component: PageSize,
  title: 'PageSize',
}
