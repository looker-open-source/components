import { MenuItem } from '@looker/components'
import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { LocationContext } from './LocationContext'
import { NavigationPage } from './types'

interface PageProps {
  page: NavigationPage
  path: string[]
  onClick?: () => void
}

export const pathToUri = (path: string[]) => `/${path.join('/')}`

const Page: FC<PageProps> = ({ onClick, page, path }) => {
  const currentPath = useContext(LocationContext)
  const uri = pathToUri([...path, page.path])
  const isCurrent = currentPath === uri

  return page.noLink || page.isMissing || isCurrent ? (
    <NavigationItem
      onClick={onClick}
      itemRole="button"
      detail={page.isMissing ? 'Coming Soon' : undefined}
      disabled={isCurrent && page.isMissing}
      current={isCurrent}
    >
      {page.title}
    </NavigationItem>
  ) : (
    <NavigationItem itemRole="link" onClick={onClick} href={uri}>
      {page.title}
    </NavigationItem>
  )
}

const NavigationItem = styled(MenuItem)`
  display: block;
`

export default Page
