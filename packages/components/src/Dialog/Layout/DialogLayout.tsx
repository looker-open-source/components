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

import React, { FC, ReactNode, ReactChild } from 'react'
import { ModalHeaderProps } from '../../Modal/ModalHeader'
import {
  ModalLayout,
  ModalLayoutProps,
  ModalLoading,
} from '../../Modal/ModalLayout'
import { DialogContent } from './DialogContent'
import { DialogFooter } from './DialogFooter'
import { DialogHeader } from './DialogHeader'

export interface DialogLayoutProps extends ModalLayoutProps {
  /**
   * Secondary content to place in the footer
   * NOTE: `footer` property must be supplied for footer to be displayed. Supplying
   * only `footerSecondary` will prevent `DialogFooter` from being displayed.
   */
  footerSecondary?: ReactNode

  /**
   * Replaces the built-in `IconButton` (generally used for close) with an arbitrary ReactNode
   */
  headerDetail?: ModalHeaderProps['detail']
  /*
   * Content in header. If a `string` is supplied the content will be placed in a `<Header />`
   */
  header?: ReactChild

  /**
   * Display "Close" IconButton in the DialogHeader.
   * NOTE: `true` if no footer is supplied and `headerClose` is not explicitly specified.
   * @default false
   */
  headerCloseButton?: boolean
}

export const DialogLayout: FC<DialogLayoutProps> = ({
  children,
  footer,
  footerSecondary,
  header,
  headerCloseButton = !footer && true,
  headerDetail,
  isLoading,
}) => {
  const dialogFooter = (footer || footerSecondary) && (
    <DialogFooter secondary={footerSecondary}>{footer}</DialogFooter>
  )
  const dialogHeader =
    header &&
    (!headerDetail ? (
      <DialogHeader hideClose={!headerCloseButton}>{header}</DialogHeader>
    ) : (
      <DialogHeader detail={headerDetail}>{header}</DialogHeader>
    ))

  return (
    <ModalLayout footer={dialogFooter} header={dialogHeader}>
      <DialogContent hasFooter={!!footer} hasHeader={!!header}>
        {isLoading ? <ModalLoading /> : children}
      </DialogContent>
    </ModalLayout>
  )
}
