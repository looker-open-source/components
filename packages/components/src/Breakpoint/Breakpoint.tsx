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

import React, { useContext, FC, ReactNode, useState } from 'react'
import {
  convertRemToPx,
  NamedBreakpoints,
  NAMED_BREAKPOINTS,
} from '@looker/design-tokens'
import { ThemeContext } from 'styled-components'
import { useResize } from '../utils'

export interface BreakpointProps {
  children: ReactNode
  show: [NamedBreakpoints] | [NamedBreakpoints, NamedBreakpoints]
}

export const Breakpoint: FC<BreakpointProps> = ({ children, show }) => {
  // Define screen size range.
  // If they pass a single value, e.g. ['mobile'], it should be equivalent to
  // "from mobile, to mobile"
  const from = show[0] || 'mobile'
  const to = show.length === 1 ? from : show[1] || 'xl'
  const [screenWidth, setScreenWidth] = useState(screen.width)
  const theme = useContext(ThemeContext)
  const breakpointPx = theme.breakpoints.map((b: string) =>
    convertRemToPx(parseInt(b.replace('rem', '')))
  )
  const fromIndex = NAMED_BREAKPOINTS.indexOf(from)
  const toIndex = NAMED_BREAKPOINTS.indexOf(to)

  const handleResize = () => {
    setScreenWidth(screen.width)
  }

  useResize(document.body, handleResize)

  const screenMin = from === 'mobile' ? 0 : breakpointPx[fromIndex - 1] // mobile screens start at 0px
  const screenMax = to === 'xl' ? Infinity : breakpointPx[toIndex] // xl includes xl breakpoint and above

  return (
    <>{screenWidth > screenMin && screenWidth <= screenMax ? children : null}</>
  )
}
