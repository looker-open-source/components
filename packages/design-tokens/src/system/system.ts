import React from 'react'

export type CompatibleHTMLProps<T> = Omit<
  React.HTMLProps<T>,
  'as' | 'color' | 'height' | 'ref' | 'size' | 'width'
>

export { TypographyProps } from './Typography'

export {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  PositionProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'
