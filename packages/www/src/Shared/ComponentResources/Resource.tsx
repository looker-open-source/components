/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React, { FC } from 'react'
import styled from 'styled-components'
import { Link, ListItem } from '@looker/components'

const Resource: FC<{ url: string }> = ({ children, url }) => (
  <Link href={url} target="_blank" rel="noopener noreferrer">
    <Style>{children}</Style>
  </Link>
)

const Style = styled(ListItem).attrs({
  fontSize: 'small',
  py: 'xsmall',
})`
  align-items: center;
  color: ${props => props.theme.colors.palette.charcoal500};
  display: flex;

  svg {
    margin-right: ${props => props.theme.space.xsmall};
    width: 1.5rem;
    transition: ${props =>
      `transform ${props.theme.transitions.durationModerate} ${props.theme.easings.easeOut}`};
  }

  &:hover {
    color: ${props => props.theme.colors.palette.charcoal600};
    text-decoration: none;

    svg {
      transform: scale(1.2);
    }
  }
`

export default Resource
