/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'

import { FilterErrorMessage } from './FilterErrorMessage'
import type { FilterErrorMessageProps } from './FilterErrorMessage'

export default {
  title: 'Filters/Stories/FilterErrorMessage',
  component: FilterErrorMessage,
}

const Template: Story<FilterErrorMessageProps> = (args) => {
  return <FilterErrorMessage {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  filters: [
    {
      expression: '',
      expressionType: 'string',
      isRequired: true,
      name: 'testfilter',
    },
  ],
}

export const UserAttributesError = Template.bind({})
UserAttributesError.args = {
  filters: [
    {
      expression: "{{ _user_attributes['first_name'] }}",
      expressionType: 'string',
      name: 'testfilter',
    },
  ],
  userAttributes: [{ name: 'first_name', value: '' }],
}

export const UserAttributesErrorLong = Template.bind({})
UserAttributesErrorLong.args = {
  ...UserAttributesError.args,
  useLongMessageForm: true,
  userAttributes: [{ name: 'first_name', value: '' }],
}
