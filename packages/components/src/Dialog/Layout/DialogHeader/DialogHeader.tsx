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

import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { DialogContext } from '../../DialogContext'
import { ModalHeader, ModalHeaderProps } from '../../../Modal/ModalHeader'
import { ModalHeaderCloseButton } from '../../../Modal/ModalHeaderCloseButton'

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

export type DetailOptions = WithDetail | WithHideClose
export type DialogHeaderProps = DetailOptions & Omit<ModalHeaderProps, 'detail'>

const DialogHeaderLayout: FC<DialogHeaderProps> = ({
  children,
  hideClose = false,
  detail,
  ...props
}) => {
  const { id: dialogId } = useContext(DialogContext)
  const headingId = dialogId ? `${dialogId}-heading` : undefined

  return (
    <ModalHeader
      detail={detail || (!hideClose && <ModalHeaderCloseButton />)}
      id={headingId}
      px="xlarge"
      py="large"
      {...props}
    >
      {children}
    </ModalHeader>
  )
}

export const DialogHeader = styled(DialogHeaderLayout)<DialogHeaderProps>``
