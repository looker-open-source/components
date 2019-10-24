import { lighten } from 'polished'
import { Location } from '@reach/router'
import { Box, Sidebar } from 'looker-lens'
import styled from 'styled-components'
import React, { FC } from 'react'
import Section from './Section'
import { LocationContext } from './LocationContext'
import { NavigationSection } from './types'
import Header from './Header'

interface NavigationProps {
  sitemap: NavigationSection[]
}

const Navigation: FC<NavigationProps> = ({ sitemap }) => (
  <StyledSidebar>
    <Header />
    <Box p="large">
      <Location>
        {({ location }) => (
          <LocationContext.Provider value={location.pathname}>
            {sitemap.map(chapter => (
              <Section key={chapter.path} section={chapter} />
            ))}
          </LocationContext.Provider>
        )}
      </Location>
    </Box>
  </StyledSidebar>
)

const StyledSidebar = styled(Sidebar).attrs({ p: 'none' })`
  background: ${props => lighten(0.01, props.theme.colors.palette.purple000)};
  height: 100%;
`

export default Navigation
