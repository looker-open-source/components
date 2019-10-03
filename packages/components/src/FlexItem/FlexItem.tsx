import styled from 'styled-components'
import {
  AlignSelfProps,
  FlexBasisProps,
  FlexProps,
  OrderProps,
} from 'styled-system'
import { BoxBaseProps, boxBaseCSS } from '../Box'

export interface FlexItemProps
  extends BoxBaseProps,
    AlignSelfProps,
    FlexBasisProps,
    FlexProps,
    OrderProps {}

/** @component */
export const FlexItem = styled.div<FlexItemProps>`
  ${boxBaseCSS}
  display: flex;
`
