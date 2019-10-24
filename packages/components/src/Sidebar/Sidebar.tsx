import styled from 'styled-components'
import { reset, space, SpaceProps } from 'looker-design-tokens'

export const Sidebar = styled.nav<SpaceProps>`
  ${reset}
  ${space}
`

Sidebar.defaultProps = { p: 'medium' }
