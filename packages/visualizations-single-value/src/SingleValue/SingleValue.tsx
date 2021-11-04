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
import type { SingleValueProps } from '@looker/visualizations-adapters'
import numeral from 'numeral'
import styled from 'styled-components'
import { VisWrapper } from '@looker/visualizations-adapters'

export const SingleValue: FC<SingleValueProps> = ({
  data,
  fields,
  width,
  height,
}) => {
  if (!data) {
    return null
  }

  const { name, value_format } = fields.measures[0]
  const value: number = data[0][name || '']
  const formattedValue = value_format
    ? numeral(value).format(value_format)
    : value

  return (
    <VisWrapper>
      <SingleValueLayout width={width} height={height}>
        <SingleValueContent>{formattedValue}</SingleValueContent>
      </SingleValueLayout>
    </VisWrapper>
  )
}

type SingleValueLayoutProps = { width?: number; height?: number }

const SingleValueLayout = styled.div<SingleValueLayoutProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr;
  height: ${({ height }) => `${height}px` || 'auto'};
  justify-items: center;
  width: ${({ width }) => `${width}px` || 'auto'};
`

const SingleValueContent = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
`
