import styled from 'styled-components'
import { reset, space, SpaceProps } from '@looker/design-tokens'

export const PopoverContent = styled.div<SpaceProps>`
  ${reset}
  ${space}
`

PopoverContent.defaultProps = { p: 'small' }
