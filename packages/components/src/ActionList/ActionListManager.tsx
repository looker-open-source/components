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

import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Spinner } from '../Spinner'
import { NoResults } from './NoResults'

export interface ActionListManagerProps {
  className?: string
  isLoading?: boolean
  noResults?: boolean
  /**
   * Text to be displayed when no results state displayed
   *
   * @default 'No Results'
   */
  noResultsDisplay?: ReactNode
}

const ActionListManagerLayout: FC<ActionListManagerProps> = ({
  children,
  className,
  isLoading,
  noResults,
  noResultsDisplay,
}) => {
  if (isLoading) {
    children = <Spinner />
  } else if (noResults) {
    children =
      !noResultsDisplay || typeof noResultsDisplay === 'string' ? (
        <NoResults>{noResultsDisplay || 'No Results'}</NoResults>
      ) : (
        noResultsDisplay
      )
  }

  return <div className={className}>{children}</div>
}

const centerItemStates = css`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 8rem;
`

export const ActionListManager = styled(ActionListManagerLayout)`
  ${({ isLoading, noResults }) => (isLoading || noResults) && centerItemStates}
`
