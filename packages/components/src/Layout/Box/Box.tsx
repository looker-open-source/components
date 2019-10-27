import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  cursor,
  CursorProps,
  flexbox,
  FlexboxProps,
  pseudoClasses,
  PseudoProps,
  userSelect,
  UserSelectProps,
} from 'looker-design-tokens'
import { layoutCSS, LayoutComponentProps } from '../layout'

export interface BoxProps
  extends CompatibleHTMLProps<HTMLElement>,
    LayoutComponentProps,
    FlexboxProps,
    PseudoProps,
    CursorProps,
    UserSelectProps {}

export const Box = styled.div<BoxProps>`
  ${layoutCSS}
  ${pseudoClasses}
  ${userSelect}
  ${flexbox}
  ${cursor}
`
