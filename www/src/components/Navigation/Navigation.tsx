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

import startCase from 'lodash/startCase'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import React, { FC } from 'react'
import { Aside, AsideProps, Heading } from '@looker/components'
import { Section } from './Section'
import { useSitemap } from './useSitemap'

interface NavigationProps extends AsideProps {
  className?: string
}

const NavigationLayout: FC<NavigationProps> = (props) => {
  const location = useLocation()
  const sectionPath = location.pathname.split('/')[1]
  const title = startCase(sectionPath)
  const pages = useSitemap()[sectionPath]

  return pages ? (
    <Aside as="nav" {...props} py="xlarge">
      <Heading as="h3" px="xlarge" mb="medium" fontFamily="body">
        {title}
      </Heading>
      <Section
        section={{
          children: pages,
          path: sectionPath,
          title,
        }}
      />
    </Aside>
  ) : null
}

export const Navigation = styled(NavigationLayout)`
  border-right: 1px solid ${({ theme }) => theme.colors.ui2};
  height: 100%;
`
