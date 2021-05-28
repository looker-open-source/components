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
import {
  ModalHeaderCloseButton,
  ModalHeader,
  ModalHeaderProps,
} from '../../../Modal'

type WithDetail = {
  detail?: ModalHeaderProps['detail']
  hideClose?: never
}

type WithHideClose = {
  detail?: never
  /**
   * Don't include the "Close" option
   * @default false
   */
  hideClose?: boolean
}

export type PopoverHeaderProps = WithDetail | WithHideClose

const PopoverHeaderLayout: FC<PopoverHeaderProps> = ({
  children,
  hideClose = false,
  detail,
  ...props
}) => {
  return (
    <ModalHeader
      detail={detail || (!hideClose && <ModalHeaderCloseButton size="small" />)}
      fontSize="small"
      fontWeight="medium"
      pl="large"
      pr="medium"
      py="small"
      {...props}
    >
      {children}
    </ModalHeader>
  )
}

export const PopoverHeader = styled(PopoverHeaderLayout)<ModalHeaderProps>``