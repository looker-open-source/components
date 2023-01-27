/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as Basic } from './Basic'
export { default as Locale } from './Locale'
export { default as ProviderLocale } from './ProviderLocale'
export { default as Range } from './Range'
export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    storyshots: { disable: true },
  },
  title: 'Stories/Calendar',
}
