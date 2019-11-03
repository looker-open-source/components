/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { FC, useState } from 'react'
import styled from 'styled-components'
import sitemap from '../documentation/sitemap'
import Page from './Page'
import SidebarToggle from './SidebarToggle'
import Navigation from './Navigation'

const Layout: FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const toggleFn = () => setSidebarOpen(!sidebarOpen)

  const sidebarHeaderHeight = '5rem'

  return (
    <Page>
      <PageLayout open={sidebarOpen}>
        <LayoutSidebar>
          {sidebarOpen && (
            <Navigation sitemap={sitemap} headerHeight={sidebarHeaderHeight} />
          )}
        </LayoutSidebar>
        <SidebarDivider open={sidebarOpen}>
          <SidebarToggle
            isOpen={sidebarOpen}
            onClick={toggleFn}
            headerHeight={sidebarHeaderHeight}
          />
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
  max-width: 50rem;
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
