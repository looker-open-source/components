import styled from 'styled-components'
import {
  animation,
  AnimationProps,
  CompatibleHTMLProps,
  psuedoClasses,
  PsuedoProps,
  flexbox,
  FlexboxProps,
  userSelect,
  UserSelectProps,
} from '@looker/design-tokens'
import { layoutCSS, LayoutComponentProps } from '../layout'

export interface BoxProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    LayoutComponentProps,
    FlexboxProps,
    AnimationProps,
    PsuedoProps,
    UserSelectProps {}

export const Box = styled.div<BoxProps>`
  ${layoutCSS}
  ${flexbox}
  ${animation}
  ${psuedoClasses}
  ${userSelect}
`
