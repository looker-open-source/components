import styled from 'styled-components'
import {
  typography,
  space,
  CompatibleHTMLProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'
import { TruncateProps, truncate } from '../Text/truncate'

export interface ParagraphProps
  extends TruncateProps,
    SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLParagraphElement> {}

/** @component */
export const Paragraph = styled.h1<ParagraphProps>`
  ${typography}
  ${space}
  ${truncate}
`
