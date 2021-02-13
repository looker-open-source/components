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

import React, { FC } from 'react'
import styled from 'styled-components'

const Layout: FC<{ className?: string }> = ({ className }) => (
  <div className={className} />
)

export const FauxPieChart = styled(Layout)`
  background: ${({
    theme: {
      colors: { background, inform, positive, warn, critical, key, neutral },
    },
  }) => `radial-gradient(circle closest-side, transparent 66%, ${background} 0),
    conic-gradient(
      ${inform} 0,
      ${inform} 38%,
      ${positive} 0,
      ${positive} 61%,
      ${warn} 0,
      ${warn} 77%,
      ${critical} 0,
      ${critical} 87%,
      ${key} 0,
      ${key} 93%,
      ${neutral} 0,
      ${neutral} 100%
    )`};
  height: 100%;
  outline: 1px solid #ccc;
  position: relative;
  width: 100%;
`
