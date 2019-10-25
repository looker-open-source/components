import styled from 'styled-components'
import { color, reset, typography } from 'looker-design-tokens'

interface SidebarItemProps {
  current?: boolean
}

export const SidebarItem = styled.a.attrs(({ current }: SidebarItemProps) => ({
  backgroundColor: current && 'palette.purple100',
  color: current ? 'palette.purple700' : 'palette.charcoal600',
  fontWeight: current && 'semiBold',
}))<SidebarItemProps>`
  ${reset}
  ${typography}
  ${color}
  display: block;
`
