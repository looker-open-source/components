import React, { FC, useContext } from 'react'
import { SidebarGroup } from '@looker/components'
import { NavigationSection } from './types'
import Page, { pathToUri } from './Page'
import { LocationContext } from './LocationContext'

interface SectionProps {
  section: NavigationSection
  path?: string[]
}

const Section: FC<SectionProps> = ({ path = [], section }) => {
  const currentPath = useContext(LocationContext)
  const sectionPath = [...path, section.path]

  const navigationChildren = section.children.map(child => {
    const uri = pathToUri([...path, child.path])

    return (child as NavigationSection).children ? (
      <Section
        key={uri}
        section={child as NavigationSection}
        path={sectionPath}
      />
    ) : (
      <Page key={uri} path={sectionPath} page={child} />
    )
  })

  return (
    <SidebarGroup
      label={section.title}
      showChildren={currentPath.startsWith(pathToUri(sectionPath))}
    >
      {navigationChildren}
    </SidebarGroup>
  )
}

export default Section
