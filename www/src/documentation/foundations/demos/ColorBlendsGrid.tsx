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

import React from 'react'
import styled from 'styled-components'
import { Code, Grid } from '@looker/components'
import {
  ColorKey,
  StatefulColorGroups,
} from '@looker/design-tokens/src/color/utils/colorBreakdown'

const BlendColor = styled(
  ({ name, color, ...props }: { color: string; name: string }) => (
    <Code fontSize="xsmall" {...props}>
      {name}
    </Code>
  )
)`
  align-items: center;
  display: flex;

  &::before {
    background: ${({ color }) => color};
    border: 1px solid ${({ theme }) => theme.colors.ui3};
    border-bottom: none;
    content: ' ';
    display: block;
    flex-shrink: 0;
    height: 2.5rem;
    margin-right: ${({ theme }) => theme.space.u4};
    width: 5rem;
  }
`

type BlendListProps = {
  colors: ColorKey
}

const BlendList = styled(({ colors, ...props }: BlendListProps) => (
  <div {...props}>
    {Object.entries(colors).map(([name, color]) => (
      <BlendColor name={name} color={color} key={name} />
    ))}
  </div>
))`
  display: flex;
  flex-direction: column;

  *:first-child::before {
    border-radius: 4px 4px 0 0;
  }

  *:last-child::before {
    border-bottom: solid 1px ${(props) => props.theme.colors.ui3};
    border-radius: 0 0 4px 4px;
  }
`

const BlendGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
`

export const ColorBlendsGrid = ({
  statefulColorGroups,
}: {
  statefulColorGroups: StatefulColorGroups
}) => (
  <BlendGrid gap="u5" maxWidth={1000}>
    {statefulColorGroups.map((group, index) => (
      <BlendList colors={group} key={index} />
    ))}
  </BlendGrid>
)
