import styled from 'styled-components'
import {
  typography,
  space,
  CompatibleHTMLProps,
  SpaceProps,
  TypographyProps,
} from '@looker/design-tokens'

export interface CodeProps
  extends SpaceProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLElement> {}

/** @component */
export const Code = styled.code<CodeProps>`
  ${typography}
  ${space}
`
