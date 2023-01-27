/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop'

export const shouldForwardProp = createShouldForwardProp([...props])

export * from './color'
export * from './elevation'
export type {
  LegacySpaceRamp,
  SpaceRamp,
  SpacingSizes,
  SpaceProps,
  UnitRamp,
  UnitSizes,
} from './space'
export { units } from './space'
export * from './theme'
export * from './system'

// Useful external utilities
export { transitions } from './tokens/transitions'
export * from './tokens/breakpoints'
export * from './utils'
