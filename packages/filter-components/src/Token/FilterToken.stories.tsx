/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'

import { FilterToken } from './FilterToken'
import type { FilterTokenProps } from './FilterToken'

export default {
  title: 'Filters/Stories/FilterToken',
  component: FilterToken,
}

const Template: Story<FilterTokenProps> = (args) => {
  return <FilterToken {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  expressionType: 'date',
  expression: '',
  allowMultipleValues: true,
}

export const Expression = Template.bind({})
Expression.args = {
  expressionType: 'string',
  expression: 'foo,bar',
  allowMultipleValues: true,
}

export const Error = Template.bind({})
Error.args = {
  ...Basic.args,
  isRequired: true,
}

export const Inline = Template.bind({})
Inline.args = {
  ...Basic.args,
  config: { display: 'inline' },
}
