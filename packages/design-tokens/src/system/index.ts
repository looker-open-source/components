import React from 'react'
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
  FlexboxProps,
  PositionProps,
  LayoutProps,
} from 'styled-system'

export type CompatibleHTMLProps<T> = Omit<
  React.HTMLProps<T>,
  'as' | 'color' | 'height' | 'ref' | 'size' | 'width'
>

export { Easings } from './easings'
export { Radii } from './radii'
export { Shadows } from './shadows'
export { Transitions } from './transitions'
export * from './color'
export * from './typography'
export * from './space'

// Custom Extensions
export * from './animation'
export * from './cursor'
export * from './reset'
export * from './psuedo'
