/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Aside } from '../../../'
export { default as Collapse } from './Collapse'
export { default as DefaultBorderAndColor } from './DefaultBorderAndColor'
export { default as DefaultWidthSidebar } from './DefaultWidthSidebar'
export { default as WidthNavigation } from './WidthNavigation'
export { default as WidthRail } from './WidthRail'
export { default as BorderBottom } from './BorderBottom'
export { default as BorderLeft } from './BorderLeft'
export { default as BorderRight } from './BorderRight'
export { default as BorderTop } from './BorderTop'
export { default as BorderX } from './BorderX'
export { default as BorderY } from './BorderY'

export default {
  argTypes,
  component: Aside,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Aside',
}
