/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { LegacySpaceRamp, SpaceRamp, UnitRamp } from './types'
export {
  LegacySpaceRamp,
  SpaceRamp,
  SpacingSizes,
  UnitSizes,
  UnitRamp,
} from './types'
export type { SpaceProps } from 'styled-system'

/* eslint-disable sort-keys-fix/sort-keys-fix */

/**
 * @deprecated Use `unit` instead
 */
const legacySpacing: LegacySpaceRamp = {
  /**
   * @deprecated Use UnitSizes instead
   */
  none: '0rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  xxxsmall: '0.125rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  xxsmall: '0.25rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  xsmall: '0.5rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  small: '0.75rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  medium: '1rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  large: '1.25rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  xlarge: '2rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  xxlarge: '2.5rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  xxxlarge: '3.75rem',
  /**
   * @deprecated Use UnitSizes instead
   */
  xxxxlarge: '5rem',
}

export const units: UnitRamp = {
  none: '0rem',
  u05: '0.125rem',
  u1: '0.25rem',
  u2: '0.5rem',
  u3: '0.75rem',
  u4: '1rem',
  u5: '1.25rem',
  u6: '1.5rem',
  u7: '1.75rem',
  u8: '2rem',
  u9: '2.25rem',
  u10: '2.5rem',
  u11: '2.75rem',
  u12: '3rem',
  u13: '3.25rem',
  u14: '3.5rem',
  u15: '3.75rem',
  u16: '4em',
}

export const space: SpaceRamp = {
  ...legacySpacing,
  ...units,
}
