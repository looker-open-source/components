import styled from 'styled-components'

interface SidebarItemProps {
  current?: boolean
}

export const SidebarItem = styled.a<SidebarItemProps>`
  background-color: ${props =>
    props.current ? props.theme.colors.palette.purple100 : undefined};
  color: ${props =>
    props.current
      ? props.theme.colors.palette.purple700
      : props.theme.colors.palette.charcoal600};
  display: block;
  font-weight: ${props => (props.current ? '600' : undefined)};
`
