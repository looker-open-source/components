import styled from 'styled-components'
import { reset, space, SpaceProps } from 'looker-design-tokens'

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface SidebarProps extends SpaceProps {
  // This interface will get some actual props later
}

export const Sidebar = styled.nav<SidebarProps>`
  ${reset}
  ${space}
`
