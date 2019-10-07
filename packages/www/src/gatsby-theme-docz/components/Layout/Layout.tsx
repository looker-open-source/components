import React, { useState } from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import {
  PageLayout,
  LowerPane,
  LayoutSidebar,
  LayoutMain,
} from './Layout.styles'

export const Layout: React.FC = ({ children }) => {
  const [open] = useState(true)

  return (
    <PageLayout>
      <Header />
      <LowerPane>
        <LayoutSidebar>{open && <Sidebar />}</LayoutSidebar>
        <LayoutMain>{children}</LayoutMain>
      </LowerPane>
    </PageLayout>
  )
}
