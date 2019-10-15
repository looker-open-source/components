import React, { useState } from 'react'
import styled from 'styled-components'
import { Header } from '../Header'
import Navigation from '../../../components/Navigation'
import sitemap from '../../../documentation/sitemap'
import SidebarToggle from '../SidebarToggle'

const Layout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleFn = () => setSidebarOpen(!sidebarOpen)

  return (
    <PageLayout open={sidebarOpen}>
      <TopBar>
        <Header />
      </TopBar>
      <LayoutSidebar>
        {sidebarOpen && <Navigation sitemap={sitemap} />}
      </LayoutSidebar>
      <SidebarDivider open={sidebarOpen}>
        <SidebarToggle isOpen={sidebarOpen} onClick={toggleFn} />
      </SidebarDivider>
      <ContentArea>
        <LayoutMain>{children}</LayoutMain>
      </ContentArea>
    </PageLayout>
  )
}

interface SidebarStyleProps {
  open: boolean
}

export const PageLayout = styled.div<SidebarStyleProps>`
  height: 100vh;
  display: grid;
  grid-template-rows: 3.5rem calc(100vh - 3.5rem);
  grid-template-columns: ${({ open }) =>
    open ? '18.75rem 0 1fr' : '1.5rem 0 1fr'};
  grid-template-areas:
    'head head head'
    'sidebar divider main';
`

export const TopBar = styled.header`
  grid-area: head;
  border-bottom: 1px solid ${props => props.theme.colors.palette.charcoal200};
`

export const LayoutSidebar = styled.nav`
  grid-area: sidebar;
  overflow-y: auto;
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

export const SidebarDivider = styled.div<SidebarStyleProps>`
  transition: border 0.3s;
  border-left: 1px solid
    ${({ theme, open }) =>
      open ? theme.colors.palette.charcoal200 : 'transparent'};
  grid-area: divider;
  overflow: visible;
  position: relative;
  &:hover {
    border-left: 1px solid
      ${({ theme, open }) =>
        open
          ? theme.colors.palette.charcoal300
          : theme.colors.palette.charcoal200};
  }
`

export default Layout
