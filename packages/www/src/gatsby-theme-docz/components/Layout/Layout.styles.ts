import styled from 'styled-components'

export const PageLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 3.5rem calc(100vh - 3.5rem);
`

export const LowerPane = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 18.75rem 1fr;
`

export const LayoutSidebar = styled.nav`
  background: ${props => props.theme.colors.palette.charcoal100};
  padding: ${props => props.theme.space.small};
  border-right: 1px solid ${props => props.theme.colors.palette.charcoal200};
  height: 100%;
  overflow: auto;
`

export const LayoutMain = styled.main`
  height: 100%;
  padding: ${props => props.theme.space.large}
    ${props => props.theme.space.xxlarge};
  overflow: auto;
`
