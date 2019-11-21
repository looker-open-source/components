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

import { Heading, HeadingProps } from '@looker/components'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

const generateHeadingAnchor = (children?: ReactNode) => {
  return (children as string).toLowerCase().replace(/\s/g, '-')
}

const StyledHeading = styled(Heading).attrs((props: HeadingProps) => {
  return {
    mb: 'medium',
    lineHeight: 'xlarge',
    fontWeight: 'semiBold',
    id: generateHeadingAnchor(props.children),
  }
})``

export const h1: FC = ({ children }) => (
  <StyledHeading as="h1" fontSize="xxlarge" fontWeight="light">
    {children}
  </StyledHeading>
)
export const h2: FC = ({ children }) => (
  <StyledHeading as="h2">{children}</StyledHeading>
)
export const h3: FC = ({ children }) => (
  <StyledHeading as="h3">{children}</StyledHeading>
)
export const h4: FC = ({ children }) => (
  <StyledHeading as="h4">{children}</StyledHeading>
)
export const h5: FC = ({ children }) => (
  <StyledHeading as="h5">{children}</StyledHeading>
)
export const h6: FC = ({ children }) => (
  <StyledHeading as="h6">{children}</StyledHeading>
)
