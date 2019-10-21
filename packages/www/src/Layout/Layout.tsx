import React, { FC, useState } from 'react'
import styled from 'styled-components'
import sitemap from '../documentation/sitemap'
import Page from './Page'
import SidebarToggle from './SidebarToggle'
import Navigation from './Navigation'

const Layout: FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleFn = () => setSidebarOpen(!sidebarOpen)

  return (
    <Page>
      <PageLayout open={sidebarOpen}>
        <LayoutSidebar>
          {sidebarOpen && <Navigation sitemap={sitemap} />}
        </LayoutSidebar>
        <SidebarDivider open={sidebarOpen}>
          <SidebarToggle isOpen={sidebarOpen} onClick={toggleFn} />
        </SidebarDivider>
        <ContentArea>{children}</ContentArea>
      </PageLayout>
    </Page>
  )
}

interface SidebarStyleProps {
  open: boolean
}

export const PageLayout = styled.div<SidebarStyleProps>`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: ${({ open }) =>
    open ? '18.75rem 0 1fr' : '1.5rem 0 1fr'};
  grid-template-areas: 'sidebar divider main';
`

const LayoutSidebar = styled.nav`
  grid-area: sidebar;
  overflow-y: auto;
`

const ContentArea = styled.div`
  grid-area: main;
`

export const LayoutMain = styled.main`
  max-width: 70rem;
  overflow: auto;
  margin: 0 auto;
  padding: ${({ theme: { space } }) =>
    `${space.xxlarge} ${space.xxlarge} ${space.xxxxlarge}`};
`

const SidebarDivider = styled.div<SidebarStyleProps>`
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
