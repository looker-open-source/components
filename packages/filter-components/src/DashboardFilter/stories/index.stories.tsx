/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { DashboardFilter } from '../DashboardFilter'

import { i18nResources } from '../../locales'
export { default as Basic } from './Basic'
export { default as ExpressionOnChange } from './ExpressionOnChange'
export { default as Suggestions } from './Suggestions'
export { default as Required } from './Required'

export default {
  component: DashboardFilter,
  parameters: {
    i18nResources,
    storyshots: { disable: true },
  },
  title: 'Filters/Stories/DashboardFilter',
}
