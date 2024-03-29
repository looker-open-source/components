/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
export { default as AvatarAccessible } from './Accessible';
export { default as AvatarButton } from './Button';
export { default as AvatarUser } from './User';
export { default as AvatarIcon } from './Icon';
export { default as AvatarSize } from './Size';
export { default as AvatarColor } from './Color';
export { default as AvatarCombo } from './Combo';

export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  title: 'Stories/Avatar',
};
