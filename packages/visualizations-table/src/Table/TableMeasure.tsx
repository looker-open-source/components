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

import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'

interface TableMeasureProps {
  min: number
  max: number
  value: number
}

/*
 * TableMeasure is used to render a relative "bar" visualization within table cells,
 * to simulate the experience of a bar chart embedded inside the Table
 */

export const TableMeasure: FC<TableMeasureProps> = ({
  value = 0.5,
  max = 1,
}) => {
  const fillPercent = (value / max) * 0.75 // max out at 75% cell width to ensure room to render the value
  return (
    <MeasureWrapper>
      <Bar width={fillPercent} data-testid="cell-visualization" />
      <div>{value}</div>
    </MeasureWrapper>
  )
}

const Bar = styled.div<{ width: number }>`
  background: ${({ theme }) => theme.colors.key};
  flex: ${({ width }) => width};
  height: 1rem;
`

const MeasureWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xsmall};
`
