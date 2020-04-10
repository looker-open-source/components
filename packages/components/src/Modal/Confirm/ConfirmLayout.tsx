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
import React, { FC, ReactElement } from 'react'

import { ButtonProps } from '../../Button'
import { IconProps } from '../../Icon'
import { Paragraph } from '../../Text'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'

interface ConfirmLayoutProps {
  /**
   * Header content
   */
  title: string
  /**
   * Optional icon to display next to the title
   */
  titleIcon?: ReactElement<IconProps>
  /**
   * Primary modal content
   */
  message: ReactElement | string
  /**
   * Click to confirm
   */
  primaryButton: ReactElement<ButtonProps>
  /**
   * Click to cancel
   */
  secondaryButton: ReactElement<ButtonProps>
}

export const ConfirmLayout: FC<ConfirmLayoutProps> = ({
  secondaryButton,
  primaryButton,
  message,
  title,
  titleIcon = undefined,
}) => {
  return (
    <>
      <ModalHeader hideClose headerIcon={titleIcon}>
        {title}
      </ModalHeader>
      <ModalContent innerProps={{ py: 'none' }}>
        {typeof message === 'string' ? (
          <Paragraph>{message}</Paragraph>
        ) : (
          message
        )}
      </ModalContent>
      <ModalFooter>
        {primaryButton}
        {secondaryButton}
      </ModalFooter>
    </>
  )
}
