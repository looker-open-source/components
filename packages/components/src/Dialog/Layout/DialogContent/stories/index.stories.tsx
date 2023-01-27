/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as Basic } from './Basic'
export { default as Overflow } from './Overflow'
export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    storyshots: { disable: true },
  },
  title: 'Stories/Layout/DialogContent',
}
