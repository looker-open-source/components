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

import { lighten } from 'polished'
import { Location } from '@reach/router'
import { Box, Sidebar, SidebarProps, SidebarGroup } from '@looker/components'
import styled from 'styled-components'
import React, { FC } from 'react'
import Section from './Section'
import { LocationContext } from './LocationContext'
import { NavigationSection } from './types'
import Header from './Header'

interface NavigationProps {
  sitemap: NavigationSection[]
  headerHeight: string
}

const Navigation: FC<NavigationProps> = ({ sitemap, headerHeight }) => (
  <StyledSidebar>
    <Header height={headerHeight} />
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
