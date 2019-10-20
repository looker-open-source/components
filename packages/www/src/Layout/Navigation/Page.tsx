import { Badge, SidebarItem } from '@looker/components'
import React, { FC, useContext } from 'react'
import { LocationContext } from './LocationContext'
import { NavigationPage } from './types'

interface PageProps {
  page: NavigationPage
  path: string[]
}

export const pathToUri = (path: string[]) => `/${path.join('/')}`

const Page: FC<PageProps> = ({ page, path }) => {
  const currentPath = useContext(LocationContext)
  const uri = pathToUri([...path, page.path])

  return (
    <SidebarItem href={uri} current={currentPath === uri}>
      {page.title}
      {page.detail && <Badge>{page.detail}</Badge>}
    </SidebarItem>
  )
}

export default Page
