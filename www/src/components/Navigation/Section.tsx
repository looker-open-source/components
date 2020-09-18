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

import React, { FC } from 'react'
import { useLocation } from '@reach/router'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  Heading,
} from '@looker/components'
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
        <Accordion
          key={child.path}
          indicatorColor="text1"
          indicatorIcons={{ close: 'CaretUp', open: 'CaretDown' }}
          defaultOpen={currentPath.startsWith(`/components/${uri}`)}
        >
          <AccordionDisclosure px="xlarge">
            <Heading variant="secondary" as="h4" fontFamily="body">
              {child.title}
            </Heading>
          </AccordionDisclosure>
          <AccordionContent>
            <PageList>
              <Section section={child as NavigationSection} />
            </PageList>
          </AccordionContent>
        </Accordion>
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
`
