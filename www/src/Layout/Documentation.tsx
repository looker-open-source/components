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

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import {
  useTabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels,
  Heading,
  Icon,
  Link,
  Space,
  Text,
} from '@looker/components'
import { Status } from '../components'
import { Layout } from './Layout'

const githubBase =
  'https://github.com/looker-open-source/components/blob/master/packages/components/src/'

const isDev = false

const storybookLink = (component: string) =>
  isDev
    ? `http://lukebowerman.c.googlers.com:3333/iframe.html?id=${component.toLowerCase()}&viewMode=docs`
    : `/storybook/iframe.html?id=${component.toLowerCase()}&viewMode=docs`

interface DocQuery {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    mdx: {
      body: string
      frontmatter: {
        title: string
        description?: string
        github?: string
        status?: 'experimental' | 'stable' | 'deprecated'
        storybook?: boolean
      }
    }
  }
}

const DocumentationLayout = (props: DocQuery) => {
  const { mdx, site } = props.data
  const { github, status, /* storybook, */ title } = mdx.frontmatter

  const storybook = true
  const tab = useTabs()
  const body = <MDXRenderer>{mdx.body}</MDXRenderer>

  return (
    <>
      <Helmet title={`${title} - ${site.siteMetadata.title}`} />
      <Layout>
        <Space>
          <Heading as="h1" fontSize="xxxxxlarge">
            {title}
          </Heading>
          <Status status={status || 'stable'} />
        </Space>

        <CustomTabs>
          {storybook && (
            <TabList {...tab}>
              <Tab>Overview</Tab>
              <Tab>
                Storybook{' '}
                <Text fontSize="xsmall" variant="subdued" fontWeight="normal">
                  Props &amp; Examples
                </Text>
              </Tab>
            </TabList>
          )}
          <Space width="auto" ml="auto" gap="xsmall">
            <Link
              fontSize="small"
              href={`${githubBase}${github}`}
              target="_blank"
            >
              View source
            </Link>
            <Text fontSize="xsmall" variant="subdued" fontWeight="normal">
              <Icon name="External" size=".75rem" /> Github
            </Text>
          </Space>
        </CustomTabs>
        {storybook ? (
          <TabPanels {...tab}>
            <TabPanel>{body}</TabPanel>
            {storybook && (
              <TabPanel>
                <Iframe src={storybookLink(title)} />
              </TabPanel>
            )}
          </TabPanels>
        ) : (
          body
        )}
      </Layout>
    </>
  )
}

const Iframe = styled.iframe`
  border: none;
  height: 120rem;
  width: 100%;
`

const CustomTabs = styled(Space)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  display: flex;
  margin-top: ${({ theme }) => theme.space.small};
  min-height: ${({ theme }) => theme.space.large};

  ${TabList} {
    margin-bottom: -1px;
    margin-top: ${({ theme }) => theme.space.xsmall};
  }
`

export default DocumentationLayout

export const pageQuery = graphql`
  query Doc($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        figma
        github
        propsOf
        status
        title
      }
      tableOfContents(maxDepth: 2)
    }
  }
`
