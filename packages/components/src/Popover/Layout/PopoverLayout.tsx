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
import { ModalLayoutProps, ModalLoading } from '../../Modal/ModalLayout'
import { PopoverContent } from './PopoverContent'
import { PopoverFooter } from './PopoverFooter'
import { PopoverHeader } from './PopoverHeader'

type WithHeader = {
  header?: ModalLayoutProps['header']
  hideHeading?: never
}

type WithoutHeader = {
  header?: never
  /**
   * Heading will not be visually available but it will still properly announced in screen reader scenarios
   * @default false
   */
  hideHeading?: boolean
}

type HeaderOptions = WithHeader | WithoutHeader
export type PopoverLayoutProps = HeaderOptions & ModalLayoutProps

export const PopoverLayout: FC<PopoverLayoutProps> = ({
  children,
  footer,
  header,
  headerCloseButton = !footer && true,
  hideHeading = false,
  isLoading,
}) => {
  const internalFooter = typeof footer === 'boolean' ? null : footer
  return (
    <>
      {header && !hideHeading ? (
        <PopoverHeader hideClose={!headerCloseButton}>{header}</PopoverHeader>
      ) : (
        <PopoverHeader hideClose={!headerCloseButton}> </PopoverHeader>
      )}
      <PopoverContent hasFooter={!footer} hasHeader={!header}>
        {isLoading ? <ModalLoading /> : children}
      </PopoverContent>
      {footer && <PopoverFooter>{internalFooter}</PopoverFooter>}
    </>
  )
}
