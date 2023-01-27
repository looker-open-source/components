/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

/**
 * 320px — 480px: Mobile devices. (20rem - 30rem)
 * 481px — 768px: iPads, Tablets. (30rem - 48rem)
 * 769px — 1024px: Small screens, laptops. (48rem - 64rem)
 * 1025px — 1200px: Desktops, large screens. (64rem - 75rem)
 * 1201px and more — Extra large screens, TV. (90rem +)
 **/

type MOBILE = 'mobile'
type TABLET = 'tablet'
type LAPTOP = 'laptop'
type DESKTOP = 'desktop'
type XL = 'xl'

export type NamedBreakpoints = MOBILE | TABLET | LAPTOP | DESKTOP | XL

export const breakpoints = ['30rem', '48rem', '64rem', '75rem', '90rem']

/* eslint-disable sort-keys-fix/sort-keys-fix */
export const BreakpointRamp: Record<NamedBreakpoints, string> = {
  mobile: breakpoints[0],
  tablet: breakpoints[1],
  laptop: breakpoints[2],
  desktop: breakpoints[3],
  xl: breakpoints[4],
}
/* eslint-enable sort-keys-fix/sort-keys-fix */
