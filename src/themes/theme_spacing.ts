// $spacing-base: pxToRem(16px);
// $spacing: (
//   xs:     $spacing-base * 0.25,
//   s:      $spacing-base * 0.5,
//   m:      $spacing-base,
//   l:      $spacing-base * 1.25,
//   xl:     $spacing-base * 1.5,
//   2xl:    $spacing-base * 1.875,
//   3xl:    $spacing-base * 2.25,
//   4xl:    $spacing-base * 2.875
// );

import { rem } from 'polished'

const spacingBase = 16

export interface ThemeSpacing {
  l: string
  m: string
  s: string
  xl: string
  xs: string
  xxl: string
  xxxl: string
  xxxxl: string
}

export const themeSpacing: ThemeSpacing = {
  l: rem(spacingBase * 1.25),
  m: rem(spacingBase),
  s: rem(spacingBase * 0.5),
  xl: rem(spacingBase * 1.5),
  xs: rem(spacingBase * 0.25),
  xxl: rem(spacingBase * 1.875),
  xxxl: rem(spacingBase * 2.25),
  xxxxl: rem(spacingBase * 2.875)
}
