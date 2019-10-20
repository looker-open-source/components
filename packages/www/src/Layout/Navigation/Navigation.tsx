import { Location } from '@reach/router'
import { Sidebar } from '@looker/components'
import React, { FC } from 'react'
import Section from './Section'
import { LocationContext } from './LocationContext'
import { NavigationSection } from './types'

interface NavigationProps {
  sitemap: NavigationSection[]
}

const Navigation: FC<NavigationProps> = ({ sitemap }) => (
  <Sidebar>
    <Location>
      {({ location }) => (
        <LocationContext.Provider value={location.pathname}>
          {sitemap.map(chapter => (
            <Section key={chapter.path} section={chapter} />
          ))}
        </LocationContext.Provider>
      )}
    </Location>
  </Sidebar>
)

export default Navigation
