import { lighten } from 'polished'
import { Location } from '@reach/router'
import { Box, Sidebar, SidebarProps, SidebarGroup } from 'looker-lens'
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
    <Box>
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

const StyledSidebar = styled(Sidebar)<SidebarProps>`
  background: ${props => lighten(0.6, props.theme.colors.palette.purple000)};
  height: 100%;

  /* stylelint-disable max-nesting-depth */
  h2 {
    color: ${props => props.theme.colors.palette.purple700};
  }

  ${SidebarGroup} {
    border-bottom: solid 1px ${props => props.theme.colors.palette.purple100};
    cursor: pointer;
    padding: ${props =>
      `${props.theme.space.xsmall} ${props.theme.space.large}`};
    ${SidebarGroup} {
      border: none;
      padding: ${props => `${props.theme.space.xxsmall} 0`};

      h2 {
        color: ${props => props.theme.colors.palette.charcoal500};
        font-size: ${props => props.theme.fontSizes.xsmall};
        text-transform: uppercase;
      }

      svg {
        display: none;
      }
    }

    a {
      border-radius: 4px;
      font-size: ${props => props.theme.fontSizes.small};
      padding: ${props =>
        `${props.theme.space.xsmall} ${props.theme.space.small}`};

      &:hover {
        background-color: ${props => props.theme.colors.palette.purple000};
      }
    }
    /* stylelint-enable max-nesting-depth */
  }
`

export default Navigation
