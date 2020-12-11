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

import React, { Fragment, ReactNode } from 'react'
import styled from 'styled-components'
import sortBy from 'lodash/sortBy'

/**
 * IMPORTANT: It is only acceptable to reach across package boundaries like this
 * because this is a Story and will never be run in a "production" environment.
 *
 * In this case we don't want to create a dependency loop between @looker/design-tokens
 * and @looker/components
 */
import { Tooltip } from '../../components/src'
import { theme } from './theme'

const CELL_SIZE = '3rem'

const sortedColorsArray = sortBy(Object.entries(theme.colors), 0)

export const AllColors = () => {
  const colors = sortedColorsArray.map(([name, color]) => {
    return { color, label: `${name} - ${color}` }
  })

  return <MiniSwatches>{colors}</MiniSwatches>
}

export const GroupedByOutput = () => {
  const grouped: { [key: string]: string[] } = {}

  sortedColorsArray.forEach(([name, color]) => {
    if (grouped[color]) {
      grouped[color] = [...grouped[color], name]
    } else {
      grouped[String(color)] = [name]
    }
  })

  const colors = Object.entries(grouped).map(([color, entries]) => {
    const labels = entries.map((label, index) => (
      <Fragment key={index}>
        {label} <br />
      </Fragment>
    ))

    return {
      color,
      label: (
        <>
          <strong>{color}</strong>
          <br />
          {labels}
        </>
      ),
    }
  })

  return <MiniSwatches>{colors}</MiniSwatches>
}

GroupedByOutput.parameters = {
  storyshots: { disable: true },
}

export default {
  title: 'Colors',
}

const GridLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(${CELL_SIZE}, 1fr));
  padding: 1rem;
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
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.xxsmall};
  width: 3rem;
`

interface MiniSwatchesProps {
  children: { color: string; label: ReactNode }[]
}

const MiniSwatches = ({ children }: MiniSwatchesProps) => {
  const colorSwatches = children.map(({ label, color }, index) => (
    <Tooltip key={index} content={label} textAlign="left">
      <CircleSwatch color={color}></CircleSwatch>
    </Tooltip>
  ))

  return <GridLayout>{colorSwatches}</GridLayout>
}
