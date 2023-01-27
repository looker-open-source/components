/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

export { default as ActiveElement } from './ActiveElement'
export { default as AnimationCallbacks } from './AnimationCallbacks'
export { default as Basic } from './Basic'
export { default as Controlled } from './Controlled'
export { default as ControlledNoChildren } from './ControlledNoChildren'
export { default as ControlledLegacy } from './ControlledLegacy'
export { default as CloseIconButton } from './CloseIconButton'
export { default as ClickOutside } from './ClickOutside'
export { default as Height } from './Height'
export { default as LongContent } from './LongContent'
export { default as MediumContent } from './MediumContent'
export { default as MultiFunctionButton } from './MultiFunctionButton'
export { default as Open } from './Open'
export { default as PlacementCover } from './PlacementCover'
export { default as PlacementTop } from './PlacementTop'
export { default as UseDialog } from './UseDialog'
export { default as WithCheckbox } from './WithCheckbox'

export default {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    storyshots: { disable: true },
  },
  title: 'Stories/Dialog',
}
