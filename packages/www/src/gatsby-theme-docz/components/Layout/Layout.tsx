import React, { useState } from 'react'
import { Header } from '../Header'
import Navigation from '../../../components/Navigation'
import sitemap from '../../../documentation/sitemap'
import {
  PageLayout,
  LayoutSidebar,
  LayoutMain,
  ContentArea,
  TopBar,
} from './Layout.styles'

const Layout: React.FC = ({ children }) => {
  const [open] = useState(true)

  return (
    <PageLayout>
      <TopBar>
        <Header />
      </TopBar>
      <LayoutSidebar>{open && <Navigation sitemap={sitemap} />}</LayoutSidebar>
      <ContentArea>
        <LayoutMain>{children}</LayoutMain>
      </ContentArea>
    </PageLayout>
  )
}

export default Layout
