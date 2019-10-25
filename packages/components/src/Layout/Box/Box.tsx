import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  pseudoClasses,
  PseudoProps,
  flexbox,
  FlexboxProps,
  userSelect,
  UserSelectProps,
} from 'looker-design-tokens'
import { layoutCSS, LayoutComponentProps } from '../layout'

export interface BoxProps
  extends CompatibleHTMLProps<HTMLElement>,
    LayoutComponentProps,
    FlexboxProps,
    PseudoProps,
    UserSelectProps {}

export const Box = styled.div<BoxProps>`
  ${layoutCSS}
  ${pseudoClasses}
  ${userSelect}
  ${flexbox}
`
