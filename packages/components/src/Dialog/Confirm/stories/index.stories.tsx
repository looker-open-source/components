/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as Basic } from './Basic'
export { default as Critical } from './Critical'
export { default as Rich } from './Rich'
export { default as Layout } from './Layout'
export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    storyshots: { disable: true },
  },
  title: 'Stories/Confirm',
}
