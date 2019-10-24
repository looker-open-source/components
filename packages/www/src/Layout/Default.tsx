import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import React from 'react'
import { Heading } from '@looker/components'
import Layout, { LayoutMain } from './Layout'

interface PageQuery {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string
      }
    }
  }
}

const DefaultLayout = (props: PageQuery) => {
  const { mdx } = props.data
  const { title } = mdx.frontmatter

  return (
    <Layout>
      <LayoutMain>
        <Heading as="h1" fontSize="xxxxlarge" fontWeight="light">
          {title}
        </Heading>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </LayoutMain>
    </Layout>
  )
}

export default DefaultLayout

export const pageQuery = graphql`
  query BasicPage($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`
