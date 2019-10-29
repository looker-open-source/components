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

import React, { FC, useContext } from 'react'
import { SidebarGroup } from 'looker-lens'
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
