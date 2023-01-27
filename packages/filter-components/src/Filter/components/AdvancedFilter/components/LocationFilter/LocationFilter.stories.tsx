/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'

import type { FilterParamProps } from '../../../../types/filter_param_props'
import { LocationFilter } from './LocationFilter'
import type { LocationFilterType } from '@looker/filter-expressions'

export const DefaultStory: Story<FilterParamProps<LocationFilterType>> = (
  args
) => <LocationFilter {...args} />
DefaultStory.args = {
  filterType: 'location',
  item: {
    id: '1',
    type: 'anyvalue',
    is: false,
  },
  showAdd: false,
  showName: true,
  showRemove: false,
  showOperator: false,
  showMatchesAdvanced: false,
}

export default {
  title: 'Filters/Stories/Location Filter',
  component: LocationFilter,
}
