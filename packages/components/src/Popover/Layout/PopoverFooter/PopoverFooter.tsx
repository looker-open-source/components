/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import type { FC, ReactNode, ReactElement } from 'react'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { DialogContext } from '../../../Dialog/DialogContext'
import type { ModalFooterProps } from '../../../Modal/ModalFooter/ModalFooter'
import { ModalFooter } from '../../../Modal/ModalFooter/ModalFooter'
import { ButtonTransparent } from '../../../Button'

export interface PopoverFooterProps
  extends Omit<ModalFooterProps, 'secondary' | 'children'> {
  children?: ReactNode
  /**
   * Button to close popover
   * I18n recommended: content that is user visible should be treated for i18n
   * @default Done
   */
  closeButton?: ReactElement | string
}

const PopoverFooterLayout: FC<PopoverFooterProps> = ({
  children,
  closeButton,
  ...props
}) => {
  const { closeModal } = useContext(DialogContext)
  const { t } = useTranslation('PopoverFooter')
  closeButton = closeButton || t('Done')

  return (
    <ModalFooter pl="large" pr="medium" py="xsmall" {...props}>
      {typeof closeButton === 'string' ? (
        <ButtonTransparent size="small" onClick={closeModal}>
          {closeButton}
        </ButtonTransparent>
      ) : (
        closeButton
      )}
      {children}
    </ModalFooter>
  )
}

export const PopoverFooter = styled(PopoverFooterLayout)<PopoverFooterProps>``
