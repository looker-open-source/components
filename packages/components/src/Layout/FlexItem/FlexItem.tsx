import styled from 'styled-components'
import {
  alignSelf,
  flexBasis,
  flex,
  order,
  AlignSelfProps,
  FlexBasisProps,
  FlexProps,
  OrderProps,
} from 'styled-system'
import { LayoutComponentProps, layoutCSS } from '../layout'

export interface FlexItemProps
  extends LayoutComponentProps,
    AlignSelfProps,
    FlexBasisProps,
    FlexProps,
    OrderProps {}

export const FlexItem = styled.div<FlexItemProps>`
  ${layoutCSS}
  ${alignSelf}
  ${flexBasis}
  ${flex}
  ${order}
`
