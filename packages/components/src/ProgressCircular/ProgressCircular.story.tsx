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
import { ProgressCircular, ProgressCircularProps } from './ProgressCircular'

const Template: Story<ProgressCircularProps> = (args) => (
  <ProgressCircular {...args} />
)
/* eslint-disable sort-keys-fix/sort-keys-fix */
export const Indeterminate = Template.bind({})
Indeterminate.args = {
  size: 'large',
}
Indeterminate.argTypes = {
  progress: {
    table: {
      disable: true,
    },
  },
}
Indeterminate.parameters = {
  storyshots: { disable: true },
}

export const Determinate = Template.bind({})
Determinate.args = {
  size: 'large',
  progress: 0.5,
}

export default {
  component: ProgressCircular,
  title: 'ProgressCircular',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large'],
      },
    },
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
  },
}
/* eslint-enabled sort-keys-fix/sort-keys-fix */
