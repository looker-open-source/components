/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { Location } from '@reach/router'
import styled from 'styled-components'
import React, { FC } from 'react'
import {
  Accordion,
  AccordionDisclosure,
  Link,
  ListItem,
} from '@looker/components'
import Section from './Section'
import { LocationContext } from './LocationContext'
import { NavigationSection } from './types'

interface NavigationProps {
  className?: string
  sitemap: NavigationSection[]
}

const NavigationLayout: FC<NavigationProps> = ({ className, sitemap }) => (
  <nav className={className}>
    <Location>
      {({ location }) => (
        <LocationContext.Provider value={location.pathname}>
          {sitemap.map((chapter) => (
            <Section key={chapter.path} section={chapter} />
          ))}
        </LocationContext.Provider>
      )}
    </Location>
  </nav>
)

export const Navigation = styled(NavigationLayout)`
  border-right: 1px solid ${({ theme }) => theme.colors.ui2};
  height: 100%;

  ${Accordion} {
    border-bottom: solid 1px ${({ theme }) => theme.colors.keyAccent};
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme: { space } }) => `${space.xsmall} ${space.large}`};

    ${AccordionDisclosure} {
      color: ${({ theme }) => theme.colors.keyPressed};
    }

    ${Link} {
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.text2};
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      text-decoration: none;
    }

    ${ListItem} {
      border: none;
      padding: ${({ theme }) => `${theme.space.xsmall} ${theme.space.small}`};

      &:hover {
        background-color: ${({ theme }) => theme.colors.keySubtle};
      }
      &:active {
        ${Link} {
          color: ${({ theme }) => theme.colors.keyPressed};
          font-weight: ${({ theme }) => theme.fontWeights.semiBold};
        }
      }
    }
  }
`
