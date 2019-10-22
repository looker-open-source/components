import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Heading, Divider, ListItem, Link, List } from '@looker/components'
import { ComponentResources, ComponentStatus, Props } from '../Shared'
import Layout, { LayoutMain } from './Layout'

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
      <Link color="palette.charcoal500" href={url}>
        {title}
      </Link>
    </ListItem>
  ))

  return (
    <>
      <Divider color="palette.charcoal200" my="large" />
      <List>{sections}</List>
    </>
  )
}

const DocumentationLayout = (props: DocQuery) => {
  const { mdx } = props.data
  const { figma, github, propsOf, status, title } = mdx.frontmatter

  return (
    <Layout>
      <Grid>
        <LayoutMain>
          <Heading as="h1" fontSize="xxxxlarge" fontWeight="light">
            {title}
          </Heading>
          {propsOf && <Props of={propsOf} />}
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </LayoutMain>
        <Meta>
          <ComponentStatus status={status || 'stable'} />
          <ComponentResources
            figma={figma}
            feedbackTitle={title}
            github={github}
          />
          <TableOfContents toc={mdx.tableOfContents} />
        </Meta>
      </Grid>
    </Layout>
  )
}

export default DocumentationLayout

const Meta = styled.div`
  padding: ${props => props.theme.space.large};
  height: 100%;
  background: ${props => props.theme.colors.palette.charcoal000};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 18rem;
  grid-template-rows: 1fr;

  height: 100vh;
`

export const pageQuery = graphql`
  query Doc($id: String) {
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
