/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React, { FC } from 'react'
import { useLocation } from '@reach/router'
import { Accordion2, Heading } from '@looker/components'
import styled from 'styled-components'
import { NavigationSection } from './types'
import { Page } from './Page'

interface SectionProps {
  section: NavigationSection
}

export const Section: FC<SectionProps> = ({ section }) => {
  const location = useLocation()
  const currentPath = location.pathname

  const navigationItems = section.children.map((child) => {
    const uri = child.path

    if ((child as NavigationSection).children) {
      return (
        <Accordion2
          key={child.path}
          defaultOpen={currentPath.includes(`/components/${uri}`)}
          label={
            <Heading py="xsmall" px="large" as="h4" fontFamily="body">
              {child.title}
            </Heading>
          }
        >
          <PageList>
            <Section section={child as NavigationSection} />
          </PageList>
        </Accordion2>
      )
    } else {
      return <Page key={uri} page={child} />
    }
  })

  return <PageList>{navigationItems}</PageList>
}

const PageList = styled.ul`
  font-size: ${({ theme }) => theme.fontSizes.small};
  list-style-type: none;
  padding: 0 ${({ theme }) => theme.space.u2} 0 0;
`
