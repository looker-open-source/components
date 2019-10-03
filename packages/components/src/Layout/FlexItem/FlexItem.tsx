import styled from 'styled-components'
import {
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

/** @component */
export const FlexItem = styled.div<FlexItemProps>`
  ${layoutCSS}
`
