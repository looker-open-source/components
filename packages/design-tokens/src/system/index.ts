import React from 'react'

export type CompatibleHTMLProps<T> = Omit<
  React.HTMLProps<T>,
  'width' | 'color' | 'height' | 'size'
>

export { TypographyProps } from './Typography'

export {
  border,
  boxShadow,
  color,
  flexbox,
  position,
  layout,
  space,
  typography,
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  PositionProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system'
