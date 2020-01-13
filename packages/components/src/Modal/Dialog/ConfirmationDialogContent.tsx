import React, { FC, ReactElement } from 'react'

import { ButtonProps } from '../../Button'
import { IconProps } from '../../Icon'
import { Paragraph } from '../../Text'
import { ModalContent, ModalFooter, ModalHeader } from '../Layout'

interface ConfirmationDialogContentProps {
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

export const ConfirmationDialogContent: FC<ConfirmationDialogContentProps> = ({
  secondaryButton,
  primaryButton,
  message,
  title,
  titleIcon = undefined,
}) => {
  return (
    <>
      <ModalHeader headerIcon={titleIcon}>{title}</ModalHeader>
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
