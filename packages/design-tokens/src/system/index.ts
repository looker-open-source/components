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
  BorderRadiusProps,
  BoxShadowProps,
  FlexboxProps,
  PositionProps,
  LayoutProps,
} from 'styled-system'

export type CompatibleHTMLProps<T> = Omit<
  React.HTMLProps<T>,
  'as' | 'color' | 'height' | 'ref' | 'size' | 'width'
>

export { userSelect, UserSelectProps } from './userSelect'

export { Easings } from './easings'
export { RadiusSizes, Radii } from './radii'
export { Shadows } from './shadows'
export { Transitions } from './transitions'
export * from './color'
export * from './typography'
export * from './space'

// Custom Extensions
export * from './reset'
export * from './psuedo'
