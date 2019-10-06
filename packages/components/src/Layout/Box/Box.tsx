import styled from 'styled-components'
import {
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
    PsuedoProps,
    UserSelectProps {}

export const Box = styled.div<BoxProps>`
  ${layoutCSS}
  ${flexbox}
  ${psuedoClasses}
  ${userSelect}
`
