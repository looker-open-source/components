import {
  CompatibleHTMLProps,
  flexbox,
  FlexboxProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { LayoutComponentProps, layoutCSS } from '../layout'

/**
 * styled-system has its own FlexBoxProps, so we call this one FlexProps to disambiguate.
 */
export interface FlexProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    Omit<LayoutComponentProps, 'display'>,
    FlexboxProps {}

/** @component */
export const Flex = styled.div<FlexProps>`
  ${layoutCSS}
  ${flexbox};
  display: flex;
`
