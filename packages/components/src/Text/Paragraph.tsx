import styled from 'styled-components'
import {
  reset,
  layout,
  space,
  typography,
  CompatibleHTMLProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { TruncateProps, truncate } from '../Text/truncate'

export interface ParagraphProps
  extends TypographyProps,
    SpaceProps,
    LayoutProps,
    TruncateProps,
    CompatibleHTMLProps<HTMLParagraphElement> {}

/** @component */
export const Paragraph = styled.p<ParagraphProps>`
  ${reset}
  ${typography}
  ${space}
  ${layout}
  ${truncate}
`
