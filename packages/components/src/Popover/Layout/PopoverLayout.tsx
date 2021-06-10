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
import { DialogLayoutProps, DialogHeaderProps } from '../../Dialog'
import { Spinner } from '../../Spinner'
import { PopoverContent } from './PopoverContent'
import { PopoverFooter } from './PopoverFooter'
import { PopoverHeader, PopoverHeaderProps } from './PopoverHeader'

export interface PopoverLayoutProps
  extends Omit<DialogLayoutProps, 'footerSecondary' | `headerDetails`> {
  hideHeading?: boolean
}

type HeadingHeader = {
  header?: DialogLayoutProps['headerDetail']
  hideHeading?: never
}

type HeadingHideHeading = {
  header?: string
  hideHeading?: boolean
}

type HeadingOptions = HeadingHeader | HeadingHideHeading

type PopoverLayoutHeaderProps = Pick<
  DialogHeaderProps,
  'children' | 'detail' | 'hideClose'
>

const PopoverLayoutHeader: FC<PopoverLayoutHeaderProps> = ({
  children,
  detail,
  hideClose,
}) => {
  if (hideClose) {
    return <PopoverHeader hideClose>{children}</PopoverHeader>
  } else if (detail) {
    return <PopoverHeader detail={detail}>{children}</PopoverHeader>
  } else {
    return <PopoverHeader>{children}</PopoverHeader>
  }
}

export const PopoverLayout: FC<PopoverLayoutProps> = ({
  children,
  footer,
  header,
  headerCloseButton = !footer && true,
  headerDetail,
  isLoading,
}) => {
  const popoverFooter = footer && <PopoverFooter>{footer}</PopoverFooter>

  return (
    <>
      {header && (
        <PopoverLayoutHeader
          hideClose={!headerCloseButton}
          detail={headerDetail}
        >
          {header}
        </PopoverLayoutHeader>
      )}
      <PopoverContent hasFooter={!PopoverFooter} hasHeader={!header}>
        {isLoading ? <PopoverLoading /> : children}
      </PopoverContent>
      {popoverFooter}
    </>
  )
}

const PopoverLoading = () => <Spinner mx="auto" my="xxlarge" />
