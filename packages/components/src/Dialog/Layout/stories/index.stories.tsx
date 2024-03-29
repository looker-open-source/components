/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as Basic } from './Basic';
export { default as Footer } from './Footer';
export { default as FooterSecondary } from './FooterSecondary';
export { default as Full } from './Full';
export { default as Header } from './Header';
export { default as HeaderCloseButton } from './HeaderCloseButton';
export { default as HeaderDetail } from './HeaderDetail';
export { default as NoPadding } from './NoPadding';
export { default as WithAccordion } from './WithAccordion';
export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  title: 'Stories/Layout/DialogLayout',
};
