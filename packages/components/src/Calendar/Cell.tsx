/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import type { RangeProps } from './types'
import { rangeTypeStyle } from './utils'

export type CellProps = RangeProps & {
  children?: ReactNode
  className?: string
  weekEnd?: boolean
  weekStart?: boolean
}

const rangePositionWidth = ({
  rangePosition,
  weekStart,
  weekEnd,
}: CellProps) => {
  if (!rangePosition || rangePosition === 'middle') {
    return css`
      width: 100%;
    `
  }
  if (
    (rangePosition === 'end' && weekStart) ||
    (rangePosition === 'start' && weekEnd)
  ) {
    return css`
      width: calc(100% - ${({ theme: { space } }) => space.u4});
    `
  }
  return css`
    width: ${({ theme }) => theme.space.u4};
  `
}

const rangePositionLeft = ({ rangePosition, weekStart }: CellProps) => {
  if (rangePosition === 'start') {
    if (weekStart) {
      return css`
        left: auto;
        right: 0;
      `
    } else {
      return css`
        left: ${({ theme }) => theme.space.u4};
      `
    }
  }
  return css`
    left: 0;
  `
}

export const Cell = styled(({ children, className }: CellProps) => {
  return <div className={className}>{children}</div>
})`
  margin: ${({ theme }) => theme.space.u05} 0;
  padding-left: ${({ theme, weekStart }) => (weekStart ? theme.space.u5 : '0')};
  padding-right: ${({ theme, weekEnd }) => (weekEnd ? theme.space.u5 : '0')};
  position: relative;
  &::before {
    content: ' ';
    height: 100%;
    position: absolute;
    ${rangePositionWidth}
    ${rangePositionLeft}
     ${rangeTypeStyle}
  }
`
