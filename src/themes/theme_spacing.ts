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
}

// tslint:disable:object-literal-sort-keys
export const themeSpacing: ThemeSpacing = {
  xs: rem(spacingBase * 0.25),
  s: rem(spacingBase * 0.5),
  m: rem(spacingBase),
  l: rem(spacingBase * 1.25),
  xl: rem(spacingBase * 2),
  xxl: rem(spacingBase * 2.5),
  xxxl: rem(spacingBase * 3.75),
}
