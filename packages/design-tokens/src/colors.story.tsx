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

import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Code, Flex, Heading } from '@looker/components'

import sortBy from 'lodash/sortBy'
import { getLuminance } from 'polished'

const CELL_SIZE = '6rem'

export const Complete = () => (
  <GridLayout>
    <ColorSlots />
  </GridLayout>
)

export default {
  component: Complete,
  title: 'Colors',
}

const GridLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(${CELL_SIZE}, 1fr));
`

/**
 * We don't want to create a dependency loop between design-tokens & components so this
 * implements a simplistic swatch for snapshot purposes.
 */
interface SwatchProps {
  color: string
}

const CircleSwatch = styled.div<SwatchProps>`
  background: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows[3]};
  color: ${({ color, theme }) =>
    getLuminance(color) > 0.5 ? theme.colors.text : theme.colors.inverseOn};
  display: flex;
  font-family: ${({ theme }) => theme.fonts.body};
  height: 3rem;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.xxsmall};
  width: 3rem;
`

const ColorSlots = () => {
  const { colors } = useContext(ThemeContext)

  const colorSwatches = sortBy(Object.entries(colors), 0).map(
    ([name, color]) => (
      <Flex
        flexDirection="column"
        key={name}
        alignItems="center"
        width={CELL_SIZE}
      >
        <CircleSwatch color={color}></CircleSwatch>

        <Heading
          truncate
          fontSize="small"
          pt="xsmall"
          fontWeight="semiBold"
          fontFamily="body"
        >
          {name}
        </Heading>
        <Code fontSize="xsmall">{color.toUpperCase()}</Code>
      </Flex>
    )
  )

  return <>{colorSwatches}</>
}
