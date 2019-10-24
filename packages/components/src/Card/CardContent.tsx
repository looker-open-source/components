import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
} from 'looker-design-tokens'

export interface CardContentProps
  extends SpaceProps,
    CompatibleHTMLProps<HTMLDivElement> {}

export const CardContent = styled.div<CardContentProps>`
  ${reset}
  ${space}
`

CardContent.defaultProps = { p: 'medium' }
