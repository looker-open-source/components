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

import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { ModalFooter, ModalFooterProps } from '../../Modal/ModalFooter'
import { ButtonTransparent } from '../../Button'
import { Space } from '../../Layout/Space'

export interface PopoverFooterProp extends Omit<ModalFooterProps, 'secondary'> {
  /**
   * Button to close popover
   * @default 'Done'
   */
  close?: ReactElement | string
  /**
   * function to control close behavior
   */
  closeModal?: () => void
}

const PopoverFooterLayout: FC<PopoverFooterProp> = ({
  children,
  close = 'Done',
  closeModal,
  ...props
}) => {
  return (
    <ModalFooter {...props}>
      <Space reverse>
        <Detail>
          {typeof close === 'string' ? (
            <ButtonTransparent color="key" size="small" onClick={closeModal}>
              {close}
            </ButtonTransparent>
          ) : (
            close
          )}
        </Detail>
        {children}
      </Space>
    </ModalFooter>
  )
}

const Detail = styled.div`
  margin-left: auto;
  margin-right: medium;
`

export const PopoverFooter = styled(PopoverFooterLayout).attrs(
  ({ pl = 'large', pr = 'medium', py = 'xsmall' }) => ({
    pl,
    pr,
    py,
  })
)<PopoverFooterProp>`
  color: ${({ theme }) => theme.colors.text3};
  font-size: ${({ theme }) => theme.space.small};
  margin-right: ${({ theme }) => theme.space.xsmall};
`
