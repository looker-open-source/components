/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as Basic } from './Basic';
export { default as HideClose } from './HideClose';
export { default as Detail } from './Detail';
export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  title: 'Stories/Layout/DialogHeader',
};
