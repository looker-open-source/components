import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  FlexboxProps,
  flexbox,
} from 'looker-design-tokens'
import { LayoutComponentProps, layoutCSS } from '../Layout/layout'

export interface CardContentProps
  extends LayoutComponentProps,
    FlexboxProps,
    CompatibleHTMLProps<HTMLElement> {}

export const CardContent = styled.div<CardContentProps>`
  ${layoutCSS}
  ${flexbox}
`

CardContent.defaultProps = { p: 'medium' }
