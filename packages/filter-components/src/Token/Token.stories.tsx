/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'

import { Token } from './Token'
import type { TokenProps } from './Token'

export default {
  title: 'Filters/Stories/Token',
  component: Token,
}

const Template: Story<TokenProps> = (args) => {
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
