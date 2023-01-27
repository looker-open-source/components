/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { Visualization } from '../Visualization'
import { VIEWPORT_MAP } from '@looker/components'
import type { StoryObj } from '@storybook/react'
import WrappedText from './TableWrappedText'
import TruncatedText from './TableTruncatedText'
;(TruncatedText as StoryObj).parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}
;(WrappedText as StoryObj).parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: VIEWPORT_MAP,
  },
}

export default {
  component: Visualization,
  title: 'Visualizations/Stories/Table',
}

export { default as Basic } from './TableBasic'
export { default as HorizontalScroll } from './TableHorizontalScroll'
export { default as PivotedTable } from './TablePivot'
export { default as MultiSort } from './TableMultiSort'
export { WrappedText, TruncatedText }
