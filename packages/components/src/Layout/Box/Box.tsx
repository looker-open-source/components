import styled from 'styled-components'
import {
  // animation,
  // AnimationProps,
  CompatibleHTMLProps,
  psuedoClasses,
  PsuedoProps,
  flexbox,
  FlexboxProps,
} from '@looker/design-tokens'
import { layoutCSS, LayoutComponentProps } from '../layout'

export interface BoxProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    LayoutComponentProps,
    FlexboxProps,
    PsuedoProps {}

export const Box = styled.div<BoxProps>`
  ${layoutCSS}
  ${flexbox}
  ${psuedoClasses}
`
