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

import { useStaticQuery, graphql, Link } from 'gatsby'
import startCase from 'lodash/startCase'
import { IconButton, Space, Grid } from '@looker/components'
import { ThemeEditor, ThemeEditorProps } from '@looker/components-theme-editor'
import { useLocation } from '@reach/router'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Search } from '../Search'
import { AppLogo } from './AppLogo'

interface HeaderProps extends ThemeEditorProps {
  className?: string
  toggleNavigation: () => void
}

export const HeaderContentLayout: FC<HeaderProps> = ({
  className,
  toggleNavigation,
  updateTheme,
  hasCustomTheme,
}) => {
  const location = useLocation()
  const currentPath = location.pathname

  const data = useStaticQuery(graphql`
    query HeaderNav {
      allMdx(
        filter: { slug: { glob: "*", ne: "utilities/" } }
        sort: { fields: slug }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return (
    <Grid
      alignItems="center"
      columns={3}
      className={className}
      pl="small"
      pr="large"
      width="100%"
      height="100%"
    >
      <Space>
        {currentPath === '/' ? (
          <span />
        ) : (
          <IconButton
            icon="Hamburger"
            size="small"
            label="Toggle navigation"
            onClick={toggleNavigation}
          />
        )}
        <AppLogo />
      </Space>
      <Search />
      <NavigationList>
        <Space as="ul" gap="xlarge" pr="large">
          {data.allMdx.edges.map(({ node: { slug } }) => {
            return (
              <li key={slug}>
                <Link partiallyActive activeClassName="active" to={`/${slug}`}>
                  {startCase(slug)}
                </Link>
              </li>
            )
          })}
        </Space>
        <ThemeEditor
          updateTheme={updateTheme}
          hasCustomTheme={hasCustomTheme}
        />
      </NavigationList>
    </Grid>
  )
}

export const HeaderContent = styled(HeaderContentLayout)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui2};
`

export const NavigationList = styled.nav`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-left: auto;

  ul,
  li {
    height: 100%;
  }

  a {
    align-items: center;
    border-bottom: 4px solid transparent;
    border-top: 4px solid transparent;
    color: ${({ theme }) => theme.colors.text4};
    display: flex;
    height: 100%;
    text-decoration: none;

    &.active {
      border-bottom-color: currentColor;
      color: ${({ theme }) => theme.colors.key};
    }

    &:hover {
      border-bottom-color: currentColor;
      color: ${({ theme }) => theme.colors.keyInteractive};
    }
  }
`
