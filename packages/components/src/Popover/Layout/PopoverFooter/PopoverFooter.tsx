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

import { useTranslation } from 'react-i18next'
import React, { FC, ReactChild, ReactElement, useContext } from 'react'
import styled from 'styled-components'
import { DialogContext } from '../../../Dialog/DialogContext'
import {
  ModalFooter,
  ModalFooterProps,
} from '../../../Modal/ModalFooter/ModalFooter'
import { ButtonTransparent } from '../../../Button'

export interface PopoverFooterProps
  extends Omit<ModalFooterProps, 'secondary' | 'children'> {
  children?: ReactChild | string | null
  /**
   * Button to close popover
   * I18n recommended: content that is user visible should be treated for i18n
   * @default Done
   */
  close?: ReactElement | string
}

const PopoverFooterLayout: FC<PopoverFooterProps> = (props) => {
  const { closeModal } = useContext(DialogContext)
  const { t } = useTranslation('PopoverFooter')
  const closeText = t('Done')
  const { children, close = closeText } = props

  return (
    <ModalFooter mr="xsmall" pl="large" pr="medium" py="xsmall" {...props}>
      {children}
      {typeof close === 'string' ? (
        <ButtonTransparent size="small" ml="xsmall" onClick={closeModal}>
          {close}
        </ButtonTransparent>
      ) : (
        close
      )}
    </ModalFooter>
  )
}

export const PopoverFooter = styled(PopoverFooterLayout)<PopoverFooterProps>`
  align-items: center;
`
