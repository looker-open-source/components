/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { SingleValueProps } from '@looker/visualizations-adapters'
import numeral from 'numeral'
import styled from 'styled-components'
import { VisWrapper } from '@looker/visualizations-adapters'

export const SingleValue = ({
  data,
  fields,
  width,
  height,
  config,
}: SingleValueProps) => {
  if (!data) {
    return null
  }
  const { series = {} } = config

  // only allow one measure for single_value
  const { name } = fields.measures[0]
  const firstSeries = Array.isArray(series) ? series[0] : series[name || '']
  const { color, label, value_format } = firstSeries
  const value: number = data[0][name || '']
  const formattedValue = numeral(value).format(value_format)
  return (
    <VisWrapper>
      <SingleValueLayout width={width} height={height}>
        <SingleValueContent color={color}>{formattedValue}</SingleValueContent>
        {label && <SingleValueTitle color={color}>{label}</SingleValueTitle>}
      </SingleValueLayout>
    </VisWrapper>
  )
}

type SingleValueLayoutProps = { width?: number; height?: number }
type SingleValueContentProps = { color?: string }

const SingleValueLayout = styled.div<SingleValueLayoutProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr;
  height: ${({ height }) => `${height}px` || `auto`};
  justify-items: center;
  width: ${({ width }) => `${width}px` || `auto`};
`

const SingleValueContent = styled.div<SingleValueContentProps>`
  color: ${({ color }) => `${color}`};
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
`
const SingleValueTitle = styled.div<SingleValueContentProps>`
  color: ${({ color }) => `${color}`};
  font-size: ${({ theme }) => theme.fontSizes.large};
  opacity: 50%;
`
