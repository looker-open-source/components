/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'

import type { FilterParamProps } from '../../../../types/filter_param_props'
import { MatchesAdvanced } from './MatchesAdvanced'

export const DefaultStory: Story<FilterParamProps> = (args) => (
  <MatchesAdvanced {...args} />
)
DefaultStory.args = {
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
  title: 'Filters/Stories/Matches Advanced',
  component: MatchesAdvanced,
}
