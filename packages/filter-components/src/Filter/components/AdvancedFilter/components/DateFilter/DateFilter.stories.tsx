/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'
import type { DateFilterType } from '@looker/filter-expressions'

import { i18nInit } from './../../../../../utils'
import { DateFilter } from './DateFilter'
import type { FilterParamProps } from '../../../../types/filter_param_props'

i18nInit()

const Template: Story<FilterParamProps<DateFilterType>> = (args) => (
  <DateFilter {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  filterType: 'date',
  name: 'filtername',
  item: {
    id: '1',
    type: 'after',
    is: false,
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false,
}

export const Relative = Template.bind({})
Relative.args = {
  ...Basic.args,
  item: {
    id: '1',
    is: false,
    endInterval: { type: 'interval', value: 3, unit: 'week' },
    intervalType: 'ago',
    startInterval: { type: 'interval', value: 3, unit: 'month' },
    type: 'relative',
  },
}

export default {
  title: 'Filters/Stories/Date Filter',
  component: DateFilter,
}
