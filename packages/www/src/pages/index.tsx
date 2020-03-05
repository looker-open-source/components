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
  Flex,
  FlexItem,
  Heading,
  Icon,
  Link,
  Text,
  Paragraph,
} from '@looker/components'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../Layout'
import { LayoutMain } from '../Layout/Layout'

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
    <Layout>
      <Helmet title={title} />
      <LayoutMain>
        <Flex flexDirection="column" alignItems="center">
          <FlexItem my="large">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="35.4822"
                cy="13.5172"
                rx="13.5178"
                ry="13.5172"
                fill="#4C33AA"
              />
              <ellipse
                cx="21.9662"
                cy="27.0345"
                rx="21.9664"
                ry="21.9654"
                fill="#7E64E0"
                fillOpacity="0.8"
              />
            </svg>
          </FlexItem>
          <Heading fontWeight="semiBold" fontSize="xxxxlarge">
            Looker UI Components
          </Heading>
          <Box my="large">
            <Text fontSize="xlarge">
              A collection of tools for building Looker data experiences.
            </Text>
          </Box>
        </Flex>
        <Box my="xlarge">
          <Box height="8px" bg="#F4F6F7" />
        </Box>
        <Box>
          <GridWrapper>
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
                  <Icon name="CircleExplore" size="24" color="#0087E1" />
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
                  <Icon name="Undo" size={24} color="#FFA800" />
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
          </GridWrapper>
        </Box>
      </LayoutMain>
    </Layout>
  )
}

export default Intro

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`
