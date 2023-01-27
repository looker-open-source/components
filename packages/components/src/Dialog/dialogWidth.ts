/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  SizeXSmall,
  SizeXXSmall,
  SizeSmall,
  SizeMedium,
  SizeLarge,
  ResponsiveValue,
} from '@looker/design-tokens'
import { system } from '@looker/design-tokens'

export type DialogSizes =
  | SizeXXSmall
  | SizeXSmall
  | SizeSmall
  | SizeMedium
  | SizeLarge

export type DialogSizeRamp = Record<DialogSizes, string>
export type DialogWidth = ResponsiveValue<DialogSizeRamp | string>

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const dialogSizes: DialogSizeRamp = {
  xxsmall: '16rem',
  xsmall: '21rem',
  small: '28rem',
  medium: '40rem',
  large: '50rem',
}

export const dialogWidth = system({
  width: {
    property: 'width',
    scale: 'dialogSizes',
    defaultScale: dialogSizes,
  },
})
