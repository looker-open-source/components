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

export interface TabPanelProps {
  className?: string
  selected?: boolean
  /**
   * Set to `true` if you would like TabPanel to be reached via tab-key.
   * Generally this is _only_ the case when the TabPanel contains no tab-stopping items (a, button, etc.)
   * @default false
   */
  isTabStop?: boolean
}

const TabPanelLayout: FC<TabPanelProps> = ({
  children,
  className,
  selected,
  isTabStop = false,
}) =>
  selected ? (
    <div className={className} tabIndex={isTabStop ? 0 : -1}>
      {children}
    </div>
  ) : null

/**
 * @deprecated Use `Tabs2` & `Tab2` instead
 */
export const TabPanel = styled(TabPanelLayout)`
  height: 100%;
  outline: none;
`
