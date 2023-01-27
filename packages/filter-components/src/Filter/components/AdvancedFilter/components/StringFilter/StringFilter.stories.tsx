/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'
import type { StringFilterType } from '@looker/filter-expressions'

import type { FilterParamProps } from '../../../../types/filter_param_props'
import { StringFilter } from './StringFilter'

const Template: Story<FilterParamProps<StringFilterType>> = (args) => (
  <StringFilter {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  filterType: 'string',
  item: {
    id: '1',
    type: 'blank',
    is: false,
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false,
}

export default {
  title: 'Filters/Stories/String Filter',
  component: StringFilter,
}
