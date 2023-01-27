/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ResponsiveValue } from '@looker/design-tokens'
import { system } from '@looker/design-tokens'

export type AsideSizes = 'rail' | 'navigation' | 'sidebar'

export type AsideSizeRamp = Record<AsideSizes, string>

export type AsideWidth = ResponsiveValue<AsideSizeRamp | string>

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const asideSizes: AsideSizeRamp = {
  rail: '3.5rem',
  navigation: '16rem',
  sidebar: '20rem',
}

export const asideWidth = system({
  width: {
    property: 'width',
    scale: 'asideSizes',
    defaultScale: asideSizes,
  },
})
