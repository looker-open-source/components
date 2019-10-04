import styled from 'styled-components'
import {
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
  extends TruncateProps,
    SpaceProps,
    LayoutProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLParagraphElement> {}

/** @component */
export const Paragraph = styled.h1<ParagraphProps>`
  ${typography}
  ${space}
  ${layout}
  ${truncate}
`
