import styled from 'styled-components'

interface SidebarItemProps {
  current?: boolean
}

export const SidebarItem = styled.a<SidebarItemProps>`
  background-color: ${props =>
    props.current ? props.theme.colors.palette.blue200 : undefined};

  display: block;
`
