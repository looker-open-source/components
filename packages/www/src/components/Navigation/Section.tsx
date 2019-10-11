import React, { FC, useContext, useState } from 'react'
import styled from 'styled-components'
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
  const isCurrentSection = currentPath.startsWith(pathToUri(sectionPath))

  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)
    return false
  }

  const showChildren = isCurrentSection || isOpen

  const navigationChildren =
    section.children &&
    section.children.map(child => (
      <Section
        key={pathToUri([...path, child.path])}
        path={sectionPath}
        section={child as NavigationSection}
      />
    ))

  return (
    <NavGroup>
      <Page onClick={toggle} path={path} page={section} />
      {showChildren && navigationChildren}
    </NavGroup>
  )
}

const NavGroup = styled.div`
  margin: 0 1rem;
`

export default Section
