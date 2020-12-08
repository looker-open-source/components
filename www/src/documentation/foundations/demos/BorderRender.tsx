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

import React, { FC } from 'react'
import { Box, Heading, Code } from '@looker/components'
import styled from 'styled-components'

export interface BorderExample {
  name: string
  bgColor: string
}

export interface BorderType {
  color: string
  label: string
  textColor: string
  examples: string[]
}

const borderData: BorderType[] = [
  {
    color: 'ui3',
    examples: ['background', 'ui1', 'ui2'],
    label: 'Default Border',
    textColor: 'text3',
  },
  {
    color: 'ui4',
    examples: ['background', 'ui1', 'ui2', 'ui3'],
    label: 'Dark Border',
    textColor: 'text3',
  },
  {
    color: 'ui2',
    examples: ['background', 'ui1', 'ui3'],
    label: 'Light Border',
    textColor: 'text3',
  },
  {
    color: 'text2',
    examples: ['inverse'],
    label: 'Border on Dark',
    textColor: 'inverseOn',
  },
]

export const BorderRender = () =>
  borderData.map((border) => <Example border={border} key={border.color} />)

const Example: FC<{ border: BorderType }> = ({
  border: { color, examples, label, textColor },
}) => (
  <Box mb="xlarge">
    <Heading as="h3" fontWeight="semiBold" mb="small">
      {label} <Code fontSize="medium">{color}</Code>
    </Heading>
    {examples.map((example) => (
      <BorderExample bg={example} key={example} color={textColor}>
        <Code>{example}</Code>
        <BorderDividerExample bg={color} />
      </BorderExample>
    ))}
  </Box>
)

const BorderExample = styled(Box)`
  align-items: center;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.ui3};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.large};

  &:not(:last-child) {
    border-bottom: none;
  }
`

const BorderDividerExample = styled(Box)`
  height: 1px;
  width: 70%;
`
