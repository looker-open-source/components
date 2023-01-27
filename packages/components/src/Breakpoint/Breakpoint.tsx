/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { useCallback, useState } from 'react'
import type { ReactNode } from 'react'
import type { NamedBreakpoints } from '@looker/design-tokens'
import { convertRemToPx, BreakpointRamp } from '@looker/design-tokens'
import isArray from 'lodash/isArray'
import { useTheme } from 'styled-components'
import { useResize } from '../utils'

export interface BreakpointProps {
  /*
   * Define a single screen size or range of screen sizes to render the children.
   */
  show: NamedBreakpoints | [NamedBreakpoints?, NamedBreakpoints?]
  children?: ReactNode
}

export const Breakpoint = ({ children, show }: BreakpointProps) => {
  // Define screen size range.
  // If they pass a single value, e.g. 'mobile', it should be equivalent to
  // "from mobile, to mobile"
  const [from = 'mobile', to = 'xl'] = isArray(show) ? show : [show, show]
  const [screenWidth, setScreenWidth] = useState(
    typeof document === 'undefined' ? 800 : document.body.clientWidth
  )
  const theme = useTheme()
  const breakpointPx = theme.breakpoints.map((b: string) =>
    convertRemToPx(parseInt(b.replace('rem', '')))
  )

  const fromIndex = theme.breakpoints.indexOf(BreakpointRamp[from])
  const toIndex = theme.breakpoints.indexOf(BreakpointRamp[to])

  const handleResize = useCallback(() => {
    if (document) {
      // document is not available in server side rendering
      setScreenWidth(document.body.clientWidth)
    }
  }, [])

  useResize(
    typeof document === 'undefined' ? null : document.body,
    handleResize
  )

  const screenMin = from === 'mobile' ? 0 : breakpointPx[fromIndex - 1] // mobile screens start at 0px
  const screenMax = to === 'xl' ? Infinity : breakpointPx[toIndex] // xl includes xl breakpoint and above

  return (
    <>{screenWidth > screenMin && screenWidth <= screenMax ? children : null}</>
  )
}
