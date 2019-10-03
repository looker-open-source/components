import styled from 'styled-components'
import { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens'
import { BoxBaseProps, boxBaseCSS } from '../Box'

/**
 * styled-system has its own FlexBoxProps, so we call this one FlexProps to disambiguate.
 */
export interface FlexProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    Omit<BoxBaseProps, 'display'>,
    FlexboxProps {}

/** @component */
export const Flex = styled.div<FlexProps>`
  ${boxBaseCSS}
  display: flex;
`
