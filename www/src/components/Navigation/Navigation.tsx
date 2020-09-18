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

import groupBy from 'lodash/groupBy'
import map from 'lodash/map'
import startCase from 'lodash/startCase'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import React, { FC } from 'react'
import {
  Aside,
  AsideProps,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@looker/components'
import { Section } from './Section'
import { useSitemap } from './useSitemap'
import { NavigationPage } from './types'

interface NavigationProps extends AsideProps {
  className?: string
}

function groupComponents(pages: NavigationPage[]) {
  const groups = groupBy(
    pages,
    ({ path }) => path.replace('components/', '').split('/')[0]
  )

  return map(groups, (group, groupKey) => {
    if (group.length === 1) {
      return group[0]
    }
    const groupKeyArr = groupKey.split('/')
    const groupName = groupKeyArr[groupKeyArr.length - 1]
    return { children: group, path: groupKey, title: startCase(groupName) }
  }).sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
}

const NavigationLayout: FC<NavigationProps> = (props) => {
  const location = useLocation()
  const sectionPath = location.pathname.split('/')[1]
  const title = startCase(sectionPath)
  const pages = useSitemap()[sectionPath]

  if (!pages) return null

  const section = (
    <Section
      section={{
        children: pages,
        path: sectionPath,
        title,
      }}
    />
  )

  const content =
    sectionPath === 'components' ? (
      <Tabs>
        <TabList px="xlarge" distribute>
          <Tab>Grouped</Tab>
          <Tab>A-Z</Tab>
        </TabList>
        <TabPanels pt="small">
          <TabPanel>
            <Section
              section={{
                children: groupComponents(pages),
                path: sectionPath,
                title,
              }}
            />
          </TabPanel>
          <TabPanel>{section}</TabPanel>
        </TabPanels>
      </Tabs>
    ) : (
      <>{section}</>
    )

  return (
    <Aside as="nav" {...props}>
      <Heading as="h3" mb="medium" py="large" px="xlarge" fontFamily="body">
        {title}
      </Heading>
      {content}
    </Aside>
  )
}

export const Navigation = styled(NavigationLayout)`
  border-right: 1px solid ${({ theme }) => theme.colors.ui2};
  height: 100%;

  & > ${Heading} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  }
`
