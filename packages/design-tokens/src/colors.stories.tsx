/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import styled from 'styled-components'
import sortBy from 'lodash/sortBy'
import { theme } from './theme'

const CELL_SIZE = '3rem'
const sortedColorsArray = sortBy(Object.entries(theme.colors), 0)

const GridLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(${CELL_SIZE}, 1fr));
  padding: 1rem;
`

const CircleSwatch = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.elevations.plus3};
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.u1};
  width: 3rem;
`

export const AllColors = () => {
  const colors = sortedColorsArray.map(([name, color]) => {
    return { color }
  })
  const colorSwatches = colors.map(({ color }, index) => (
    <CircleSwatch key={index} color={color} />
  ))
  return <GridLayout>{colorSwatches}</GridLayout>
}

export default {
  title: 'Design Tokens / Colors',
}
