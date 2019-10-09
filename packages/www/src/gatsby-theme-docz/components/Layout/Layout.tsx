import React, { useState } from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
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
      <LayoutSidebar>{open && <Sidebar />}</LayoutSidebar>
      <ContentArea>
        <LayoutMain>{children}</LayoutMain>
      </ContentArea>
    </PageLayout>
  )
}

export default Layout
