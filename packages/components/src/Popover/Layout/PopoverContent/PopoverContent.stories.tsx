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
import { ConstitutionShort } from '../../../__mocks__/Constitution'
import { defaultArgTypes as argTypes } from '../../../../../../apps/storybook/src/defaultArgTypes'
import type { PopoverContentProps } from './PopoverContent'
import { PopoverContent } from './PopoverContent'

export default {
  argTypes,
  component: PopoverContent,
  title: 'PopoverContent',
}

const Template: Story<PopoverContentProps> = ({ ...args }) => (
  <PopoverContent {...args}>
    <ConstitutionShort fontSize="small" />
  </PopoverContent>
)

export const Basic = Template.bind({})
Basic.args = {}

Basic.parameters = {
  storyshots: {
    disable: true,
  },
}

export const CustomPadding = Template.bind({})
CustomPadding.args = {
  pb: 'u3',
  pt: 'u8',
  px: 'u3',
}
