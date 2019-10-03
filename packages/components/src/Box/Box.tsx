import styled, { css } from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'
import { CompatibleHTMLProps } from '@looker/design-tokens'

import { boxBaseCSS, BoxBaseProps } from './BoxBase'
// import { animation, AnimationProps } from './animation'
import { psuedoClasses, PsuedoProps } from './psuedoStyles'

const boxCSS = css`
  ${boxBaseCSS}
  ${flexbox}
  ${psuedoClasses}
`
export interface BoxProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    BoxBaseProps,
    FlexboxProps,
    PsuedoProps {}

export const Box = styled.div<BoxProps>`
  ${boxCSS}
`
