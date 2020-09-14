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
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import {
  Main,
  Layout,
  Aside,
  Heading,
  Divider,
  ListItem,
  Link,
  List,
} from '@looker/components'
import { ComponentResources, ComponentStatus, Props } from '../Shared'
import { AppLayout } from './AppLayout'

interface TableOfContents {
  items?: [
    {
      url: string
      title: string
    }
  ]
}

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
      tableOfContents?: TableOfContents
    }
  }
}

const TableOfContents: FC<{ toc?: TableOfContents }> = ({ toc }) => {
  if (!toc || !toc.items) return null

  const sections = toc.items.map(({ url, title }) => (
    <ListItem fontSize="small" key={url} my="medium">
      <Link color="neutralInteractive" href={url}>
        {title}
      </Link>
    </ListItem>
  ))

  return (
    <>
      <Divider color="ui2" my="large" />
      <List>{sections}</List>
    </>
  )
}

const DocumentationLayout = (props: DocQuery) => {
  const { mdx, site } = props.data
  const { figma, github, propsOf, status, title } = mdx.frontmatter

  return (
    <>
      <Helmet title={`${title} - ${site.siteMetadata.title}`} />
      <AppLayout>
        <Layout hasAside>
          <Main>
            <Heading as="h1" fontSize="xxxxlarge" fontWeight="light">
              {title}
            </Heading>
            {propsOf && <Props of={propsOf} />}
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Main>
          <Aside background="neutralSubtle" width="17rem">
            <ComponentStatus status={status || 'stable'} />
            <ComponentResources
              figma={figma}
              feedbackTitle={title}
              github={github}
            />
            <TableOfContents toc={mdx.tableOfContents} />
          </Aside>
        </Layout>
      </AppLayout>
    </>
  )
}

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
