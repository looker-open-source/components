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
  Heading,
  Icon,
  Layout,
  Link,
  Space,
  Section,
  Text,
} from '@looker/components'
import {
  Status,
  // Props,
  // TableOfContents,
  TableOfContentsProps,
} from '../components'
import { AppLayout } from './AppLayout'

const githubBase =
  'https://github.com/looker-open-source/components/blob/master/packages/components/src/'

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
        github?: string
        status?: 'experimental' | 'stable' | 'deprecated'
        figma?: string
        propsOf?: string
      }
      tableOfContents?: TableOfContentsProps
    }
  }
}

const DocumentationLayout = (props: DocQuery) => {
  const { mdx, site } = props.data
  const { github, status, title } = mdx.frontmatter

  return (
    <>
      <Helmet title={`${title} - ${site.siteMetadata.title}`} />
      <AppLayout>
        <Heading as="h1" fontSize="xxxxxlarge">
          {title}
        </Heading>
        <ComponentDetail my="medium" py="medium">
          <Status status={status || 'stable'} />

          <Link
            fontSize="small"
            href={`${githubBase}${github}`}
            target="_blank"
          >
            View source{' '}
            <Text fontSize="xsmall" variant="secondary">
              <Icon name="External" size=".75rem" /> Github
            </Text>
          </Link>

          {/* <Props of={propsOf} /> */}
        </ComponentDetail>

        {/* <TableOfContents toc={mdx.tableOfContents} /> */}

        <MDXRenderer>{mdx.body}</MDXRenderer>
      </AppLayout>
    </>
  )
}

const ComponentDetail = styled(Space)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
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
