import styled from 'styled-components'
import {
  reset,
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
  ${reset}
  ${typography}
  ${space}
`
