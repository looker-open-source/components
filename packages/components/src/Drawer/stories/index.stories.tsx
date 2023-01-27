/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as Basic } from './Basic'
export { default as AnimationCallbacks } from './AnimationCallbacks'
export { default as UseDrawer } from './UseDrawer'
export { default as Width } from './Width'
export { default as Placement } from './Placement'

export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    storyshots: { disable: true },
  },
  title: 'Stories/Drawer',
}
