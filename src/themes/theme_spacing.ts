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
