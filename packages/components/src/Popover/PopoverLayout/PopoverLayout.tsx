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

import React, { FC, ReactChild, ReactNode } from 'react'
import { Spinner } from '../../Spinner'
import { PopoverContent } from './PopoverContent'
import { PopoverFooter } from './PopoverFooter'
import { PopoverHeader } from './PopoverHeader'

export interface PopoverLayoutProps {
  /**
   * Content to be displayed in footer
   */
  footer?: ReactChild | string
  /**
   * Content in header. If a `string` is supplied the content will be placed in a <Header />
   */
  header?: ReactChild | string
  /**
   * Display "Close" IconButton in the PopoverHeader.
   * NOTE: `true` if no footer is supplied and `headerClose` is not explicitly specified.
   * @default false
   */
  headerCloseButton?: boolean

  /**
   * hide "header", only if the prop is a string.
   * @default false
   */
  hideHeading?: boolean

  /**
   * Display loading spinner instead of the PopoverContent
   */
  isLoading?: boolean | ReactNode
}

/**
 *
 */

const PopoverLoading = (isLoading: boolean | ReactNode) =>
  isLoading === true ? <Spinner mx="auto" my="xxlarge" /> : { isLoading }

export const PopoverLayout: FC<PopoverLayoutProps> = ({
  children,
  footer,
  header,
  headerCloseButton = !footer && true,
  hideHeading = false,
  isLoading,
}) => {
  const popoverHeader = header && (
    <PopoverHeader hideClose={!headerCloseButton}>{header}</PopoverHeader>
  )

  const popoverFooter = footer && <PopoverFooter>{footer}</PopoverFooter>

  return (
    <>
      {!hideHeading && popoverHeader}
      <PopoverContent hasFooter={!popoverFooter} hasHeader={!popoverHeader}>
        {isLoading ? PopoverLoading(isLoading) : children}
      </PopoverContent>
      {popoverFooter}
    </>
  )
}
