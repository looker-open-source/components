/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import styled from 'styled-components'
import React from 'react'
import { Code, Grid } from '@looker/components'
import { colorBreakdown, theme } from '@looker/design-tokens'

type ColorSwatchProps = {
  name: string
  color: string
}

const ColorSwatch = styled(({ name, color, ...props }: ColorSwatchProps) => (
  <Code fontSize="xsmall" {...props}>
    {name}
  </Code>
))`
  &::before {
    background: ${({ color }) => color};
    border: 1px solid ${({ theme }) => theme.colors.ui3};
    border-radius: ${({ theme }) => theme.radii.medium};
    content: '';
    display: block;
    height: 4rem;
    margin-bottom: ${({ theme }) => theme.space.u2};
    width: 100%;
  }
`

const ColorListGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`

type ColorListProps = {
  colorKey:
    | 'core'
    | 'derivative'
    | 'intent'
    | 'specializedText'
    | 'stateful'
    | 'text'
    | 'ui'
}

export const ColorList = ({ colorKey }: ColorListProps) => {
  const breakdown = colorBreakdown(theme.colors)
  const colors = breakdown.divided[colorKey] || {}
  return (
    <ColorListGrid gap="u5" maxWidth={600} pt="medium" pb="xxlarge">
      {Object.entries(colors).map(([title, color], key) => (
        <ColorSwatch name={title} color={color} key={key} />
      ))}
    </ColorListGrid>
  )
}
