/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { VIEWPORT_MAP } from '../../utils-storybook';
export { default as Desktop } from './Desktop';
export { default as DesktopXL } from './DesktopXL';
export { default as MobileLaptop } from './MobileLaptop';
export { default as XL } from './XL';

export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    viewport: {
      defaultViewport: 'desktop',
      viewports: VIEWPORT_MAP,
    },
  },
  title: 'Stories/Breakpoint',
};
