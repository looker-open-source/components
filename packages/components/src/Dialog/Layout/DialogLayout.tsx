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
import { Spinner } from '../../Spinner'
import { DialogContent } from './DialogContent'
import { DialogFooter } from './DialogFooter'
import { DialogHeader } from './DialogHeader'

export interface DialogLayout {
  /**
   * Content to be displayed in footer
   */
  footer?: ReactNode
  /**
   * Secondary content to place in the footer
   * NOTE: `footer` property must be supplied for footer to be displayed. Supplying
   * only `footerSecondary` will prevent `DialogFooter` from being displayed.
   */
  footerSecondary?: ReactNode

  /**
   * Content in header. If a `string` is supplied the content will be placed in a <Header />
   */
  header: ReactNode
  /**
   * Replaces the built-in `IconButton` (generally used for close) with an arbitrary ReactNode
   */
  headerDetail?: ReactNode
  /**
   * Display "Close" IconButton in the DialogHeader.
   * NOTE: `true` if no footer is supplied and `headerClose` is not explicitly specified.
   * @default false
   */
  headerCloseButton?: boolean

  /**
   * Display loading spinner instead of the DialogContent
   */
  isLoading?: boolean
}

/**
 *
 */
export const DialogLayout: FC<DialogLayout> = ({
  children,
  footer,
  footerSecondary,
  header,
  headerCloseButton = !footer && true,
  headerDetail,
  isLoading,
}) => {
  const dialogHeader = header && (
    <DialogHeader hideClose={!headerCloseButton} detail={headerDetail}>
      {header}
    </DialogHeader>
  )

  const dialogFooter = footer && (
    <DialogFooter secondary={footerSecondary}>{footer}</DialogFooter>
  )

  return (
    <>
      {dialogHeader}
      <DialogContent noFooter={!dialogFooter}>
        {isLoading ? <DialogLoading /> : children}
      </DialogContent>
      {dialogFooter}
    </>
  )
}

const DialogLoading = () => <Spinner mx="auto" my="xxlarge" />
