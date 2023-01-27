/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as Default } from './Default'
export { default as Color } from './Color'

export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    storyshots: { disable: true },
  },
  title: 'Stories/CardMedia',
}
