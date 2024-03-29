/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import Positive from './Positive';

export { default as Basic } from './Basic';
export { default as Critical } from './Critical';
export { default as Neutral } from './Neutral';
export { default as XSmall } from './XSmall';
export { default as Small } from './Small';
export { default as Medium } from './Medium';
export { default as Large } from './Large';
export { Positive };
export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  title: 'Stories/ButtonOutline',
};
