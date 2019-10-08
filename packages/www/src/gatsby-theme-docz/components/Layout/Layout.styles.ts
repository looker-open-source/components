import styled from 'styled-components'

export const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 3.5rem calc(100vh - 3.5rem);
  grid-template-columns: 18.75rem 1fr;
  grid-template-areas:
    'head head'
    'sidebar main';
`

export const TopBar = styled.header`
  grid-area: head;
  border-bottom: 1px solid ${props => props.theme.colors.palette.charcoal200};
`

export const LayoutSidebar = styled.nav`
  grid-area: sidebar;
  background: ${props => props.theme.colors.palette.charcoal100};
  padding: ${props => props.theme.space.small};
  border-right: 1px solid ${props => props.theme.colors.palette.charcoal200};
  overflow: auto;
`

export const ContentArea = styled.div`
  grid-area: main;
  overflow: auto;
`

export const LayoutMain = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: ${({ theme: { space } }) =>
    `${space.xxlarge} ${space.xxlarge} ${space.xxxxlarge}`};
`
