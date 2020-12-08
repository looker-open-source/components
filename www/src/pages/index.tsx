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

import {
  Box,
  Code,
  Grid,
  Flex,
  Heading,
  Icon,
  Link,
  Paragraph,
  Section,
} from '@looker/components'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from '../Layout'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}

const Intro = () => {
  const { title } = useSiteMetadata()
  return (
    <>
      <Helmet title={title} />
      <Layout>
        <Section as="main" p="xxlarge">
          <Heading as="h1" fontWeight="semiBold" textAlign="center" mb="large">
            Looker UI Components
          </Heading>
          <Heading as="h2" textAlign="center" mb="xxxlarge">
            A collection of tools for building Looker data experiences.
          </Heading>

          <Grid columns={3}>
            <Flex flexDirection="column" alignItems="center">
              <Box mb="medium">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  width="44px"
                  height="44px"
                  bg="rgba(152, 131, 230, 0.2)"
                  borderRadius="50%"
                >
                  <svg
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.79199 15.6797L6.79199 0.166748L4.20866 0.166748L4.20866 15.6797L0.333658 15.6797L5.50032 20.8334L10.667 15.6797L6.79199 15.6797Z"
                      fill="#6C43E0"
                    />
                  </svg>
                </Flex>
              </Box>
              <Heading as="h4" fontSize="large" fontWeight="semiBold">
                Install
              </Heading>
              <Paragraph fontSize="small">
                Visit <Link href="/getting-started/">Getting Started</Link> for
                instructions on installing{' '}
                <Code fontSize="small">@looker/components</Code>
              </Paragraph>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Box mb="medium">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  width="44px"
                  height="44px"
                  bg="rgba(0, 135, 225, 0.1)"
                  borderRadius="50%"
                >
                  <Icon name="CircleExplore" color="#0087E1" />
                </Flex>
              </Box>
              <Heading as="h4" fontSize="large" fontWeight="semiBold">
                Explore
              </Heading>
              <Paragraph fontSize="small">
                Search or browse through the component listing on this site. You
                can use the interactive prompts to compose whole components
                right in on this web site.
              </Paragraph>
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Box mb="medium">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  width="44px"
                  height="44px"
                  bg="rgba(255, 202, 98, 0.2)"
                  borderRadius="50%"
                >
                  <Icon name="Undo" color="#FFA800" />
                </Flex>
              </Box>
              <Heading as="h4" fontSize="large" fontWeight="semiBold">
                Contribute
              </Heading>
              <Paragraph fontSize="small">
                Want something you don&apos;t see here? Follow the contribution
                guidelines and best practices, then open a Pull Request on the
                Github repository.
              </Paragraph>
            </Flex>
          </Grid>
        </Section>
      </Layout>
    </>
  )
}

export default Intro
