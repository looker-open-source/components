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

import React, { FC, ReactNode } from 'react'
import { ModalHeaderProps } from '../../Modal/ModalHeader'
import {
  ModalLayout,
  ModalLayoutProps,
  ModalLoading,
} from '../../Modal/ModalLayout'
import { DialogContent } from './DialogContent'
import { DialogFooter } from './DialogFooter'
import { DialogHeader, DialogHeaderProps } from './DialogHeader'

type WithFooter = {
  /**
   * displays content on the right-side of the DialogFooter, uses
   * Space to add whitespace between each element.
   */
  footer: ModalLayoutProps['footer']
  /**
   * Secondary content to place in the footer
   * NOTE: `footer` property must be supplied for footer to be displayed. Supplying
   * only `footerSecondary` will prevent `DialogFooter` from being displayed.
   */
  footerSecondary?: ReactNode
}

type WithoutFooter = {
  footer?: undefined
  footerSecondary?: never
}

type FooterOptions = WithFooter | WithoutFooter

export type DialogLayoutProps = FooterOptions &
  ModalLayoutProps & {
    children?: ReactNode
    /**
     * Content in header. If a `string` is supplied the content will be placed in a `<Header />`
     */
    header?: ReactNode

    /**
     * Replaces the built-in `IconButton` (generally used for close) with an arbitrary ReactNode
     */
    headerDetail?: ModalHeaderProps['detail']

    /**
     * Display "Close" IconButton in the DialogHeader.
     * NOTE: `true` if no footer is supplied and `headerClose` is not explicitly specified.
     */
    headerCloseButton?: boolean
  }

const constructDialogHeader = (
  children?: ReactNode,
  closeButton?: boolean,
  detail?: ReactNode,
  footerExists?: boolean
) => {
  if (!children) return null

  const props: DialogHeaderProps = { children }

  if (detail) {
    props.detail = detail
  } else if (closeButton || footerExists) {
    props.hideClose = !closeButton
  }

  return <DialogHeader {...props} />
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
  const dialogFooter = footer ? (
    <DialogFooter secondary={footerSecondary}>{footer}</DialogFooter>
  ) : null
  const dialogHeader = constructDialogHeader(
    header,
    headerCloseButton,
    headerDetail,
    !!footer
  )

  return (
    <ModalLayout footer={dialogFooter} header={dialogHeader}>
      <DialogContent hasFooter={!!footer} hasHeader={!!header}>
        {isLoading ? <ModalLoading /> : children}
      </DialogContent>
    </ModalLayout>
  )
}
