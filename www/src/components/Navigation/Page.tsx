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

import { Badge } from '@looker/components'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'
import React, { FC } from 'react'
import { NavigationPage } from './types'

interface PageProps {
  className?: string
  page: NavigationPage
}

export const pathToUri = (path: string[]) =>
  withPrefix(`/${path.join('/').replace('//', '/')}`)

const PageLayout: FC<PageProps> = ({ className, page }) => {
  return (
    <li className={className}>
      <Link to={`/${page.path}`} partiallyActive activeClassName="active">
        {page.title}
        {page.detail && <Badge>{page.detail}</Badge>}
      </Link>
    </li>
  )
}

export const Page = styled(PageLayout)`
  a {
    border-radius: ${({ theme }) => theme.radii.medium};
    color: ${({ theme }) => theme.colors.link};
    display: block;
    padding: ${({ theme: { space } }) => `${space.xsmall} ${space.xlarge}`};

    &:hover {
      background: ${({ theme }) => theme.colors.ui1};
      color: ${({ theme }) => theme.colors.linkInteractive};
    }

    &[aria-current='page'] {
      color: ${({ theme }) => theme.colors.text4};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    }
  }
`
