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

import type { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Space } from '../Layout'
import { defaultArgTypes as argTypes } from '../../../../storybook/src/defaultArgTypes'
import type { ChipButtonProps } from './ChipButton'
import { ChipButton } from './ChipButton'

export default {
  argTypes,
  component: ChipButton,
  title: 'ChipButton',
}

const Template: Story<ChipButtonProps> = (args) => <ChipButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Chip Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Basic.args,
  disabled: true,
}

export const Deletable = Template.bind({})
Deletable.args = {
  ...Basic.args,
  onDelete: () => {
    //
  },
}

export const Prefix = Template.bind({})
Prefix.args = {
  ...Basic.args,
  prefix: 'role',
}

export const MaxWidth = Template.bind({})
MaxWidth.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  maxWidth: 150,
}

export const ChipButtons = () => {
  const handleClick = () => alert('Clicked!')
  const handleDelete = () => alert('Deleted!')
  return (
    <Space>
      <ChipButton onClick={handleClick}>Click Me</ChipButton>
      <ChipButton disabled onClick={handleClick}>
        Click Me (nothing happens)
      </ChipButton>
      <ChipButton onClick={handleClick} onDelete={handleDelete}>
        Delete Me
      </ChipButton>
      <ChipButton disabled onClick={handleClick} onDelete={handleDelete}>
        Delete Me (nothing happens)
      </ChipButton>
    </Space>
  )
}

ChipButtons.parameters = {
  storyshots: { disable: true },
}
